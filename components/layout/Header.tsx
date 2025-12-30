"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

import {
  Bell,
  List,
  LogOut,
  MenuIcon,
  Search,
  Settings,
  User,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/topics", label: "Topics" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" },
];

const NavLinks = NAV_ITEMS.map((item) => (
  <Link key={item.href} href={item.href}>
    {item.label}
  </Link>
));

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // TODO: enable auth-based UI
  // const isAuth: boolean = process.env.NEXT_PUBLIC_IS_AUTH === "true";

  return (
    <>
      <header className="w-full bg-main py-2.5 top-0 left-0 sticky h-15">
        <div className="my-container h-full grid grid-rows-1 grid-cols-3 items-center ">
          {/* Mobile Menu btn */}
          <Button
            onClick={() => setMenuOpen(true)}
            variant={"ghost"}
            className="p-0 lg:hidden hover:bg-transparent"
            size={"icon"}
          >
            <MenuIcon className="size-6 text-white font-bold" />
          </Button>

          <span className="text-background text-2xl font-bold uppercase text-center lg:text-start">
            TechLog
          </span>

          {/* desktop nav */}
          <nav className="hover:[&>a:not(:hover)]:opacity-70 hidden lg:flex mx-auto gap-3 capitalize text-background text-lg font-normal [&>a]:transition-opacity">
            {NavLinks}
          </nav>

          {/* search & notification icons & user dropdown */}
          <div className="flex relative h-full items-center gap-3 ml-auto">
            <Button
              onClick={() => setSearchOpen(true)}
              variant={"ghost"}
              size={"icon"}
              className="p-0 hover:bg-transparent hidden lg:block "
            >
              <Search className="size-6 text-white font-bold" />
            </Button>

            <Button
              variant={"ghost"}
              size={"icon"}
              className="p-0 hover:bg-transparent relative hidden lg:block "
            >
              <div className="size-2.5 absolute top-1 right-1 rounded-full bg-red-500 animate-pulse"></div>
              {/* TODO: make notifications list */}
              <Bell className="size-6 text-white font-bold" />
            </Button>
            <UserDropdown />
          </div>
        </div>
        <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <SearchCommand searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
    </>
  );
}

function UserDropdown() {
  return (
    // TODO: make dropdown items Link
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* TODO: make user avatar dynamic */}
        <Avatar className="h-full w-auto aspect-square cursor-pointer">
          <AvatarImage src={"/profile.jpg"} alt="" className="object-cover" />
          <AvatarFallback>JV</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-53">
        <DropdownMenuLabel>
          <div className="w-full h-10 flex gap-2">
            <Avatar className="h-full w-auto aspect-square cursor-pointer">
              <AvatarImage
                src={"/profile.jpg"}
                alt=""
                className="object-cover"
              />
              <AvatarFallback>JV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col h-full justify-start">
              <span>Djawad Mousavian</span>
              <span className="opacity-40 text-xs">Djawad-coder</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <List /> Your Posts
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell /> Notifications
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings /> Setting
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavbar({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const searchInput = useRef<HTMLInputElement | null>(null);

  const searchFormHandler = (e: FormEvent) => {
    e.preventDefault();
    searchInput.current?.blur();
    router.push(`/?search=${searchValue}`);
    setSearchValue("");
    setMenuOpen(false);
  };

  return (
    <div
      className={`lg:hidden w-full fixed top-0 left-0 bg-main h-svh z-40 transition-[translate] duration-300 ${
        !menuOpen && "translate-x-full pointer-events-none"
      }`}
    >
      <div className=" flex flex-col items-center min-w-xs max-w-sm px-4 mx-auto gap-5">
        <div className="h-15 flex items-center justify-end w-full">
          <Button
            onClick={() => setMenuOpen(false)}
            variant={"ghost"}
            className="p-0 lg:hidden ml-auto hover:bg-transparent"
            size={"icon"}
          >
            <XIcon className="size-6 text-white font-bold" />
          </Button>
        </div>
        <form className="w-full" onSubmit={searchFormHandler}>
          <InputGroup
            className="outline-none border-none bg-background/30 ring-0
focus-within:ring-0
focus-within:border-transparent
has-[[data-slot=input-group-control]:focus-visible]:ring-0
has-[[data-slot=input-group-control]:focus-visible]:border-transparent"
          >
            <InputGroupInput
              ref={searchInput}
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Search..."
              className="text-white placeholder:text-white/60 focus:outline-none!"
            />
            <InputGroupButton
              className="hover:bg-transparent h-full px-2"
              type="submit"
            >
              <Search className="size-5 text-white" />
            </InputGroupButton>
          </InputGroup>
        </form>
        <nav className="flex flex-col w-full gap-4 capitalize text-background text-2xl font-bold">
          {NavLinks}
        </nav>
      </div>
    </div>
  );
}

export function SearchCommand({
  searchOpen = false,
  setSearchOpen,
}: {
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}) {
  return (
    <CommandDialog
      open={searchOpen}
      onOpenChange={setSearchOpen}
      className="top-[30%]"
    >
      <CommandInput placeholder="search posts..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {/* TODO:fetch posts and show below */}
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
