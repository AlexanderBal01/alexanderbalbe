"use client";

import { forwardRef, useState } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useNavigation } from "@/hooks/useNaviagtion";
import { motion } from "framer-motion";
import classNames from "classnames";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const { data } = useNavigation();

  const activePath = hoveredPath ?? pathname;

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu.Root className="relative z-10 hidden h-10 lg:grid lg:grid-cols-5 place-items-center">
        <NavigationMenu.Sub className="h-10 list-none grid w-full">
          <img
            src={"/logo.svg"}
            alt="logo"
            width={50}
            height={50}
            className="gap-x-2.5 self-center"
          />
        </NavigationMenu.Sub>

        <NavigationMenu.Sub className="h-10 list-none grid col-span-3 justify-center">
          <NavigationMenu.List
            className="group flex list-none rounded-full border border-gray-200 bg-white/25 shadow-sm w-fit"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {data.map((item) => {
              // Bepaal of dit item de "pil" moet hebben
              const showPill = hoveredPath
                ? item.path === hoveredPath
                : pathname === item.path ||
                  (item.path !== "/" && pathname.startsWith(item.path));

              return (
                <NavigationMenu.Item key={item.path}>
                  <NavigationMenu.Link asChild>
                    <Link
                      to={item.path}
                      activeOptions={{ exact: item.path === "/" }}
                      onMouseEnter={() => setHoveredPath(item.path)}
                      className={`relative block capitalize px-6 py-2 text-sm text-obsidian font-medium`}
                      activeProps={{
                        className: `${activePath === item.path && "font-black"}`,
                      }}
                    >
                      {/* De Framer Motion Pil */}
                      {showPill && (
                        <motion.div
                          layoutId="radix-nav-pill"
                          className="absolute inset-0 bg-iceblue rounded-full -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          }}
                        />
                      )}
                      {item.label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              );
            })}
          </NavigationMenu.List>
        </NavigationMenu.Sub>
      </NavigationMenu.Root>

      {/* Mobile Navigation */}
      <div className="relative z-20 flex items-center justify-between px-6 lg:hidden">
        <Link to="/" className="flex items-center gap-x-2.5">
          <img src={"/logo.svg"} alt="logo" width={50} height={50} />
        </Link>

        <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              className="rounded-full bg-white/25 p-2 text-iceblue backdrop-blur-md"
              aria-label="Open menu"
            >
              <HamburgerMenuIcon className="h-6 w-6" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="data-[state=open]:animate-slide-in-from-right data-[state=closed]:animate-slide-out-to-right fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
            <Dialog.Content className="data-[state=open]:animate-slide-in-from-right data-[state=closed]:animate-slide-out-to-right fixed top-0 right-0 z-50 flex h-full w-full flex-col bg-white/25 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-end p-5">
                <VisuallyHidden.Root>
                  <Dialog.Title className="text-lg font-bold text-iceblue">
                    Menu
                  </Dialog.Title>
                </VisuallyHidden.Root>

                <div className="flex-1 overflow-y-auto px-5">
                  <div className="py-5">
                    <Dialog.Close asChild>
                      <Link to={"/"} className="block">
                        <img
                          src={"/logo.svg"}
                          alt="logo"
                          width={50}
                          height={50}
                        />
                      </Link>
                    </Dialog.Close>
                  </div>
                </div>

                <Dialog.Close asChild>
                  <button
                    className="rounded-full p-2 text-iceblue transition-colors hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <Cross1Icon className="h-6 w-6" />
                  </button>
                </Dialog.Close>
              </div>

              <div className="flex-1 overflow-y-auto px-5">
                {data.map((item) => (
                  <div className="border-b border-iceblue py-5">
                    <Dialog.Close asChild>
                      <Link to={item.path} className="block text-iceblue">
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  </div>
                ))}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
};

type NavbarListItemProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  title: string;
  href: string;
};

const NavbarListItem = forwardRef<HTMLAnchorElement, NavbarListItemProps>(
  ({ className, children, title, href, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          to={href}
          className={classNames(
            "block rounded-md p-3 text-[15px] leading-none text-white no-underline transition-colors outline-none select-none",
            className,
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-1.25 leading-[1.2] font-medium text-white">
            {title}
          </div>
          <p className="leading-[1.4] text-slate-300">{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  ),
);

NavbarListItem.displayName = "NavbarListItem";

export default Navbar;
