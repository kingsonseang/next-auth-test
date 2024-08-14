import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./nav-links";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserNav } from "./user-nav";
import { auth, signOut } from "@/auth";
import { getInitials } from "@/lib/utils";

const links = {
  Home: "/",
  "About us": "/about",
  Shipping: "/shipping",
} as const;

export async function Nav() {
  const session = await auth();

  return (
    <nav className="shadow shadow-[rgba(0,_0,_0,_0.025)] sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto p-4  min-h-20">
        <div className="flex items-center space-x-12">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo image"
              height={140}
              width={140}
              className="size-12"
            />
          </Link>

          <div className="hidden lg:flex flex-1 items-center justify-center space-x-8">
            {Object.entries(links).map(([label, href]) => (
              <NavLink href={href} key={href}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex justify-end space-x-2">
          {session?.user ? (
            <UserNav
              name={session.user.name ?? ""}
              avatar={{
                initails: getInitials(session.user.name ?? ""),
                image: session.user.image ?? undefined,
              }}
            />
          ) : (
            <>
              <Button asChild>
                <Link href="/auth/sign-in">Sign in</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/auth/sign-up">Create an account</Link>
              </Button>
            </>
          )}
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </SheetTrigger>
          <SheetContent className="lg:hidden flex flex-col">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <ul className="flex flex-col text-xl space-y-5 py-5 flex-1">
              {Object.entries(links).map(([label, href]) => (
                <SheetClose key={href} asChild>
                  <NavLink href={href}>{label}</NavLink>
                </SheetClose>
              ))}
            </ul>
            <SheetFooter>
              {session?.user ? (
                <div className="flex flex-col space-y-2 w-full">
                  <SheetClose>
                    <Link href="/auth/sign-in" className="flex gap-2">
                      <Avatar className="h-full rounded-none">
                        {session.user?.image && (
                          <AvatarImage
                            src={session.user.image}
                            alt={session.user.name ?? ""}
                          />
                        )}
                        <AvatarFallback>
                          {getInitials(session.user.name ?? "")}
                        </AvatarFallback>
                      </Avatar>

                      <Button className="w-full" variant="outline">
                        View Profile
                      </Button>
                    </Link>
                  </SheetClose>
                  <form
                    action={async () => {
                      "use server";
                      await signOut({ redirect: true, redirectTo: "/" });
                    }}
                    className="w-full"
                  >
                    <SheetClose className="w-full">
                      <Button className="w-full">Log out</Button>
                    </SheetClose>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 w-full">
                  <Button asChild>
                    <Link href="/auth/sign-in">Sign in</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/auth/sign-up">Create an account</Link>
                  </Button>
                </div>
              )}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
