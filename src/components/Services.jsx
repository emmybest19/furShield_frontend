import { img } from "framer-motion/client"

function Services() {
    const items = [
        {
            id: 1,
            title: "Manage Pets",
            image:"/assets/manage-pet.svg",
            description: "Keep track of your pet’s health, appointment, and care routines effortlessly."

        },
        {
            id: 2,
            title: "Book Vets",
            image:"/assets/book-vet.svg",
            description: "Find and book appointments with trusted veterinarians in your area."

        },
        {
            id: 3,
            title: "Adopt Pets",
            image:"/assets/adopt_pet.svg",
            description: "Browse and adopt loveable pets from local shelters waiting for a home"

        },
        {
            id: 3,
            title: "Shop Products",
            image:"/assets/shop_product.svg",
            description: "Shop for high quality pet supplies and accessories foryour furry friend."

        }
    ]

    return (
        <div className="max-w-[1440px] mx-auto mb-[40px] px-10">
            <h1 className="text-center mt-[80px] mb-[40px] font-[600] text-[21px] md:text-[48px]">Everything Your Pet Needs, All in One Place</h1>
            <div className="flex justify-between items-center flex-col md:flex-row gap-[30px] ">
                {items.map((item) => (
                    <div key={item.id} className="flex justify-center items-center flex-col max-w-sm text-center bg-[#e6f1f6] px-[34px] py-[45px] rounded-xl space-y-[20px]">
                        <img src={item.image} alt="" />
                        <h1 className="text-[24px] font-[600]">{item.title}</h1>
                        <p className="text-[16px] font-[400]">{item.description}</p>

                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default Services
