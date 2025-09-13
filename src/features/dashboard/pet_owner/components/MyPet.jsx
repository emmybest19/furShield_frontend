function MyPet() {
  const items = [
    {
      id: 1,
      name: "Leo",
      image: "/assets/leo.svg",
      num: "3 years old, Caucasian Shepherd",
    },
    {
      id: 2,
      name: "Luna",
      image: "/assets/luna.svg",
      num: "1 years old, Goodluck’s cat",
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto mt-[40px] px-5 md:px-[100px] ">
      <h1 className="text-left mt-[80px] mb-[40px] font-[600] text-[21px] md:text-[48px]">
        My Pets
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-[43px] mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-center flex-col overflow-hidden bg-[#ffffff]  rounded-xl space-y-[20px] pb-3"
          >
            <div className="w-full h-[250px]">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-3">
              <h1 className="text-[24px] font-[600]">{item.name}</h1>
              <p className="text-[20px] font-[400]">{item.num}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPet;
