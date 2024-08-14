import { CredentailsSignIn, GoogleSignIn } from "@/components/sign-in";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-14 lg:space-y-20">
      <div className="space-y-6 lg:space-y-8">
        <h1 className="text-3xl lg:text-4xl text-gray-700">
          Welcome to{" "}
          <Link
            href="/"
            className={cn(
              "text-black overflow-hidden relative",
              "after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-black after:transition-all after:ease-linear after:duration-300",
              "after:opacity-0 hover:after:opacity-100 after:translate-z-[-100%,_0,_0] hover:after:translate-z-[0,_0,_0]",
            )}
          >
            FastBird
          </Link>
          , <br />
          Sign In to Continue.
        </h1>
        <p className="text-gray-700 font-light">
          Don&#39;t have an account?{" "}
          <Button asChild className="p-0 h-auto text-base" variant="link">
            <Link href="/auth/sign-up">Create an account</Link>
          </Button>
          <br />
          It takes less than a minute.
        </p>
      </div>

      <div className="space-y-5">
        <CredentailsSignIn />
        <GoogleSignIn />
      </div>
    </div>
  );
}
