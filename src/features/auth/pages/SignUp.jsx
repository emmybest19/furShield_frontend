import { useState } from "react";
import Button from "../../../components/util/Button";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    category: "selectRole",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSumit(e) {
    e.preventDefault();

    if (formData.password !== formData.cpassword) return;

    if (formData.category === "selectRole") return;

    //API call should be made here, but for now let it save to system setProfileImage
    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/login");
    setFormData({
      name: "",
      email: "",
      password: "",
      cpassword: "",
      category: "selectRole",
    });
  }
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="flex flex-col justify-center items-center min-h-screen px-[39px] py-[65px] w-full bg-[#a7f3d0]">
        <div className="flex items-center justify-center bg-white rounded-sm  md:gap-10">
          <div className="hidden md:flex  ">
            <img
              src="/assets/signUp-pets.svg"
              alt=""
              className="w-full h-full bg-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-[70px]  ">
            <img src="/assets/manage-pet.svg" alt="" />
            <h2 className=" mb-[5px] text-[48px] font-[600]">Sign Up </h2>
            <p className=" font-[400] text-[20px]">
              Log in to manage your pet’s world.
            </p>
            <form action="" onSubmit={handleSumit} className=" space-y-2">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Full Name"
                  className="w-[400px] md:w-[543px] md:h-[81px] h-[50px] border-[1px] rounded-[15px] p-[10px] gap-[10px]"
                  onChange={handleChange}
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email Adress"
                  className="w-[400px] md:w-[543px] md:h-[81px] h-[50px] border-[1px] rounded-[15px] pl-12 pr-3 gap-[10px] focus:outline-none placeholder:text-base leading-[1.2]"
                  onChange={handleChange}
                />
                <img
                  src="/assets/email.svg"
                  alt=""
                  className="absolute top-1/2 left-4 -translate-y-1/2 "
                />
              </div>
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  id=""
                  onChange={handleChange}
                  className="w-[400px] md:w-[543px] md:h-[81px] h-[50px] border-[1px] rounded-[15px] pl-12 pr-3 gap-[10px] focus:outline-none placeholder:text-base leading-[1.2]"
                >
                  <option value="SelectRole">Select Role</option>
                  <option value="petOwner">Pet Owner</option>
                  <option value="animalShelter">Animal Shelter</option>
                  <option value="veterinarian">Veterinarian</option>
                </select>
                <img
                  src="/assets/email.svg"
                  alt=""
                  className="absolute top-1/2 left-4 -translate-y-1/2 "
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  className="w-[400px] md:w-[543px] md:h-[81px] h-[50px] border-[1px] rounded-[15px] pl-12 pr-3 gap-[10px] focus:outline-none placeholder:text-base leading-[1.2]"
                  onChange={handleChange}
                />
                <img
                  src="/assets/lock.svg"
                  alt=""
                  className="absolute top-1/2 left-4 -translate-y-1/2 "
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="cpassword"
                  id=""
                  placeholder="Confirm Password"
                  className="w-[400px] md:w-[543px] md:h-[81px] h-[50px] border-[1px] rounded-[15px] pl-12 pr-3 gap-[10px] focus:outline-none placeholder:text-base leading-[1.2]"
                  onChange={handleChange}
                />
                <img
                  src="/assets/lock.svg"
                  alt=""
                  className="absolute top-1/2 left-4 -translate-y-1/2 "
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="text-center w-full bg-[#64748b] py-5 rounded-[15px] text-white cursor-pointer"
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
