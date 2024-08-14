import Image from "next/image";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function GoogleSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button
        variant="faded"
        size="full"
        type="submit"
        className="flex justify-center items-center gap-3"
      >
        <Image
          src="/google-icons.svg"
          alt="Google Icon"
          width={48}
          height={48}
          className="size-6"
        />
        <span>Sign in with Google</span>
      </Button>
    </form>
  );
}
