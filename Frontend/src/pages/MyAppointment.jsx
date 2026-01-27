import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b border-gray-300">
        My appointments
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-300"
          >
            <div>
              <img
                className="w-32 bg-indigo-50"
                src={item.image}
                alt="doctor-image"
              />
            </div>
            <div className="flex-1 text-sm text-zinc-500">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-neutral-800 font-semibold mt-1">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time:
                </span>{" "}
                25, Jan, 2026 | 8:30 PM
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center sm:w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300  cursor-pointer">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
