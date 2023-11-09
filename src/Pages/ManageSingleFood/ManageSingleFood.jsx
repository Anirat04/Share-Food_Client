/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ProviderContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageSingleFood = () => {
    const { user } = useContext(ProviderContext)
    const [singleFoods, setSingleFoods] = useState([]);
    // const [getIDofData, setGetIDofData] = useState([]);
    // const getParams = useParams()
    const getLoaderData = useLoaderData()
    console.log(getLoaderData)
    useEffect(() => {
        setSingleFoods(getLoaderData)
    }, [])

    const handleDelivered = data => {
        // setGetIDofData(data.Food_id)
        console.log('single data', data)
        const url = `http://localhost:5000/foodRequests/${data?.Food_id}`;
        console.log('Request URL:', url);
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ Food_status: 'Delivered' }),
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                console.log('getdata', data);
                if (data.modifiedCount > 0) {
                    console.log(data.modifiedCount);
                }
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
        // .then(res => res.json())
        // .then(data => {
        //     console.log('getdata', data)
        //     if (data.modifiedCount > 0) {
        //         console.log(data.modifiedCount)
        //     }
        // })
    }


    return (
        <div className="max-w-[1240px] mx-auto">
            <Helmet>
                <title>ShareFood | My Food Requests
                </title>
            </Helmet>
            <div className="overflow-x-auto shadow-xl min-h-[700px] border">
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <h1 className="text-[#23aade] text-[36px] font-bold text-center my-[30px] outline-dotted">Manage Food Requests</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-[20px]">
                            <th>SL. No.</th>
                            <th>Requester Name</th>
                            <th>Requester Email</th>
                            <th>Request Time</th>
                            <th>Food Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            singleFoods?.map((data, index) => (
                                <tr key={data._id} className="text-[18px]">
                                    <th>{index + 1}</th>
                                    <td className='border'>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={data.Requester_Img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{data.Requester_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{data.Requester_email}</td>
                                    <td>{data.Request_date}</td>
                                    <td>{data.Food_name}</td>
                                    <td>{data.Food_status}</td>
                                    <th>
                                        <button onClick={() => handleDelivered(data)} className="btn text-white bg-[#23aade] rounded-lg hover:bg-transparent hover:border-red-600 hover:text-red-600">Change Status</button>

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

export default ManageSingleFood;