import { useContext } from "react";
import { ProviderContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AddFood = () => {
    const { user } = useContext(ProviderContext)

    const handleAddFood = e => {
        e.preventDefault();
        const form = e.target
        const Food_name = form.food_name.value //
        const Food_image = form.food_image.value //
        const Food_quantity = form.food_quantity.value //
        const Donator_email = form.donator_email.value //
        const Donator_name = form.donator_name.value //
        const Donator_image = form.donator_image.value //
        const Pickup_location = form.pickup_location.value //
        const Food_status = form.food_status.value //
        const Expire_date = form.expire_date.value //
        const Additional_note = form.additional_note.value //
        const request = {
            Food_img : Food_image,
            Food_name,
            Donator_img: Donator_image,
            Donator_name,
            Donator_email,
            Food_quantity,
            Pickup_location,
            Expired_date: Expire_date,
            Additional_notes: Additional_note,
            Food_status,
        }

        fetch('http://localhost:5000/available_foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('data added to available collection')
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You have already added this product to the collection!',
                })
            })
        // form.reset();
    }
    return (
        <div className="max-w-[1240px] mx-auto">
            <Helmet>
                <title>ShareFood | Add Food
                </title>
            </Helmet>
            <section className=" dark:text-gray-100  min-w-full">
                <form onSubmit={handleAddFood} className="container w-full  p-8 mx-auto bg-[#4898b8] space-y-6 rounded-md shadow">
                    <h2 className="w-full text-center text-[40px] font-bold leadi text-gray-900">Add New Food</h2>
                    {/*  */}
                    <div className="grid grid-cols-2 gap-5">
                        {/* Food name */}
                        <div className="w-full">
                            <label className="block mb-1 ml-1">Food Name</label>
                            <input
                                name="food_name"
                                id="name"
                                type="text"
                                placeholder="Food Name"
                                // value={takeDetails.Food_name}
                                required
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri border text-gray-900"

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
                                placeholder="Food Image URL"
                                // value={takeDetails.Food_img}
                                required
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri border text-gray-900"

                            />
                            <div data-lastpass-icon-root="true"></div>
                        </div>
                        {/* Food Quantity */}
                        <div className="w-full">
                            <label className="block mb-1 ml-1">Food Quantity</label>
                            <input
                                name="food_quantity"
                                id="food_quantity"
                                type="text"
                                placeholder="How many person can be served"
                                // value={takeDetails.Food_img}
                                required
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri border text-gray-900"

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
                                placeholder="Pickup Location"
                                // value={takeDetails.Pickup_location}
                                required
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri border text-gray-900"

                            />
                            <div data-lastpass-icon-root="true"></div>
                        </div>
                        {/* Expire Date */}
                        <div className="w-full">
                            <label htmlFor="name" className="block mb-1 ml-1">Expire Date</label>
                            <input
                                name="expire_date"
                                id="expire_date"
                                type="text"
                                placeholder="Expire Date"
                                // value={takeDetails.Expired_date}
                                required=""
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri border text-gray-900" />
                            <div data-lastpass-icon-root="true"></div>
                        </div>
                        {/* Status */}
                        <div className="w-full">
                            <label className="block mb-1 ml-1">Status</label>
                            <input
                                name="food_status"
                                id="food_status"
                                type="text"
                                placeholder="Available"
                                value="Available"
                                required
                                disabled
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri border text-gray-900"

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
                                placeholder={user?.displayName}
                                value={user?.displayName}
                                required
                                disabled
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri border text-gray-900"

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
                                placeholder={user?.email}
                                value={user?.email}
                                required
                                disabled
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri border text-gray-900"

                            />
                            <div data-lastpass-icon-root="true"></div>
                        </div>
                        {/* Donator Image */}
                        <div className="w-full">
                            <label className="block mb-1 ml-1">Donator Image</label>
                            <input
                                name="donator_image"
                                id="donator_image"
                                type="text"
                                placeholder={user?.photoURL}
                                value={user?.photoURL}
                                required
                                disabled
                                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ri focus:ri border text-gray-900"

                            />
                            <div data-lastpass-icon-root="true"></div>
                        </div>
                    </div>
                    {/* Additional Note */}
                    <div className="w-full">
                        <label className="block mb-1 ml-1">Write a additional note</label>
                        <textarea
                            name="additional_note"
                            id="additional_note"
                            type="text"
                            placeholder="Type here..."
                            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ri focus:ri border text-gray-900">
                        </textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="btn px-[60px] w-[200px] hover:w-[450px] transition-all hover:w-ful text-white bg-transparent rounded-lg hover:bg-[#23aade] hover:border-[#23aade] hover:text-white">Add Food</button>
                    </div>
                    {/* <form method="dialog">
                        <button className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ri dark:bg-violet-400 focus:ri hover:ri dark:text-gray-900">close</button>
                    </form> */}
                </form>

            </section>
        </div>
    );
};

export default AddFood;