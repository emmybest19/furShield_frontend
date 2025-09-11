import Button from "./util/Button";

function Hero() {
  return (
    <div className="flex flex-col justify-between items-center text-center space-y-3 relative">
      <div>
        <img src="/assets/hero-dog.svg" alt="" />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-center">
        <h1 className="font-[600] text-[20px] mt-[10px] md:mt-[25px] md:text-[35px]">
          Every Paw/Wings Deserves a Shield of Love
        </h1>
        <div className="max-w-xl  ">
          <h3 className="font-[400] text-[15px] md:text-[19px] lg:text-[24px] mt-[10px] md:mt-[25px] mb-[10px] md:mb-[40px] text-gray-800">
            Join our community to manage your pet’s life, find the best care,
            and discover your new best friend
          </h3>
          <div className="flex justify-center items-center">
            <Button className={"px-[35.5px] py-[11.5px] bg-[#14b8a6] text-white rounded-full cursor-pointer"}>Join Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
