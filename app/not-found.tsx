import Image from "next/image";
import Link from "next/link";
import image_404 from "@/public/Container Ship Coloring.png";

export default function NotFound() {
  return (
    <main className="min-h-screen flex p-4 gap-12">
      <div className="basis-1/2 relative hidden lg:block">
        <Image
          alt="Container ship coloring"
          src={image_404}
          placeholder="blur"
          quality={100}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="flex-1 flex">
        <div className="max-w-screen-sm m-auto flex-1 space-y-3 text-lg">
          <h1 className="text-6xl">Oops! Page Not Found</h1>
          <p className="text-neutral-500">
            The page you're looking for doesn't seem to exist right now. You can
            return to the{" "}
            <Link href="/" className="font-medium text-neutral-800">
              Home Page
            </Link>{" "}
            and continue exploring.
          </p>
        </div>
      </div>
    </main>
  );
}
