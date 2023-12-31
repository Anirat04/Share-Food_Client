/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import './Featured_Foods.css'
import { Link } from "react-router-dom";
import { ProviderContext } from "../../../../Provider/Provider";
import Lottie from "lottie-react";
import LoadingJson from "./Loading.json"



const Featured_Foods = () => {

    const [foodCard, setFoodCard] = useState()

    useEffect(() => {
        fetch('https://share-food-server-beige.vercel.app/available_foods')
            .then(res => res.json())
            .then(data => setFoodCard(data))
    }, [])

    // Sort the array based on Food_quantity in ascending order
    const sortedDataDescending = foodCard?.slice().sort((a, b) => b.Food_quantity - a.Food_quantity);

    // console.log(sortedDataDescending);
    const {loading} = useContext(ProviderContext)
    if(loading){
        return <div className='max-w-[200px] mx-auto mt-[200px]'><Lottie animationData={LoadingJson}></Lottie></div>
        // return <progress className="progress w-56"></progress>
    }

    // console.log(foodCard)

    return (
        <div className="bg-base-200 py-[50px] mt-[80px]">
            <div className=" max-w-[1240px] mx-auto ">
                <div className="common_Heading text-center">
                    {/* <h3 className="font-bold text-[#23aade] mb-[20px] text-[20px]">Core Features</h3> */}
                    <h1 className="text-5xl font-bold text-[#23aade]">Featured Foods</h1>
                    <div className="textPadingAbout text-[#737373] mx-[30px] sm:mx-[60px] lg:mx-[230px]">
                        <p className="py-6 text-[16px] capitalize">Sharing Flavors, Spreading Hope: Culinary Generosity in Our Featured Food Collection</p>
                    </div>
                </div>
                <div className="Features_items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[25px] items-center">
                    {
                        sortedDataDescending?.map(data => (
                            <div key={data._id} className="food_card flex flex-col min-w-[350px] max-w-[350px] xl:min-w-[390px] p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-white text-gray-900 hover:scale-105 transition-all duration-300 border mb-[30px] hover:border-[#23aade]">
                                {/* donator avatar */}
                                <div className="flex space-x-4 items-center">
                                    <img alt="" src={`${data.Donator_img}`} className="object-cover w-[50px] h-[50px] rounded-full shadow border border-black dark:bg-gray-500" />
                                    <div className="flex flex-col">
                                        <a href="#" className="text-[18px] font-semibold">{data.Donator_name}</a>
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
                                                <p className="border border-[#23aade] inline-block px-[10px] font-bold text-gray-700 rounded-lg mr-[10px]">Additional Note: {data.Additional_notes}</p>
                                                <br />
                                                <p className="border border-[#23aade] mt-[8px] mb-[5px] inline-block px-[10px] font-bold text-gray-700 rounded-lg">Quantity: For {data.Food_quantity} Person</p>
                                                <p className="text-[16px] font-bold dark:text-gray-600">Location: "{data.Pickup_location}"</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-center">
                                            <Link to={`/food/${data._id}`}>
                                                <button className="py-[10px] px-[20px] mb-[20px] rounded-lg mt-[10px] min-w-full border border-[#23aade] bg-white text-[#23aade] font-bold hover:bg-[#23aade] hover:text-white">View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center">
                    <Link to="/available-foods">
                        <button className="py-[10px] mb-[20px] rounded-lg mt-[10px] px-[50px] border border-[#23aade] bg-white text-[#23aade] font-bold hover:bg-[#23aade] hover:text-white transition-all duration-300">Show All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Featured_Foods;