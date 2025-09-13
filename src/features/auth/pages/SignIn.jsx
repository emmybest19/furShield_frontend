import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/util/Button";
import { useState } from "react";


function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handSubmit(e) {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("user"))

    if(!storedData) return

    //redirecting the user
    if(storedData.email === formData.email && storedData.password === formData.password ) {
      if(storedData.category === "petOwer") {
        navigate("/dashboard")
      } else if(storedData.category === "animalShelter") {
        navigate("/animalShelter")
      } else if(storedData.category === "veterinarian") {
        navigate("/vetProfile")
      }
    }
  }
  return (
    <div className="max-w-[1440px] mx-auto ">
      <div className="flex flex-col justify-center items-center min-h-screen px-[39px] py-[65px] w-full bg-[#a7f3d0]">
        <div className="flex items-center justify-center bg-white rounded-sm  md:gap-10">
          <div className="hidden md:flex  ">
            <img src="/assets/signUp-pets.svg" alt="" className="w-full h-full bg-cover"/>
          </div>
          <div className="flex flex-col items-center justify-center px-[70px] mb-4 mt-4 ">
            <img src="/assets/manage-pet.svg" alt="" />
            <h2 className=" mb-[5px] text-[48px] font-[600]">Welcome Back </h2>
            <p className=" font-[400] text-[20px] mb-3">Log in to manage your pet’s world</p>
            <form action="" className=" space-y-4" onSubmit={handSubmit}>
              
              <div className="relative">
                <input type="email" name="email" id="" placeholder="Email Adress" className="w-[400px] md:w-[543px] md:h-[81px] h-[50px] border-[1px] rounded-[15px] pl-12 pr-3 gap-[10px] focus:outline-none placeholder:text-base leading-[1.2]" onChange={handleChange} />
                <img src="/assets/email.svg" alt="" className="absolute top-1/2 left-4 -translate-y-1/2 " />
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
                <img src="/assets/lock.svg" alt="" className="absolute top-1/2 left-4 -translate-y-1/2 "/>
              </div>
              
              <div>
                <Button type="submit" className="text-center w-full bg-[#64748b] py-5 rounded-[15px] text-white">Login</Button>
              </div>
              <p className=" font-[300] text-[18px] text-right mb-5 cursor-pointer"> <Link to="/login">Forget password?</Link></p>
            <p className=" font-[300] text-[18px]  mb-3 cursor-pointer text-center">Don’t have an account? <Link to="/signUp" className="text-[#14b8a6]">Create Account </Link></p>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
