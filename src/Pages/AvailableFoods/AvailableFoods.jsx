/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";

const AvailableFoods = () => {
    const [searchText, setSearchText] = useState('')
    const [sortValue, setSortValue] = useState('')
    // const services = useSearch(asc, search);
    const availableFoods = useLoaderData()
    // console.log(availableFoods)


    let fetchData = availableFoods;

    if (searchText == null || searchText== '' || searchText == 'all') {
        fetchData = availableFoods;
        console.log('it is inside if')
    }
    else {
        fetchData = availableFoods?.filter(data => {
            const nameMatches = data.Food_name.toLowerCase() === searchText?.toLowerCase();
            return nameMatches;
        })
        console.log('it is inside else')
        console.log(searchText)
    }

    // sort conditions
    if(sortValue == 'descending'){
         fetchData = fetchData?.slice().sort((a, b) => b.Expired_date - a.Expired_date)
        // console.log(sortedDataDescending)
    }
    else if(sortValue == 'ascending'){
         fetchData = fetchData?.slice().sort((a, b) => a.Expired_date - b.Expired_date);
        console.log('ascending data')
    }
    else{
        fetchData= availableFoods;
    }

    // console.log(fetchData);


    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        const getSortValue = e.target.sortBy.value;
        setSearchText(searchText);
        setSortValue(getSortValue);
    }

    console.log(sortValue)

    return (
        <div className="mt-[120px] max-w-[1240px] mx-auto ">
            <div className="common_Heading text-center">
                {/* <h3 className="font-bold text-[#23aade] mb-[20px] text-[20px]">Core Features</h3> */}
                <h1 className="text-5xl font-bold text-[#23aade]">Available Foods</h1>
                <div className="textPadingAbout text-[#737373] mx-[30px] sm:mx-[60px] lg:mx-[230px]">
                    <p className="py-6 text-[16px] capitalize">Sharing Flavors, Spreading Hope: Culinary Generosity in Our Featured Food Collection</p>
                </div>
            </div>
            {/* Search and sort section */}
            <div className="max-w-[600px] mx-auto mb-[80px]">
                <form onSubmit={handleSearch}>
                    <div className="flex">
                        <ul>
                            <select className="flex-nowrap min-w-[120px] z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" name="sortBy" id="">
                                <option value="sort">Sort By EXP</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending </option>
                            </select>
                        </ul>
                        <div className="relative w-full rounded-lg">
                            <input
                                name="search"
                                type="search"
                                id="search-dropdown"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-r-lg"
                                placeholder="Search by Food name"
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="Features_items grid grid-cols-3 justify-items-center gap-[25px] items-center">
                {
                    fetchData?.map(data => (
                        <div key={data.id} className="food_card flex flex-col min-w-[390px] p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-white text-gray-900 hover:scale-105 transition-all duration-300 border mb-[30px] hover:border-[#23aade]">
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
                                            <button className="py-[10px] mb-[20px] rounded-lg mt-[10px] min-w-full border border-[#23aade] bg-white text-[#23aade] font-bold hover:bg-[#23aade] hover:text-white">View Details</button>
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
    );
};

export default AvailableFoods;