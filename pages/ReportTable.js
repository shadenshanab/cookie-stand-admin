import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { timeSlots, hourly_sales } from "./data";

export default function ReportTable({ report }) {
  let counter = 0
  let locations = 0
  return (

    <div>
      <Table bordered className="text-black">
        <thead className="border-[#5A2C22] border-2">
          <tr className="">
            <th className="">Location</th>

            {timeSlots.map((slot) => {
              return <th className="">{slot}</th>;
            })}

            <th className="">Total</th>
          </tr>
        </thead>
        <tbody className="border-[#5A2C22] border-2">
          {report.length > 0 &&
            report.map(({ Location }, index) => {
                let total = 0
                locations = locations + 1

                counter = counter + 1
                if (counter > 6){
                    counter = 0
                }

              return (
                <tr>
                  <td className="py-2">{Location}</td>
                  {hourly_sales[counter].map((hour) => {

                    total = total + hour
                    return <td>{hour}</td>;
                  })}
                <td>{total} </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <p>
        {locations} Locations Worldwide
      </p>
    </div>
  );
}