/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ProviderContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyFoodRequests = () => {
    const { user } = useContext(ProviderContext)
    const [userRequests, setUserRequests] = useState([]);

    const url = `https://share-food-server-beige.vercel.app/foodRequests?Requester_email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserRequests(data))
    }, [])

    // delete function
    const handleDelete = id => {
        const getMap = userRequests.filter(usrRequestData => usrRequestData._id == id)
        console.log(getMap[0].Food_status)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed & getMap[0].Food_status !== 'Delivered') {
                fetch(`https://share-food-server-beige.vercel.app/foodRequests/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            console.log(data.Food_status)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = userRequests.filter(userRequest => userRequest._id !== id)
                            setUserRequests(remaining)
                        }
                    })
            }
            else if(result.isConfirmed || getMap[0].Food_status == 'Delivered'){
                Swal.fire({
                    title: "Cannot Cancel request!",
                    text: "This Food has been delivered",
                    icon: "warning"
                });
            }
        });
    }
    return (
        <div className="max-w-[1260px] mx-auto">
            <Helmet>
                <title>ShareFood | My Food Requests
                </title>
            </Helmet>
            <div className="overflow-x-auto shadow-xl min-h-[700px] border">
                <h1 className="text-[#23aade] text-[36px] font-bold text-center my-[30px] outline-dotted">Your All Requested Foods There</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-[20px]">
                            <th>SL. No.</th>
                            <th>Food Name</th>
                            <th>Donator Name</th>
                            <th>Location</th>
                            <th>Expire Date</th>
                            <th>Request Time</th>
                            <th>Donation Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            userRequests.map((data, index) => (
                                <tr key={data._id} className="text-[18px]">
                                    <th>{index + 1}</th>
                                    <td>{data.Food_name}</td>
                                    <td>{data.Donator_name}</td>
                                    <td>{data.Pickup_location}</td>
                                    <td>{data.Expire_date}</td>
                                    <td>{data.Request_date}</td>
                                    <td>{data.Donation_amount}</td>
                                    <td>{data.Food_status}</td>
                                    <th>
                                        <button onClick={() => handleDelete(data._id)} className="btn text-white bg-[#23aade] rounded-lg hover:bg-transparent hover:border-red-600 hover:text-red-600">Cancel</button>

                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequests;