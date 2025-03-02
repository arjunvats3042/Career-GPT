"use client";

import {useState} from "react";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {Button} from "./ui/button";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
  Menu,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="flex justify-between items-center px-4 h-12">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="CareerGPT"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button>
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/resume" className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span className="hidden md:block">Resume Builder</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center space-x-2"
                  >
                    <PenBox className="h-4 w-4" />
                    <span className="hidden md:block">Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/interview"
                    className="flex items-center space-x-2"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span className="hidden md:block">Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu (Translucent) */}
      {menuOpen && (
        <div className="md:hidden absolute  left-0 w-full bg-background/80 backdrop-blur-md shadow-lg border-t">
          <div className="flex flex-col items-center space-y-4 py-4">
            <SignedIn>
              <Link href="/dashboard" className="w-4/5 text-center">
                <Button className="w-full">Industry Insights</Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-4/5 flex justify-center">
                    <StarsIcon className="h-4 w-4" />
                    <span>Growth Tools</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem>
                    <Link
                      href="/resume"
                      className="flex items-center space-x-2"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Resume Builder</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/ai-cover-letter"
                      className="flex items-center space-x-2"
                    >
                      <PenBox className="h-4 w-4" />
                      <span>Cover Letter</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      href="/interview"
                      className="flex items-center space-x-2"
                    >
                      <GraduationCap className="h-4 w-4" />
                      <span>Interview Prep</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            {/* Clerk Profile Page (Now Visible on Mobile) */}
            <SignedIn>
              <div className="flex justify-center w-full">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-12 h-12",
                      userButtonPopoverCard: "shadow-xl",
                      userPreviewMainIdentifier: "font-semibold",
                    },
                  }}
                  afterSignOutUrl="/"
                />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

