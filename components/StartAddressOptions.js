import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";

const StartAddressOptions = ({
  addresses,
  setAddresses,
  setSelectedStartPoint,
  selectedStartPoint,
}) => {
  const [newZip, setNewZip] = useState("");
  const [newName, setNewName] = useState("");

  const handleAddAddress = () => {
    if (newZip.length && newName.length) {
      setAddresses([...addresses, { zip: newZip, name: newName }]);

      setNewZip("");
      setNewName("");
    }
  };
  return (
    <div className="p-3 border rounded-md">
      <h5 className="font-semibold text-xl mb-4">Start Point Address</h5>
      <div className="flex flex-col w-full gap-4">
        <Select
          onValueChange={(selectedValue) => setSelectedStartPoint(selectedValue)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Start Point" />
          </SelectTrigger>
          <SelectContent>
            {addresses.map((address, index) => (
              <SelectItem key={index} value={address.zip}>
                {address.name}
              </SelectItem>
            ))}

            <AlertDialog>
              <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
                Add new Address
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>New Address</AlertDialogTitle>
                  <AlertDialogDescription>
                    <Input
                      type="text"
                      placeholder="Address name"
                      className="mt-3"
                      onChange={(e) => setNewName(e.target.value)}
                    />

                    <Input
                      type="text"
                      placeholder="Zip"
                      className="mt-3"
                      onChange={(e) => setNewZip(e.target.value)}
                    />
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    onClick={() => {
                      setNewZip("");
                      setNewName("");
                    }}
                  >
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={handleAddAddress}>
                    Add
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default StartAddressOptions;
