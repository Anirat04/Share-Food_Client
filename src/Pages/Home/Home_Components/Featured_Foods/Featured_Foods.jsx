/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import './Featured_Foods.css'
const Featured_Foods = () => {

    const [foodCard, setFoodCard] = useState()

    useEffect(() => {
        fetch('/public/Available_Food.json')
            .then(res => res.json())
            .then(data => setFoodCard(data))
    }, [])
    console.log(foodCard)

    return (
        <div className="mt-[120px] max-w-[1240px] mx-auto ">
            <div className="common_Heading text-center">
                {/* <h3 className="font-bold text-[#23aade] mb-[20px] text-[20px]">Core Features</h3> */}
                <h1 className="text-5xl font-bold text-[#23aade]">Featured Foods</h1>
                <div className="textPadingAbout text-[#737373] mx-[30px] sm:mx-[60px] lg:mx-[230px]">
                    <p className="py-6 text-[16px] capitalize">Sharing Flavors, Spreading Hope: Culinary Generosity in Our Featured Food Collection</p>
                </div>
            </div>
            <div className="Features_items grid grid-cols-3 justify-items-center gap-[25px] items-center">
                {
                    foodCard?.map(data => (
                        <div key={data.id} className="food_card flex flex-col min-w-[390px] p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-white text-gray-900 hover:scale-105 transition-all duration-300 border mb-[30px]">
                            {/* donator avatar */}
                            <div className="flex space-x-4 items-center">
                                <img alt="" src={`${data.Donator_img}`} className="object-cover w-[60px] h-[60px] rounded-full shadow border border-black dark:bg-gray-500" />
                                <div className="flex flex-col">
                                    <a href="#" className="text-[20px] font-semibold">{data.Donator_name}</a>
                                    <span className="text-[16px] dark:text-gray-400">Donator</span>
                                </div>
                            </div>
                            {/* food details */}
                            <div>
                                <div>
                                    <img src={`${data.Food_img}`} alt={`${data.Food_name} Picture not found`} className="object-cover w-full max-h-[350px] mb-4 sm:h-96 dark:bg-gray-500" />
                                    <div>
                                        <div>
                                            <div className="flex justify-between items-center mb-[20px]">
                                                <h2 className="food_name mb-1 text-[26px] max-w-[250px] font-bold truncate" title={data.Food_name}>Name: {data.Food_name}</h2>
                                                <p className="text-[16px] font-bold dark:text-gray-600">Exp: {data.Expired_date} Days</p>
                                            </div>
                                            <p className="border border-[#23aade] inline-block px-[10px] font-bold text-gray-700 rounded-lg mr-[10px]">Additional Notes: {data.Additional_notes}</p>
                                            <br />
                                            <p className="border border-[#23aade] mt-[8px] mb-[5px] inline-block px-[10px] font-bold text-gray-700 rounded-lg">For {data.Food_quantity} Person</p>
                                            <p className="text-[16px] font-bold dark:text-gray-600">Location: "{data.Pickup_location}"</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="py-[10px] mb-[20px] rounded-lg mt-[10px] min-w-full border border-[#23aade] bg-white text-[#23aade] font-bold hover:bg-[#23aade] hover:text-white">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
                <button className="py-[10px] mb-[20px] rounded-lg mt-[10px] px-[50px] border border-[#23aade] bg-white text-[#23aade] font-bold hover:bg-[#23aade] hover:text-white transition-all duration-300">View Details</button>
            </div>
        </div>
    );
};

export default Featured_Foods;