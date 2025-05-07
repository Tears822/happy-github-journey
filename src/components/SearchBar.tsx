
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading = false }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-2xl gap-2">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Search repositories (e.g., facebook/react)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pr-10 w-full"
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading} 
        className="bg-github-blue hover:bg-opacity-90 text-white"
      >
        {isLoading ? (
          <div className="flex items-center">
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            Searching...
          </div>
        ) : (
          <div className="flex items-center">
            <Search className="h-4 w-4 mr-2" />
            Search
          </div>
        )}
      </Button>
    </form>
  );
};

export default SearchBar;
