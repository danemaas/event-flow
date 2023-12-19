import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      {/* LOGO LINK */}
      <div className="wrapper flex items-center justify-between">
        <Link href={"/"} className="w-36 flex items-center gap-1">
          <Image
            src={"/assets/images/logo.svg"}
            width={38}
            height={38}
            alt="eventflow logo"
          />
          <h2 className="text-lg font-semibold">
            <span className="text-[#389FDD]">Event</span>Flow
          </h2>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        {/* LOGIN - USER PROFILE BUTTON */}
        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild variant={"custom"} size={"custom"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
