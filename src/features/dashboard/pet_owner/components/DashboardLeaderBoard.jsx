import { useState } from "react";

function DashboardLeaderBoard() {
  const [tab, setTab] = useState("general");

  const items = [
    {
      id: 1,
      name: "Leo",
      Breed: "Caucasian Sherpherd",
      gnder: "Male",
      age: "3 years",
    },
    {
      id: 2,
      name: "Lucio",
      Breed: "Caucasian Sherpherd",
      gnder: "Female",
      age: "10 years",
    },
  ];
  return (
    <div className="rounded-lg overflow-auto mt-[40px] mb-[20px]  px-5 md:px-[100px]">
      <div className="bg-white rounded-lg p-4">
        <div className="flex gap-8 mb-5 ">
          <button
            onClick={() => setTab("general")}
            className={`font-[500]  ${
              tab === "general"
                ? "text-gray-800 border-b-2 border-[#14b8a6] "
                : "text-gray-700"
            }`}
          >
            General Info
          </button>
          <button
            onClick={() => setTab("health")}
            className={`font-[500]  ${
              tab === "health"
                ? "text-gray-800 border-b-2 border-[#14b8a6] "
                : "text-gray-700"
            }`}
          >
            Health Records
          </button>
        </div>
        {tab === "general" && (
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Breed</th>
                <th className="px-4 py-2">Gender</th>
                <th className="px-4 py-2">Age</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-t p-2">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.Breed}</td>
                  <td className="px-4 py-2">{item.gnder}</td>
                  <td className="px-4 py-2">{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DashboardLeaderBoard;
