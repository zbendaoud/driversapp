import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Report = ({ report }) => {
  const [reportInfo, setReportInfo] = useState()
  function formatDuration(minutes) {
    // Calculate hours and minutes
    var hours = Math.floor(minutes / 60);
    var remainingMinutes = Math.round(minutes % 60); // Rounding the minutes

    // Ensure that minutes are displayed with two digits
    var formattedMinutes =
      remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;

    // Format the result
    var formattedDuration = hours + "h:" + formattedMinutes + "m";
    return formattedDuration;
  }

  useEffect(() => {
    setReportInfo(`
      Trip Distance: ${report.tripDistance}Km
      Trip Duration: ${formatDuration(report.tripDuration)}
      Hours Driven: ${formatDuration(report.tripDriveDuration)}
      Total Cost: ${report.tripCost.toFixed(2)}
    `);
  }, [report]);

  const generatePDF = () => {
    const doc = new jsPDF();
  
    // Add report info
    doc.text(reportInfo, 10, 10);
  
    // Calculate the height of the report info
     
  
    // Add table below the report info
    doc.autoTable({ html: "#my-table", startY: 45 });
  
    // Save the PDF
    doc.save("document.pdf");
  };
  
  return (
    <div>
      <div className=" pb-8 mb-4 border-b">
        <div
          id="report-info"
          className="flex gap-x-6 gap-y-2 items-center whitespace-nowrap flex-wrap"
        >
          <div className="flex gap-2 items-center">
            <h6 className="text-lg font-semibold">Trip Distance : </h6>
            <p>{report.tripDistance}Km</p>
          </div>

          <div className="flex gap-2 items-center">
            <h6 className="text-lg font-semibold">Trip Duration : </h6>
            <p>{formatDuration(report.tripDuration)}</p>
          </div>

          <div className="flex gap-2 items-center">
            <h6 className="text-lg font-semibold">Hours Driven : </h6>
            <p>{formatDuration(report.tripDriveDuration)}</p>
          </div>

          <div className="flex gap-2 items-center">
            <h6 className="text-lg font-semibold">Total Cost : </h6>
            <p>{report.tripCost.toFixed(2)}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
        <a href={report.url} target="_blank">
          <Button className="bg-green-800 hover:bg-green-800/90">
            View in map
          </Button>
        </a>

        <Button
          onClick={generatePDF}
          className="bg-blue-700 hover:bg-blue-700/90"
        >
          Download
        </Button>
      </div>
      </div>

      

      <Table id="my-table">
        <TableCaption>Route Stops.</TableCaption>
        <TableHeader className="whitespace-nowrap">
          <TableRow>
            <TableHead>Stop</TableHead>
            <TableHead>Leg KM</TableHead>
            <TableHead>Total Km</TableHead>
            <TableHead>Leg Cost</TableHead>
            <TableHead>Total Cost</TableHead>
            <TableHead>Leg Hours</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {report?.stops?.map((stop, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {stop.location.address.zip} {stop.location.address.city}
                {", "}
                {stop.location.address.state}
              </TableCell>
              <TableCell>{stop.legDistance}</TableCell>
              <TableCell>{stop.legTotalKm}</TableCell>
              <TableCell>{stop.legCost}</TableCell>
              <TableCell>{stop.legTotalCost}</TableCell>
              <TableCell>{stop.legDriveDuration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Report;
