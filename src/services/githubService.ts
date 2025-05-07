
import { GithubCommit, GithubContent, GithubRepository, GithubUser } from "@/types/github";

class GithubService {
  private baseUrl = "https://api.github.com";

  async searchRepositories(query: string): Promise<GithubRepository[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/search/repositories?q=${encodeURIComponent(
          query
        )}&sort=stars&order=desc`
      );
      const data = await response.json();
      return data.items || [];
    } catch (error) {
      console.error("Error searching repositories:", error);
      return [];
    }
  }

  async getRepository(owner: string, repo: string): Promise<GithubRepository | null> {
    try {
      const response = await fetch(`${this.baseUrl}/repos/${owner}/${repo}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching repository:", error);
      return null;
    }
  }

  async getUser(username: string): Promise<GithubUser | null> {
    try {
      const response = await fetch(`${this.baseUrl}/users/${username}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  }

  async getCommits(owner: string, repo: string, page = 1, perPage = 10): Promise<GithubCommit[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/repos/${owner}/${repo}/commits?page=${page}&per_page=${perPage}`
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching commits:", error);
      return [];
    }
  }

  async getContents(owner: string, repo: string, path = ""): Promise<GithubContent[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/repos/${owner}/${repo}/contents/${path}`
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching contents:", error);
      return [];
    }
  }
}

export const githubService = new GithubService();
