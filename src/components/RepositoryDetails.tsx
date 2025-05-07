
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GithubCommit, GithubContent, GithubRepository } from "@/types/github";
import { githubService } from "@/services/githubService";
import { ArrowLeft, FileIcon, FolderIcon, GitCommit, Star, GitFork, AlertCircle } from "lucide-react";
import { formatDistanceToNow, format } from "date-fns";

interface RepositoryDetailsProps {
  repository: GithubRepository;
  onBack: () => void;
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({
  repository,
  onBack,
}) => {
  const [contents, setContents] = useState<GithubContent[]>([]);
  const [commits, setCommits] = useState<GithubCommit[]>([]);
  const [currentPath, setCurrentPath] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("files");

  useEffect(() => {
    async function fetchRepositoryData() {
      setIsLoading(true);
      
      if (activeTab === "files") {
        const contentsData = await githubService.getContents(
          repository.owner.login,
          repository.name,
          currentPath
        );
        setContents(contentsData);
      } else if (activeTab === "commits") {
        const commitsData = await githubService.getCommits(
          repository.owner.login,
          repository.name
        );
        setCommits(commitsData);
      }
      
      setIsLoading(false);
    }

    fetchRepositoryData();
  }, [repository, currentPath, activeTab]);

  const navigateToFolder = (path: string) => {
    setCurrentPath(path);
  };

  const navigateUp = () => {
    const pathParts = currentPath.split('/');
    pathParts.pop();
    setCurrentPath(pathParts.join('/'));
  };

  const renderBreadcrumbs = () => {
    const parts = currentPath.split('/').filter(Boolean);
    
    return (
      <div className="flex items-center text-sm mb-4 overflow-x-auto">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPath("")}
          className="text-github-blue hover:text-github-blue hover:bg-github-gray px-2"
        >
          {repository.name}
        </Button>
        
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            <span className="mx-1 text-github-text">/</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const path = parts.slice(0, index + 1).join('/');
                setCurrentPath(path);
              }}
              className="text-github-blue hover:text-github-blue hover:bg-github-gray px-2"
            >
              {part}
            </Button>
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderContents = () => {
    if (isLoading) {
      return (
        <div className="space-y-2 mt-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-10 bg-github-gray animate-pulse rounded"
            ></div>
          ))}
        </div>
      );
    }

    if (contents.length === 0) {
      return (
        <div className="text-center py-8">
          <p>This folder is empty</p>
        </div>
      );
    }

    // Sort directories first, then files
    const sortedContents = [...contents].sort((a, b) => {
      if (a.type === "dir" && b.type !== "dir") return -1;
      if (a.type !== "dir" && b.type === "dir") return 1;
      return a.name.localeCompare(b.name);
    });

    return (
      <div className="space-y-1">
        {currentPath && (
          <div
            className="flex items-center p-2 hover:bg-github-gray rounded cursor-pointer"
            onClick={navigateUp}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>..</span>
          </div>
        )}
        
        {sortedContents.map((item) => (
          <div
            key={item.sha}
            className="flex items-center p-2 hover:bg-github-gray rounded cursor-pointer"
            onClick={() => {
              if (item.type === "dir") {
                navigateToFolder(item.path);
              } else if (item.type === "file") {
                window.open(item.html_url, "_blank");
              }
            }}
          >
            {item.type === "dir" ? (
              <FolderIcon className="h-4 w-4 mr-2 text-github-blue" />
            ) : (
              <FileIcon className="h-4 w-4 mr-2" />
            )}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderCommits = () => {
    if (isLoading) {
      return (
        <div className="space-y-4 mt-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-20 bg-github-gray animate-pulse rounded"
            ></div>
          ))}
        </div>
      );
    }

    if (commits.length === 0) {
      return (
        <div className="text-center py-8">
          <p>No commits found</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {commits.map((commit) => (
          <Card key={commit.sha} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <GitCommit className="h-5 w-5 text-github-blue mt-1 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium line-clamp-2">{commit.commit.message}</p>
                  <div className="flex items-center mt-2 text-sm text-github-text">
                    <img
                      src={commit.author?.avatar_url || "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
                      alt={commit.commit.author.name}
                      className="h-5 w-5 rounded-full mr-2"
                    />
                    <span>{commit.commit.author.name}</span>
                    <span className="mx-2">·</span>
                    <span>
                      {format(new Date(commit.commit.author.date), "MMM d, yyyy")}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={onBack}
          className="flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to search
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center">
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
                className="h-10 w-10 rounded-full mr-4"
              />
              <div>
                <CardTitle className="text-xl">
                  {repository.full_name}
                </CardTitle>
                <p className="text-sm text-github-text">
                  Updated {formatDistanceToNow(new Date(repository.updated_at))} ago
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-1 text-github-text" />
                <span className="font-medium">{repository.stargazers_count.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <GitFork className="h-5 w-5 mr-1 text-github-text" />
                <span className="font-medium">{repository.forks_count.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-1 text-github-text" />
                <span className="font-medium">{repository.open_issues_count.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-github-text mb-6">
            {repository.description || "No description available"}
          </p>

          <Tabs defaultValue="files" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="files">Files</TabsTrigger>
              <TabsTrigger value="commits">Commits</TabsTrigger>
            </TabsList>
            <TabsContent value="files" className="space-y-4">
              {renderBreadcrumbs()}
              {renderContents()}
            </TabsContent>
            <TabsContent value="commits">
              {renderCommits()}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RepositoryDetails;
