import Image from "next/image";
import chrysalis_photo from "@/public/chrysalis-photo.jpg";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex p-4 gap-12 min-h-screen">
      <div className="basis-[43%] relative hidden lg:block">
        <Image
          alt="Sign in hero image"
          src={chrysalis_photo}
          placeholder="blur"
          quality={100}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex-1 flex">
        <div className="max-w-screen-sm m-auto flex-1">{children}</div>
      </div>
    </section>
  );
}
