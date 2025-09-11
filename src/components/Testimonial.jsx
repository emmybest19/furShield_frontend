function Testimonial() {
   const items = [
        {
            id: 1,
            title: "Happy Tails: Max’s New Family",
            image:"/assets/happy-tails.svg",
            description: "After a long search, Max founda lovinghome through FurShield. His new family cherishes every moment with him."

        },
        {
            id: 2,
            title: "Purrfect Match: Luna’s  Home",
            image:"/assets/perfect-match.svg",
            description: "Luna, a shy cat, blossomed in her new home, thanks to the caring adopters who found her through FurShield."

        },
        {
            id: 3,
            title: "A Bond Beyond Words: Leo",
            image:"/assets/bond-beyond.svg",
            description: "Leo, a rescue dog, formed an unbreakable bond with his adopter, proving that love knows no bound"

        }
    ]

    return (
        <div className="max-w-[1440px] mx-auto mb-[40px] px-10 py-[50px] bg-[#a7f3d0]">
            <h1 className="text-center  mb-[40px] font-[600] text-[21px] md:text-[48px]">Success Stories & Testimonials</h1>
            <div className="flex justify-between items-center flex-col md:flex-row gap-[40px] ">
                {items.map((item) => (
                    <div key={item.id} className="flex justify-center items-center flex-col text-center bg-white px-[30px] py-[20px] rounded-xl space-y-[20px]">
                        <img src={item.image} alt="" className="w-[356px]" />
                        <h1 className="text-[20px] font-[600]">{item.title}</h1>
                        <p className="text-[16px] font-[400]">{item.description}</p>

                    </div>
                ))}
            </div>
            
        </div>
    )
}


export default Testimonial
