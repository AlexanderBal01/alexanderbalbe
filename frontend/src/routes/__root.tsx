import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";

import TanStackQueryProvider from "../integrations/tanstack-query/root-provider";

import appCss from "../styles.css?url";

import type { QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import { NavbarSuspense, Navbar, Footer } from "@/components";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Alexander Bal | Persoonlijk Portfolio",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="mx-auto min-h-dvh flex flex-col gap-y-6 py-6">
          <TanStackQueryProvider>
            <Suspense fallback={<NavbarSuspense />}>
              <Navbar />
            </Suspense>
            {children}
            <Footer />
          </TanStackQueryProvider>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
