import React from "react";
import { useState } from "react";

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

  return (
    <>

      <section className="bg-[#251740] py-4 px-4  text-center ">
      <form className="m-6" onSubmit={submitHandler}>
          <label className="block font-bold text-2xl mb-2 text-[#B08BBB]"> Cookies Stand </label>
          <br></br>
          <label className="block font-bold font-[] text-xl mb-2 text-[#B08BBB]"> Location </label>
          <input
            onChange={handleChange}
            placeholder="Location"
            name="Location"
            className="border border-gray-400 rounded-md py-2 px-4 w-1/5 focus:outline-none focus:border-[#ECA869] bg-[#263159] "
          />
          <br></br>
          <div className="flex justify-between mt-7">
            <div className="w-1/3">
              <label className="block font-bold text-xl mb-2 text-[#B08BBB]"> Maximum Customers per hour </label>
              <input
                onChange={handleChange}
                placeholder="Maximum"
                name="Max"
                className="border border-gray-400 rounded-md py-2 px-4 w-1/2 focus:outline-none focus:border-[#270D0B] bg-[#263159]"
              />
            </div>
            <div className="w-1/3">
              <label className="block font-bold text-xl mb-2 text-[#B08BBB]"> Minimum Customers per hour </label>
              <input
                onChange={handleChange}
                placeholder="Minimum"
                name="Min"
                className="border border-gray-400 rounded-md py-2 px-4 w-1/2 focus:outline-none focus:border-[#270D0B] bg-[#263159]"
              />
            </div>
            <div className="w-1/3">
              <label className="block font-bold text-xl mb-2 text-[#B08BBB]"> Average Cookies per sale </label>
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
      <section className="w-full pt-10 text-center shadow-lg shadow-black-50 text-xl bg-[#495579] text-[#FFFBEB] ">
        {fullReplyState.length > 0 &&
          fullReplyState.map((item, index) => {
            return(
              <p className="py-2">{JSON.stringify(item)}</p>
            );
          })}
      </section>
  



    </>
  );
}