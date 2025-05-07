
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, Eye, AlertCircle } from "lucide-react";
import { GithubRepository } from "@/types/github";
import { formatDistanceToNow } from "date-fns";

interface RepositoryCardProps {
  repository: GithubRepository;
  onClick: () => void;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repository, onClick }) => {
  return (
    <Card 
      className="hover:border-github-blue cursor-pointer transition-all hover:shadow-md"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
              className="h-6 w-6 rounded-full mr-2"
            />
            <CardTitle className="text-lg font-medium">
              {repository.full_name}
            </CardTitle>
          </div>
          {repository.language && (
            <Badge variant="outline" className="ml-2">
              {repository.language}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-github-text line-clamp-2 h-10">
          {repository.description || "No description available"}
        </p>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between text-sm text-github-text">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1" />
            <span>{repository.stargazers_count.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <GitFork className="h-4 w-4 mr-1" />
            <span>{repository.forks_count.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            <span>{repository.open_issues_count.toLocaleString()}</span>
          </div>
        </div>
        <div className="text-xs">
          Updated {formatDistanceToNow(new Date(repository.updated_at))} ago
        </div>
      </CardFooter>
    </Card>
  );
};

export default RepositoryCard;
