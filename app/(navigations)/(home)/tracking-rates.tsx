"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package2 } from "lucide-react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Button } from "@/components/ui/button";

export function TrackingAndRates() {
  const [ref] = useAutoAnimate<HTMLElement>();
  const [inputContainerRef] = useAutoAnimate<HTMLElement>();

  // utils for fetching shipment
  // use `react-form-hook` and push a new item to an array and map over the items in the array to display the input
  const [trackingIdLenght, setTrackingIdLength] = React.useState(3);
  function addTrackingInput() {
    console.log("add");
    setTrackingIdLength((prev) => {
      if (prev + 1 < 11) {
        return prev + 1;
      }
      return prev;
    });
  }

  // utils for fetching shipping rates

  return (
    <Tabs defaultValue="tracking" className="lg:w-[400px] xl:w-[464px]">
      <Card className="bg-white text-black p-3">
        <CardTitle className="font-normal text-lg">
          <TabsList className="grid w-full grid-cols-2 p-0 bg-transparent border border-gray-200">
            <TabsTrigger className="flex space-x-1.5 h-full" value="tracking">
              <Package2 size={16} /> <span>Tracking Package</span>
            </TabsTrigger>
            <TabsTrigger className="flex space-x-1.5 h-full" value="rates">
              <Package2 size={16} /> <span>Shipping Rates</span>
            </TabsTrigger>
          </TabsList>
        </CardTitle>
        <CardContent ref={ref} className="space-y-2 w-full p-0">
          <TabsContent value="tracking" className="w-full py-2 space-y-4">
            <div className="space-y-2">
              <Label>Your Tracking Number(s)</Label>
              <div ref={inputContainerRef} className="space-y-1 w-full">
                {Array.from({ length: trackingIdLenght }).map((_, index) => (
                  <Input
                    id={`trackingId[${index}]`}
                    placeholder="Tracking Number"
                  />
                ))}
              </div>

              <p className="text-sm text-gray-500">
                Available up to 10 tracking number,{" "}
                <span
                  className="text-base text-gray-900 cursor-pointer"
                  onClick={addTrackingInput}
                >
                  Add New Input
                </span>
              </p>
            </div>

            <Button variant="lime" size="full">
              Track Order
            </Button>
          </TabsContent>
        </CardContent>
      </Card>
    </Tabs>
  );
}
