import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getApiUrl } from "@/utils/api";
import type { Ervaring } from "@/types/werkErvaring";

export const ervaringQueryOptions = queryOptions({
  queryKey: ["Ervaring"],
  queryFn: async (): Promise<Ervaring[]> => {
    const apiUrl = getApiUrl();

    const response = await fetch(`${apiUrl}/work`);
    if (!response.ok) {
      console.error("Fout bij ophalen van de werk ervaring");
    }

    return response.json() as Promise<Ervaring[]>;
  },
});

export const useErvaring = () => {
  return useSuspenseQuery(ervaringQueryOptions);
};
