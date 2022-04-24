import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-screen h-28 items-center justify-around">
      <h1 className="font-poppins font-bold text-xl">Mindfulness</h1>
      <ul className="flex justify-between">
        <li className="m-4 text-gray-500 font-poppins">Home</li>
        <li className="m-4 text-gray-500 font-poppins">Trainers</li>
        <li className="m-4 text-gray-500 font-poppins">Classes</li>
        <li className="m-4 text-gray-500 font-poppins">Schedule</li>
        <li className="m-4 text-gray-500 font-poppins">Elements</li>
      </ul>
      <button className="bg-gradient-to-r from-blue-400 to-green-400 px-6 py-1 rounded-xl text-white font-poppins">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
