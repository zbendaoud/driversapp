import React from "react";
import { Input } from "./ui/input";

const AddressOptions = () => {
  return (
    <div>
      <h3 className="h3-bold mb-6">Address Options</h3>
      <div className="grid grid-cols-2 gap-8">
      <div className="p-3 border rounded-md mb-4 mt-12">
        <h5 className="font-semibold text-xl mb-4">Start Point Address</h5>
        <div className="flex flex-col w-full gap-4">
          <div>
            <label>Name</label>
            <Input className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0" />
          </div>
          <div>
            <label>Zip</label>
            <Input className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0" />
          </div>
        </div>
      </div>

      <div className="p-3 border rounded-md">
        <h5 className="font-semibold text-xl mb-4">End Point Address</h5>
        <div className="flex flex-col w-full gap-4">
        <div>
          <label>Name</label>
          <Input className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0" />
        </div>
        <div>
          <label>Zip</label>
          <Input className="p-regular-16 border border-gray-400 outline-offset-0 placeholder:text-grey-500 focus-visible:ring-0 focus-visible:ring-offset-0" />
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddressOptions;
