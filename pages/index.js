import React from "react";
import Header from "./header";
import { useState } from "react";
import ReportTable from './ReportTable'
import { useContext } from 'react';
import {ThemeContext} from './contexts/theme'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Form() {
  const [userInput, setUserInput] = useState({
    Location: "",
    Max: 0,
    Min: 0,
    Average: 0,
  });

  const [fullReplyState, setFullReplyState] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFullReplyState([...fullReplyState, userInput]);
  };
  console.log(fullReplyState[1])

  return (
    <>
      <Header/>
      <section className="py-4 px-4  text-center ">
      <form className="m-6" onSubmit={submitHandler}>
          <label className="block font-bold text-2xl mb-2 text-[#000000]"> Cookies Stand </label>
          <br></br>
          <label className="block font-bold font-[] text-xl mb-2 text-[#000000]"> Location </label>
          <input
            onChange={handleChange}
            placeholder="Location"
            name="Location"
            className="border border-gray-400 rounded-md py-2 px-4 w-1/5 focus:outline-none focus:border-[#ECA869] bg-[#263159] "
          />
          <br></br>
          <div className="flex justify-between mt-7">
            <div className="w-1/3">
              <label className="block font-bold text-xl mb-2 text-[#000000]"> Maximum Customers per hour </label>
              <input
                onChange={handleChange}
                placeholder="Maximum"
                name="Max"
                className="border border-gray-400 rounded-md py-2 px-4 w-1/2 focus:outline-none focus:border-[#270D0B] bg-[#263159]"
              />
            </div>
            <div className="w-1/3">
              <label className="block font-bold text-xl mb-2 text-[#000000]"> Minimum Customers per hour </label>
              <input
                onChange={handleChange}
                placeholder="Minimum"
                name="Min"
                className="border border-gray-400 rounded-md py-2 px-4 w-1/2 focus:outline-none focus:border-[#270D0B] bg-[#263159]"
              />
            </div>
            <div className="w-1/3">
              <label className="block font-bold text-xl mb-2 text-[#000000]"> Average Cookies per sale </label>
              <input
                onChange={handleChange}
                placeholder="Average"
                name="Average"
                className="border border-gray-400 rounded-md py-2 px-4 w-1/2 focus:outline-none focus:border-[#270D0B] bg-[#263159]"
              />
            </div>
          </div>
          <br></br>
          <button className="bg-[#263159] py-3 my-3 px-6 rounded-md text-[#FFFBEB] font-bold hover:bg-[#270D0B] focus:outline-none focus:shadow-outline">
            Create
          </button>
        </form>
      </section>
      <section className="w-full pt-10 text-center shadow-lg shadow-black-50 text-xl bg-[#263159] text-[#EFE2B2] pb-10">
        {/* {fullReplyState.length > 0 &&
          fullReplyState.map((item, index) => {
            return(
              <p className="py-2">{JSON.stringify(item)}</p>
            );
          })}
          })} */}
                 {fullReplyState.length > 0 && <ReportTable 
                report = {fullReplyState}
                />}
                {fullReplyState.length == 0 && <h2>No Cookie Stands Available</h2>}

      </section>
  </>
  );
}
