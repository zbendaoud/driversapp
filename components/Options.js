"use client"

import React from "react";
import RouteOptions from "./RouteOptions";
import TruckOptions from "./TruckOptions";
import AddressOptions from "./AddressOptions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Options = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="h4-medium">Options</AccordionTrigger>
        <AccordionContent>
          <div className="rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full p-8 grid grid-cols-3 gap-8">
            <RouteOptions />
            <TruckOptions />
            <AddressOptions />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Options;
