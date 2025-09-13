import { useState } from "react";

function ProfileBody() {
  const [profileImage, setProfileImage] = useState("/assets/x-ray-dog.svg");

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      const imagePath = URL.createObjectURL(file);

      setProfileImage(imagePath);
    }
  }
  return (
    <div className="p-4 ml-72 overflow-y-auto">
      <h1 className="font-bold text-3xl">Profile</h1>
      <p className="text-gray-400 text-sm md:text-lg">
        Manage your profile information to share with pet owners
      </p>

      <div className="flex flex-col py-6 px-4 bg-[#e6f1f6]">
        <div className="flex flex-col  md:flex-row  w-full gap-8">
          <div>
            <img src={profileImage} alt="" className="w-32 h-32 rounded-full" />
          </div>
          <div className="space-y-2">
            <h1 className="font-semibold text-24px] ">Dr Amelia Harper</h1>
            <h3>Veterinarian</h3>
            <input
              id="upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <h2>About me</h2>
        <p>Write a short bio</p>
        <textarea name="" id="" rows={5} className="w-full"></textarea>
      </div>



        
        
      
    

    </div>
  );
}

export default ProfileBody;
