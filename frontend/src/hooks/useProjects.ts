import type { Project } from "@/types/projects";
import { getApiUrl } from "@/utils/api";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

export const featuredProjectsQueryOptions = queryOptions({
  queryKey: ["featuredProjects"],
  queryFn: async (): Promise<Project[]> => {
    const apiUrl = getApiUrl();

    const response = await fetch(`${apiUrl}/projects/featured`);
    if (!response.ok) {
      console.error("Fout bij ophalen van de favoriete projecten.");
    }

    return response.json() as Promise<Project[]>;
  },
});

export const useFeaturedProjects = () => {
  return useSuspenseQuery(featuredProjectsQueryOptions);
};

export const projectsQueryOptions = queryOptions({
  queryKey: ["projects"],
  queryFn: async (): Promise<Project[]> => {
    const apiUrl = getApiUrl();

    const response = await fetch(`${apiUrl}/projects`);
    if (!response.ok) {
      console.error("Fout bij ophalen van alle projecten");
    }

    return response.json() as Promise<Project[]>;
  },
});

export const useProjects = () => {
  return useSuspenseQuery(projectsQueryOptions);
};
