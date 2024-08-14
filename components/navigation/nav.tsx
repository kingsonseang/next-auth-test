import { auth } from "@/auth";
import { Button } from "../ui/button";
import Link from "next/link";
import { NavLink } from "./nav-links";
import { UserNav } from "./user-nav";
import { getInitials } from "@/lib/utils";
import Image from "next/image";

const links = {
  Home: "/",
  "About us": "/about",
  Shipping: "/shipping",
} as const;

export async function Nav() {
  const session = await auth();

  return (
    <nav className="backdrop-blur-lg border-b border-b-gray-50 fixed top-0 w-full">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto py-4  min-h-20">
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

        <div className="flex justify-end space-x-2">
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
      </div>
    </nav>
  );
}
