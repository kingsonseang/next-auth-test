import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Handshake, Headset, Package, Plane, Presentation } from "lucide-react";

export function HomeCards() {
  return (
    <div className="grid lg:grid-cols-3 lg:grid-rows-6 gap-4">
      <Card className="lg:row-span-6 bg-teal-950 flex flex-col justify-between">
        <CardHeader>
          <CardTitle>
            <div className="flex">
              <div className="bg-lime-200 aspect-square p-3">
                <Presentation strokeWidth={1.5} />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2.5 text-white font-light">
          <p className="text-xl">Innovative Solutions for the Future</p>
          <p className="opacity-60">
            chooses FastBird Logistics for commitment reliability and seamless
            service. We understand that our shipments are more than packages.
          </p>
        </CardContent>
      </Card>
      <Card className="lg:row-span-3 flex flex-col justify-between bg-gray-50/50">
        <CardHeader>
          <CardTitle>
            <div className="flex">
              <div className="bg-gray-100 aspect-square p-3">
                <Plane strokeWidth={1.5} />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xl">Comprehensive Range of Services</p>
        </CardContent>
      </Card>
      <Card className="lg:row-span-4 flex flex-col justify-between bg-gray-50/50">
        <CardHeader>
          <CardTitle>
            <div className="flex">
              <div className="bg-gray-100 aspect-square p-3">
                <Handshake strokeWidth={1.5} />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xl">Trust is the backbone of our operations</p>
        </CardContent>
      </Card>
      <Card className="lg:row-span-3 flex flex-col justify-between bg-gray-50/50">
        <CardHeader>
          <CardTitle>
            <div className="flex">
              <div className="bg-gray-100 aspect-square p-3">
                <Package strokeWidth={1.5} />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xl">Unparalleled Expertise in Logistics</p>
        </CardContent>
      </Card>
      <Card className="lg:row-span-2 flex flex-col justify-between bg-gray-50/50">
        <CardHeader>
          <CardTitle>
            <div className="flex">
              <div className="bg-gray-100 aspect-square p-3">
                <Headset strokeWidth={1.5} />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xl">Dedicated Customer Support</p>
        </CardContent>
      </Card>
    </div>
  );
}
