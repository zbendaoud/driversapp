import React from "react";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const RouteOptions = ({
  plannedStartDate,
  setPlannedStartDate,
  avoidTolls,
  setAvoidTolls,
}) => {
  return (
    <div className="p-3 border rounded-md">
      <div className="flex flex-col w-full gap-4">
        <div>
        <h5 className="font-semibold text-xl mb-4">Planned Start Time</h5>
          <DatePicker
            selected={plannedStartDate} onChange={(date) => setPlannedStartDate(date)}
            showTimeSelect
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            wrapperClassName="datePicker"
            className="border"
            placeholderText="Pick a date"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox onClick = {() => setAvoidTolls(!avoidTolls)} />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Avoid Tolls
          </label>
        </div>
      </div>
    </div>
  );
};

export default RouteOptions;
