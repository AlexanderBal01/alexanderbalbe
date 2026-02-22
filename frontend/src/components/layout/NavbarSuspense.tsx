"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const NavbarSuspense = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu.Root className="mt-6 center relative z-10 hidden h-10 lg:grid lg:grid-cols-5">
        <NavigationMenu.Sub className="h-10 list-none w-full grid">
          <img
            src={"/logo.svg"}
            alt="logo"
            width={50}
            height={50}
            className="gap-x-2.5 self-center"
          />
        </NavigationMenu.Sub>

        <NavigationMenu.Sub className="h-10 list-none grid col-span-3 animate-pulse justify-center">
          <NavigationMenu.List className="group flex list-none items-center  rounded-full border border-gray-200 bg-gray-200 shadow-sm h-full w-fit">
            <li className="px-6 py-2 text-transparent">home</li>
            <li className="px-6 py-2 text-transparent">projecten</li>
            <li className="px-6 py-2 text-transparent">over mij</li>
            <li className="px-6 py-2 text-transparent">contact</li>
          </NavigationMenu.List>
        </NavigationMenu.Sub>
      </NavigationMenu.Root>

      {/* Mobile Navigation */}
      <div className="relative z-20 flex items-center justify-between px-5 py-3 lg:hidden">
        <div className="flex items-center gap-x-2.5">
          <img src={"/logo.svg"} alt="logo" width={50} height={50} />
        </div>

        <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              className="rounded-full bg-white/25 p-2 text-obsidian backdrop-blur-md"
              aria-label="Open menu"
            >
              <HamburgerMenuIcon className="h-6 w-6" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="data-[state=open]:animate-slide-in-from-right data-[state=closed]:animate-slide-out-to-right fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
            <Dialog.Content className="data-[state=open]:animate-slide-in-from-right data-[state=closed]:animate-slide-out-to-right fixed top-0 right-0 z-50 flex h-full w-full flex-col bg-white/25 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-end p-5">
                <VisuallyHidden.Root>
                  <Dialog.Title className="text-lg font-bold text-obsidian">
                    Menu
                  </Dialog.Title>
                </VisuallyHidden.Root>

                <div className="flex-1 overflow-y-auto px-5">
                  <div className="py-5">
                    <Link to={"/"} className="block">
                      <img
                        src={"/logo.svg"}
                        alt="logo"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>
                </div>

                <Dialog.Close asChild>
                  <button
                    className="rounded-full p-2 text-obsidian transition-colors hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <Cross1Icon className="h-6 w-6" />
                  </button>
                </Dialog.Close>
              </div>

              <div className="flex-1 overflow-y-auto px-5">
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
};

export default NavbarSuspense;
