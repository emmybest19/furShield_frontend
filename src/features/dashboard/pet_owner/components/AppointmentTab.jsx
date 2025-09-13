// import { form } from "framer-motion/client";
import { useState } from "react";

function AppointmentTab() {
  const items = [
    {
      id: 1,
      doctor: "Dr. Amelia Harper",
      specify: "Verterinary Surgeon",
      rating: "4.9(124 reviews)",
      starting_time: "10:00 AM",
      end_time: "10:00 AM",
    },
    {
      id: 2,
      doctor: "Dr. Ethan Carter",
      specify: "Verterinary Surgeon",
      rating: "4.7(104 reviews)",
      starting_time: "11:00 AM",
      end_time: "02:30 PM",
    },
    {
      id: 3,
      doctor: "Dr. Noah Williams",
      specify: "Verterinary Surgeon",
      rating: "4.6(104 reviews)",
      starting_time: "07:50 AM",
      end_time: "07:00 AM",
    },
  ];

  const [tab, setTab] = useState("booking");
  return (
    <div className="max-w-[1440px] mx-auto pt-[40px] px-5 md:px-[100px]">
      <div>
        <div className="flex gap-[56px] mb-5 ">
          <button
            onClick={() => setTab("booking")}
            className={`font-[500] pb-4  ${
              tab === "booking"
                ? "text-blue-600 border-b-2 border-[#14b8a6] "
                : "text-gray-700"
            }`}
          >
            Book Appointment
          </button>
          <button
            onClick={() => setTab("appointment")}
            className={`font-[500] pb-4  ${
              tab === "appointment"
                ? "text-blue-600  border-b-2  border-[#14b8a6] "
                : "text-gray-700"
            }`}
          >
            My Appointments
          </button>
        </div>
        {tab === "booking" && (
          <div>
            <form action="">
              <div className="relative mt-[40px]">
                <input
                  type="text"
                  name="input"
                  id=""
                  placeholder="Search by vets, location or specification"
                  className="w-full border-[2px] h-[80px] rounded-full pl-12 pr-3 gap-[10px] focus:outline-none placeholder:text-base leading-[1.2]"
                />
                <img
                  src="/assets/search.svg"
                  alt=""
                  className="absolute top-1/2 left-4 -translate-y-1/2 w-[15px]"
                />
              </div>
            </form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[49px] mt-[70px]">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex  flex-col   bg-[#ffffff] px-[24px] py-[25px] rounded-xl space-y-[18px] border-2 border-black/20 shadow-sm"
                >
                  <div className="flex gap-[41px] items-center ">
                    <div>
                      <img src="/assets/profile.svg" alt="" />
                    </div>
                    <div className="space-y-[5px]">
                      <h1 className="font-[600] text-[24px]">{item.doctor}</h1>
                      <p className="font-[400] text-[20px]">{item.specify}</p>
                      <p className="font-[400] text-[16px]">⭐ {item.rating}</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-left">Available Slots:</h1>
                    <div className="mt-[19px] flex gap-2 items-center">
                        <span className="p-[5px] rounded-full bg-[#6cb7e9] text-white">{item.starting_time}</span>
                        <span className="p-[5px] rounded-full bg-[#6cb7e9] text-white">{item.end_time}</span>
                    </div>
                  </div>

                  <button className="bg-[#06b6d4] w-full py-[15px] rounded-lg text-white">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentTab;
