function DashboardCard() {
  const items = [
    {
      id: 1,
      title: "Number of Pets",
      image: "/assets/num_pet.svg",
      num: 2,
    },
    {
      id: 2,
        title: "Upcoming Appointment",
      image: "/assets/appointment.svg",
      num: 2,
    },
    {
      id: 1,
      title: "Vaccination Reminders",
      image: "/assets/vaccination.svg",
      num: 2,
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto  px-5 md:px-[100px]">
        <h1 className="text-left pt-[40px] mb-[40px] font-[600] text-[21px] md:text-[48px]">Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center flex-col max-w-sm text-center bg-[#ffffff] px-[34px] py-[45px] rounded-xl space-y-[20px]"
          >
            <img src={item.image} alt="" />
            
            <h1 className="text-[24px] font-[600]">{item.title}</h1>
            <p className="text-[20px] font-[400]">{item.num}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCard;
