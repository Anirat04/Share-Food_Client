/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { ProviderContext } from "../../Provider/Provider";

const Details = () => {
    // const [details , setDetails] = useState([])
    const { user } = useContext(ProviderContext)
    const takeDetails = useLoaderData()
    // const currentID = useParams()

    console.log(takeDetails)
    // console.log(takeDetails.id)
    // console.log(currentID);

    const [clickedTime, setClickedTime] = useState('');

    const handleRequestClick = () => {
        const currentDate = new Date();
        const formattedTime = currentDate.toLocaleTimeString();
        setClickedTime(formattedTime);
    };

    const openModal = () => {
        // Additional actions you want to perform
        console.log('Button clicked!');

        // Open the modal
        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();
        }
    };

    const handleButtonClick = () => {
        // Call both functions when the button is clicked
        handleRequestClick();
        openModal();
    };

    const handleRequestData = e => {
        e.preventDefault();
        const form = e.target
        const Food_name = form.food_name.value
        const Food_image = form.food_image.value
        const Food_id = form.food_id.value
        const Donator_email = form.donator_email.value
        const Donator_name = form.donator_name.value
        const User_email = form.food_name.value
        const Request_date = form.request_time.value
        const Pickup_location = form.pickup_location.value
        const Expire_date = form.expire_date.value
        const Additional_note = form.additional_note.value
        const Donation_amount = form.donation_amount.value
        console.log('Food name' + Food_name)
        console.log('Food image' + Food_image)
        console.log('Food id' + Food_id)
        console.log('Donator email' + Donator_email)
        console.log('Donator_name' + Donator_name)
        console.log('User_email' + User_email)
        console.log('Request_date' + Request_date)
        console.log('Pickup_location' + Pickup_location)
        console.log('Expire_date' + Expire_date)
        console.log('Additional_note' + Additional_note)
        console.log('Donation_amount' + Donation_amount)
    }


    return (
        <div className="max-w-[1240px] mx-auto mb-[100px] border shadow-xl rounded-xl p-8">

            <div className=" grid grid-cols-2 gap-8">
                <div className="details-img max-w-[600px] border-[3px] rounded-2xl border-[#23aade] shadow-xl">
                    <img className="max-w-full rounded-xl" src={takeDetails.Food_img} alt="" />
                </div>
                <div className="details-text text-center">
                    <h3 className="text-center text-[40px] font-bold text-[#23aade]">Donated by "{takeDetails.Donator_name}"</h3>
                    <p className="text-center text-[20px] font-bold text-gray-500 mb-[20px]">Location: "{takeDetails.Pickup_location}"</p>
                    <div className="text-left flex flex-col border border-gray-300 min-h-[460px] justify-between p-5 rounded-lg">
                        <div>
                            <h3 className="text-[30px] font-bold">Name: {takeDetails.Food_name}</h3>
                            <p className="text-[26px] font-semibold">Quantity: For {takeDetails.Food_quantity} person</p>
                            <p className="text-[26px] font-semibold">Expired Date: {takeDetails.Expired_date} Days</p>
                        </div>
                        <div className="flex">
                            <button className="btn px-[60px] min-w-full text-white bg-[#23aade] rounded-lg hover:bg-transparent hover:border-[#23aade] hover:text-[#23aade]">Request</button>
                        </div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={handleButtonClick}>open modal</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box p-0 min-w-[1100px]">
                                <section className=" dark:text-gray-100 bg-slate-600 min-w-full">
                                    <form onSubmit={handleRequestData} className="container w-full  p-8 mx-auto space-y-6 rounded-md shadow">
                                        <h2 className="w-full text-3xl font-bold leadi text-gray-900">Contact us</h2>
                                        {/*  */}
                                        <div className="grid grid-cols-2 gap-5">
                                            {/* Food name */}
                                            <div className="w-full">
                                                <label className="block mb-1 ml-1">Food Name</label>
                                                <input
                                                    name="food_name"
                                                    id="name"
                                                    type="text"
                                                    placeholder={takeDetails.Food_name}
                                                    value={takeDetails.Food_name}
                                                    required
                                                    disabled
                                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"

                                                />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                            {/* Food ID */}
                                            <div className="w-full">
                                                <label className="block mb-1 ml-1">Food ID</label>
                                                <input
                                                    name="food_id"
                                                    id="FoodID"
                                                    type="text"
                                                    placeholder={takeDetails._id}
                                                    value={takeDetails._id}
                                                    required
                                                    disabled
                                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"

                                                />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                            {/* Food Image */}
                                            <div className="w-full">
                                                <label className="block mb-1 ml-1">Food Image</label>
                                                <input
                                                    name="food_img"
                                                    id="food_image"
                                                    type="text"
                                                    placeholder={takeDetails.Food_img}
                                                    value={takeDetails.Food_img}
                                                    required
                                                    disabled
                                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"

                                                />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                            {/* Pickup Location */}
                                            <div className="w-full">
                                                <label className="block mb-1 ml-1">Pickup Location</label>
                                                <input
                                                    name="pickup_location"
                                                    id="pickup_location"
                                                    type="text"
                                                    placeholder={takeDetails.Pickup_location}
                                                    value={takeDetails.Pickup_location}
                                                    required
                                                    disabled
                                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"

                                                />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                            {/* Donator Name */}
                                            <div className="w-full">
                                                <label className="block mb-1 ml-1">Donator Name</label>
                                                <input
                                                    name="donator_name"
                                                    id="donator_name"
                                                    type="text"
                                                    placeholder={takeDetails.Donator_name}
                                                    value={takeDetails.Donator_name}
                                                    required
                                                    disabled
                                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"

                                                />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                            {/* Donator Email */}
                                            <div className="w-full">
                                                <label className="block mb-1 ml-1">Donator Email</label>
                                                <input
                                                    name="donator_email"
                                                    id="donator_email"
                                                    type="text"
                                                    placeholder={takeDetails.Donator_email}
                                                    value={takeDetails.Donator_email}
                                                    required
                                                    disabled
                                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"

                                                />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                            {/* Your Email */}
                                            <div className="w-full">
                                                <label className="block mb-1 ml-1">Your Email</label>
                                                <input
                                                    name="user_email"
                                                    id="user_email"
                                                    type="text"
                                                    placeholder={user?.email}
                                                    value={user?.email}
                                                    required
                                                    disabled
                                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"

                                                />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                            {/* Request Time */}
                                            <div className="w-full">
                                                <label className="block mb-1 ml-1">Request Time</label>
                                                <input
                                                    name="request_time"
                                                    id="request_time"
                                                    type="text"
                                                    placeholder={clickedTime}
                                                    value={clickedTime}
                                                    required
                                                    disabled
                                                    className=" block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800"

                                                />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                            {/* Expire Date */}
                                            <div className="w-full">
                                                <label htmlFor="name" className="block mb-1 ml-1">Expire Date</label>
                                                <input
                                                    disabled
                                                    name="expire_date"
                                                    id="expire_date"
                                                    type="text"
                                                    placeholder={`After ${takeDetails.Expired_date} Days from now`}
                                                    value={takeDetails.Expired_date}
                                                    required=""
                                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                            {/* Your Donation Amount */}
                                            <div className="w-full">
                                                <label htmlFor="name" className="block mb-1 ml-1">Donation Amount</label>
                                                <input
                                                    name="donation_amount"
                                                    id="donation_amount"
                                                    type="text"
                                                    placeholder="Your Donation Amount"
                                                    required=""
                                                    className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800" />
                                                <div data-lastpass-icon-root="true"></div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label className="block mb-1 ml-1">Write a additional note</label>
                                            <textarea
                                                name="additional_note"
                                                id="additional_note"
                                                type="text"
                                                placeholder="Type here..."
                                                className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri dark:bg-gray-800">
                                            </textarea>
                                        </div>
                                        <div>
                                            <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 focus:ri hover:ri dark:text-gray-900">Send</button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;