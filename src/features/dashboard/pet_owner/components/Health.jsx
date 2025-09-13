import { useState } from "react";

function Health() {
  const [tab, setTab] = useState("all");
  const [activeTab, setActiveTab] = useState("vaccination");

  const items = [
    {
      id: 1,
      image: "/assets/rabies_dog.svg",
      title: "Rabies Vaccination",
      date: "Jan 15, 2025",
    },
    {
      id: 2,
      image: "/assets/flea_dog.svg",
      title: "Flea/Tick Treatment ",
      date: "Feb 20, 2025",
    },
    {
      id: 3,
      image: "/assets/first_dog.svg",
      title: "First Birthday ",
      date: "Nov 25, 2024",
    },
  ];

  const quick = [
    {
      title: "Vacination",
      date: "Jan 15, 2025",
    },
    {
      title: "Next Due",
      date: "June 15, 2025",
    },
    {
      title: "Allergies",
      date: "None",
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto pt-[40px] px-5 md:px-[100px]">
      <div className="flex flex-col">
        <div>
          <h1 className="font-[600] text-[24px]">Health Records</h1>
          <p className="text-[20px] font-[400] py-[5px]">
            Manage your pet’s health records, including vaccinations and
            treatment.
          </p>
        </div>
        <div>
          <div>
            <div className="flex gap-[26px] mb-5 mt-[19px]">
              <button
                onClick={() => setTab("all")}
                className={`font-[500] px-[30px] py-[8.5px] flex justify-center items-center gap-[7.5px] rounded-full ${
                  tab === "all"
                    ? "text-[#277359]  bg-[#d1fae5]"
                    : "text-gray-700"
                }`}
              >
                <img src="/assets/all.svg" alt="" /> All Pets
              </button>
              <button
                onClick={() => setTab("leo")}
                className={`font-[500] px-[30px] py-[8.5px] flex justify-center items-center gap-[7.5px] rounded-full ${
                  tab === "leo"
                    ? "text-[#277359]  bg-[#d1fae5]"
                    : "text-gray-700"
                }`}
              >
                <img src="/assets/small-leo.svg" alt="" /> Leo
              </button>
              <button
                onClick={() => setTab("luna")}
                className={`font-[500] px-[30px] py-[8.5px] flex justify-center items-center gap-[7.5px] rounded-full ${
                  tab === "luna"
                    ? "text-[#277359]  bg-[#d1fae5]"
                    : "text-gray-700"
                }`}
              >
                <img src="/assets/small-luna.svg" alt="" /> Luna
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center  gap-[166px]">
            <div>
              <h1 className="font-[600] text-[24px]">Timeline</h1>
              <div className="flex gap-[56px] mb-5 ">
                <button
                  onClick={() => setActiveTab("vaccination")}
                  className={`font-[500] pb-4  ${
                    activeTab === "vaccination"
                      ? "text-blue-600 border-b-2 border-[#14b8a6] "
                      : "text-gray-700"
                  }`}
                >
                  Vaccinations
                </button>
                <button
                  onClick={() => setActiveTab("treatment")}
                  className={`font-[500] pb-4  ${
                    activeTab === "treatment"
                      ? "text-blue-600  border-b-2  border-[#14b8a6] "
                      : "text-gray-700"
                  }`}
                >
                  Treatments
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto">
                {tab === "all" &&
                  activeTab === "vaccination" &&
                  items.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-center items-center flex-col  text-center bg-[#ffffff] px-[9.5px] py-[7.5px] rounded-xl space-y-[20px]"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="w-[385px] h-[176px]"
                      />

                      <h1 className="text-[24px] font-[600]">{item.title}</h1>
                      <p className="text-[20px] font-[400]">{item.date}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col  gap-[30px] mx-auto">
                <h1 className="font-[600] text-[24px]">Quick Stats</h1>
                {quick.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-center items-center flex-col  text-center bg-[#ffffff] pl-[14px] pr-[150px] py-[7.5px] rounded-xl space-y-[10px]"
                  >
                    <h1 className="text-[20px] font-[400] flex ">{item.title}</h1>
                    <p className="text-[14px] font-[600]">{item.date}</p>
                    
                  </div>
                ))}
                <button className="bg-[#06b6d4] text-white py-[7.5px] rounded-lg">Upload Document </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Health;
