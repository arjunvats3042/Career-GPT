// "use client";

// import {useState} from "react";
// import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import {Button} from "./ui/button";
// import {
//   ChevronDown,
//   FileText,
//   GraduationCap,
//   LayoutDashboard,
//   PenBox,
//   StarsIcon,
//   Menu,
//   X,
// } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
//       <nav className="flex justify-between items-center px-4 h-12">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/logo.png"
//             alt="CareerGPT"
//             width={200}
//             height={60}
//             className="h-12 py-1 w-auto object-contain"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-4">
//           <SignedIn>
//             <Link href="/dashboard">
//               <Button>
//                 <LayoutDashboard className="h-4 w-4" />
//                 <span className="hidden md:block">Industry Insights</span>
//               </Button>
//             </Link>

//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button>
//                   <StarsIcon className="h-4 w-4" />
//                   <span className="hidden md:block">Growth Tools</span>
//                   <ChevronDown className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuItem>
//                   <Link href="/resume" className="flex items-center space-x-2">
//                     <FileText className="h-4 w-4" />
//                     <span className="hidden md:block">Resume Builder</span>
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link
//                     href="/ai-cover-letter"
//                     className="flex items-center space-x-2"
//                   >
//                     <PenBox className="h-4 w-4" />
//                     <span className="hidden md:block">Cover Letter</span>
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link
//                     href="/interview"
//                     className="flex items-center space-x-2"
//                   >
//                     <GraduationCap className="h-4 w-4" />
//                     <span className="hidden md:block">Interview Prep</span>
//                   </Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </SignedIn>

//           <SignedOut>
//             <SignInButton>
//               <Button variant="outline">Sign In</Button>
//             </SignInButton>
//           </SignedOut>
//           <SignedIn>
//             <UserButton
//               appearance={{
//                 elements: {
//                   avatarBox: "w-10 h-10",
//                   userButtonPopoverCard: "shadow-xl",
//                   userPreviewMainIdentifier: "font-semibold",
//                 },
//               }}
//               afterSignOutUrl="/"
//             />
//           </SignedIn>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </button>
//       </nav>

//       {/* Mobile Menu (Translucent) */}
//       {menuOpen && (
//         <div className="md:hidden absolute  left-0 w-full bg-background/80 backdrop-blur-md shadow-lg border-t">
//           <div className="flex flex-col items-center space-y-4 py-4">
//             <SignedIn>
//               <Link href="/dashboard" className="w-4/5 text-center">
//                 <Button className="w-full">Industry Insights</Button>
//               </Link>

//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button className="w-4/5 flex justify-center">
//                     <StarsIcon className="h-4 w-4" />
//                     <span>Growth Tools</span>
//                     <ChevronDown className="h-4 w-4" />
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-full">
//                   <DropdownMenuItem>
//                     <Link
//                       href="/resume"
//                       className="flex items-center space-x-2"
//                     >
//                       <FileText className="h-4 w-4" />
//                       <span>Resume Builder</span>
//                     </Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link
//                       href="/ai-cover-letter"
//                       className="flex items-center space-x-2"
//                     >
//                       <PenBox className="h-4 w-4" />
//                       <span>Cover Letter</span>
//                     </Link>
//                   </DropdownMenuItem>
//                   <DropdownMenuItem>
//                     <Link
//                       href="/interview"
//                       className="flex items-center space-x-2"
//                     >
//                       <GraduationCap className="h-4 w-4" />
//                       <span>Interview Prep</span>
//                     </Link>
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </SignedIn>

//             <SignedOut>
//               <SignInButton>
//                 <Button variant="outline" className="w-full">
//                   Sign In
//                 </Button>
//               </SignInButton>
//             </SignedOut>

//             {/* Clerk Profile Page (Now Visible on Mobile) */}
//             <SignedIn>
//               <div className="flex justify-center w-full">
//                 <UserButton
//                   appearance={{
//                     elements: {
//                       avatarBox: "w-12 h-12",
//                       userButtonPopoverCard: "shadow-xl",
//                       userPreviewMainIdentifier: "font-semibold",
//                     },
//                   }}
//                   afterSignOutUrl="/"
//                 />
//               </div>
//             </SignedIn>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

"use client";

import {useState} from "react";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {Button} from "./ui/button";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import {cn} from "@/lib/utils"; // Assuming you have this utility

// Transition for animations
const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// MenuItem Component
const MenuItem = ({setActive, active, item, children}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{duration: 0.3}}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white flex items-center space-x-1"
      >
        {item}
        {children && <ChevronDown className="h-4 w-4" />}
      </motion.p>
      {active === item && children && (
        <motion.div
          initial={{opacity: 0, scale: 0.85, y: 10}}
          animate={{opacity: 1, scale: 1, y: 0}}
          transition={transition}
          className="absolute top-[calc(100%_+_0.75rem)] left-1/2 transform -translate-x-1/2 pt-2"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white/90 dark:bg-black/90 rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
          >
            <motion.div layout className="w-max h-full p-3">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// HoveredLink Component
const HoveredLink = ({children, ...rest}) => (
  <Link
    {...rest}
    className="text-neutral-700 dark:text-neutral-200 hover:text-black flex items-center space-x-2"
  >
    {children}
  </Link>
);

// Main Header Component
const Header = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="relative w-full flex items-center justify-center z-50"
      onMouseLeave={() => setActive(null)} // Close dropdowns when leaving header
    >
      <div
        className={cn(
          "fixed top-4 inset-x-0 max-w-xl mx-auto",
          "bg-background/50 backdrop-blur-md rounded-full border border-black/[0.2] dark:border-white/[0.2] shadow-lg"
        )}
      >
        <nav className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="CareerGPT"
              width={200}
              height={60}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <HoveredLink href="/dashboard">
                <Button className="transition hover:scale-105 ">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Button>
              </HoveredLink>

              <MenuItem
                setActive={setActive}
                active={active}
                item="Growth Tools"
              >
                <div className="flex flex-col space-y-3 text-sm">
                  <HoveredLink href="/resume">
                    <Button
                      variant="ghost"
                      className="transition hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex justify-start"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Resume Builder</span>
                    </Button>
                  </HoveredLink>
                  <HoveredLink href="/ai-cover-letter">
                    <Button
                      variant="ghost"
                      className="transition hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex justify-start"
                    >
                      <PenBox className="h-4 w-4" />
                      <span>Cover Letter</span>
                    </Button>
                  </HoveredLink>
                  <HoveredLink href="/interview">
                    <Button
                      variant="ghost"
                      className="transition hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 w-full flex justify-start"
                    >
                      <GraduationCap className="h-4 w-4" />
                      <span>Interview Prep</span>
                    </Button>
                  </HoveredLink>
                </div>
              </MenuItem>

              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                    userButtonPopoverCard: "shadow-xl",
                    userPreviewMainIdentifier: "font-semibold",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  size="sm"
                  className="transition hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-[calc(100%_+_0.5rem)] left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-2xl border border-black/[0.2] dark:border-white/[0.2] shadow-lg">
            <div className="flex flex-col items-center space-y-3 py-3">
              <SignedIn>
                <Link href="/dashboard" className="w-4/5 text-center">
                  <Button
                    className="w-full flex items-center justify-center space-x-2 transition hover:scale-105 hover:bg-gray-700"
                    size="sm"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Industry Insights</span>
                  </Button>
                </Link>

                <div className="w-4/5 flex flex-col space-y-2">
                  <Link href="/resume">
                    <Button
                      variant="ghost"
                      className="w-full flex justify-start space-x-2 transition hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
                      size="sm"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Resume Builder</span>
                    </Button>
                  </Link>
                  <Link href="/ai-cover-letter">
                    <Button
                      variant="ghost"
                      className="w-full flex justify-start space-x-2 transition hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
                      size="sm"
                    >
                      <PenBox className="h-4 w-4" />
                      <span>Cover Letter</span>
                    </Button>
                  </Link>
                  <Link href="/interview">
                    <Button
                      variant="ghost"
                      className="w-full flex justify-start space-x-2 transition hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
                      size="sm"
                    >
                      <GraduationCap className="h-4 w-4" />
                      <span>Interview Prep</span>
                    </Button>
                  </Link>
                </div>

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

              <SignedOut>
                <SignInButton mode="modal" afterSignInUrl="/">
                  <Button
                    variant="outline"
                    className="w-4/5 transition hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700"
                    size="sm"
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
