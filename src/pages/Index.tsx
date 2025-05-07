
import React, { useState } from "react";
import { githubService } from "@/services/githubService";
import { GithubRepository } from "@/types/github";
import SearchBar from "@/components/SearchBar";
import RepositoryList from "@/components/RepositoryList";
import RepositoryDetails from "@/components/RepositoryDetails";
import { Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);
  const [selectedRepository, setSelectedRepository] = useState<GithubRepository | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      // Check if the search query is in 'owner/repo' format
      if (query.includes("/")) {
        const [owner, repo] = query.split("/");
        const repository = await githubService.getRepository(owner.trim(), repo.trim());
        
        if (repository) {
          setRepositories([repository]);
        } else {
          setRepositories([]);
          toast({
            title: "Repository not found",
            description: `Couldn't find repository ${query}`,
            variant: "destructive",
          });
        }
      } else {
        // Search repositories by keyword
        const results = await githubService.searchRepositories(query);
        setRepositories(results);
        
        if (results.length === 0) {
          toast({
            title: "No results found",
            description: `No repositories found matching "${query}"`,
          });
        }
      }
    } catch (error) {
      console.error("Error searching:", error);
      toast({
        title: "Search failed",
        description: "An error occurred while searching. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRepositoryClick = (repository: GithubRepository) => {
    setSelectedRepository(repository);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Github className="h-8 w-8" />
            <h1 className="text-xl font-bold">GitHub Explorer</h1>
          </div>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-github-text hover:text-github-blue"
          >
            Visit GitHub
          </a>
        </div>
      </header>
      
      <main className="container py-8">
        {!selectedRepository ? (
          <>
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">
                Explore GitHub Repositories
              </h1>
              <p className="text-github-text mb-6">
                Search for repositories by name, owner, or keywords. Enter a repository name directly (e.g., "facebook/react") 
                or search by topic.
              </p>
              <div className="flex justify-center">
                <SearchBar onSearch={handleSearch} isLoading={isLoading} />
              </div>
            </div>

            {hasSearched && (
              <RepositoryList 
                repositories={repositories} 
                onRepositoryClick={handleRepositoryClick} 
                isLoading={isLoading} 
              />
            )}
          </>
        ) : (
          <RepositoryDetails 
            repository={selectedRepository} 
            onBack={() => setSelectedRepository(null)} 
          />
        )}
      </main>
      
      <footer className="border-t mt-12">
        <div className="container py-6 text-center text-sm text-github-text">
          <p>GitHub Explorer - Search and browse GitHub repositories easily</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
