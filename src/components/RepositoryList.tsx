
import React from "react";
import { GithubRepository } from "@/types/github";
import RepositoryCard from "./RepositoryCard";

interface RepositoryListProps {
  repositories: GithubRepository[];
  onRepositoryClick: (repository: GithubRepository) => void;
  isLoading: boolean;
}

const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
  onRepositoryClick,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 h-[170px] animate-pulse bg-gray-50"
          ></div>
        ))}
      </div>
    );
  }

  if (repositories.length === 0) {
    return (
      <div className="flex justify-center items-center mt-12">
        <div className="text-center">
          <p className="text-xl font-medium">No repositories found</p>
          <p className="text-github-text mt-2">
            Try searching for a repository or username
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.id}
          repository={repository}
          onClick={() => onRepositoryClick(repository)}
        />
      ))}
    </div>
  );
};

export default RepositoryList;
