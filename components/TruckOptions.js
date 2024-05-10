import React from "react";
import { Input } from "./ui/input";

const TruckOptions = () => {
  return (
    <div>
      <h3 className="h3-bold mb-6">Truck Options</h3>
      <div className="flex flex-col w-full gap-4">
        <div>
          <label>Truck Max Height (m)</label>
          <Input
            type="number"
            className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div>
          <label>Truck Max Width (m)</label>
          <Input
            type="number"
            className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div>
          <label>Number of Axels</label>
          <Input
            type="number"
            className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div>
          <label>Truck Lenght (m)</label>
          <Input
            type="number"
            className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div>
          <label>Truck Weight (Kg)</label>
          <Input
            type="number"
            className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div>
          <label>Truck Type</label>
          <Input className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0" />
        </div>
      </div>
    </div>
  );
};

export default TruckOptions;
