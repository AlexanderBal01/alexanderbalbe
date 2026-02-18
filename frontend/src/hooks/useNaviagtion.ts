import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { NavItem } from "@/types/navItems";
import { getApiUrl } from "@/utils/api";

export const navigationQueryOptions = queryOptions({
  queryKey: ["navigationItems"],
  queryFn: async (): Promise<NavItem[]> => {
    const apiUrl = getApiUrl();

    const response = await fetch(`${apiUrl}/navigation`);
    if (!response.ok) {
      console.error("Fout bij ophalen van de navigatie items");
    }

    return response.json() as Promise<NavItem[]>;
  },
});

export const useNavigation = () => {
  return useSuspenseQuery(navigationQueryOptions);
};
