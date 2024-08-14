import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { HomeCards } from "./cards";
import { TrackingAndRates } from "./tracking-rates";
import hero_image from "@/public/home-hero.png";

export default function Home() {
  return (
    <main className="min-h-screen py-12 space-y-14">
      <section className="w-full max-w-screen-2xl mx-auto px-4">
        <div className="relative min-h-96 flex text-white">
          <Image
            alt="Sea fright logistics"
            src={hero_image}
            placeholder="blur"
            quality={100}
            fill
            style={{
              objectFit: "cover",
            }}
            className="z-[-1] w-full"
          />

          <div className="flex-1 flex flex-col lg:flex-row gap-12 p-4 pt-20 lg:px-10 lg:py-20 bg-black/20">
            <div className="flex-1 flex flex-col justify-end space-y-5">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                Navigating Logistics with a Focus on Timely Deliveries
              </h2>
              <p className="font-light text-lg xl:text-xl">
                Experience flawless shipping solutions or your needs. We take
                pride in delivering excellence with punctiality at the forefront
              </p>
            </div>
            <TrackingAndRates />
          </div>
        </div>
      </section>
      <section className="w-full max-w-screen-2xl mx-auto px-4 space-y-12">
        <div className="space-y-6 lg:space-y-8">
          <Badge className="uppercase" variant="outline" sizes="large">
            Customer Centric Approach
          </Badge>

          <div className="space-y-2 lg:space-y-0 lg:grid lgrid-cols-9 lg:space-x-4">
            <h3 className="text-3xl lg:text-4xl xl:text-5xl col-span-4">
              Experience Excellence with FastBird Logistics
            </h3>

            <p className="text-xl font-light text-gray-700 col-span-4 col-start-6">
              We prioritize precision, reliability, and a customer-centric
              approach, making your satisfaction our top priority. Experience
              the difference of a logistics partner committed to excellence -
              experience FastBird Logistics.
            </p>
          </div>
        </div>
        <HomeCards />
      </section>
    </main>
  );
}
