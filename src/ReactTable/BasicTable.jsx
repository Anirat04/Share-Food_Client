
import { useContext, useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table'
// import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { ProviderContext } from '../Provider/Provider';
import Swal from 'sweetalert2';
// import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BasicTable = () => {
    const { user } = useContext(ProviderContext)
    const [fetchData, setFetchData] = useState([])
    const [getIdForEdit, setGetIdForEdit] = useState('')
    const columns = useMemo(() => COLUMNS, [])
    // const data = useMemo(() => MOCK_DATA, [])
    const data = useMemo(() => fetchData, [fetchData])
    // console.log(MOCK_DATA)

    const tableInstance = useTable({
        columns,
        data
    })
    const url = `http://localhost:5000/available_foods?Donator_email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFetchData(data))
    }, [url])



    // Edit button functionality


    // Delete button functionality
    const handleDelete = (row) => {
        const getRowDataID = row.original._id
        // console.log(getRowDataID)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/available_foods/${getRowDataID}`, {
                    method: "DELETE",
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
                            const remaining = fetchData.filter(fetchDataOne => fetchDataOne._id !== getRowDataID)
                            setFetchData(remaining)
                        }
                    })
            }
        });
    }

    // handle edit
    // const handleRequestClick = () => {
    //     const currentDate = new Date();
    //     const formattedTime = currentDate.toLocaleTimeString();
    //     setClickedTime(formattedTime);
    // };

    const openModal = () => {
        // Additional actions you want to perform
        console.log('Button clicked!');

        // Open the modal
        const modal = document.getElementById('my_modal_1');
        if (modal) {
            modal.showModal();
        }
    };


    // after clicking the edit button on the react table, this function will call the modal for edit form and take that Food id which was clicked for an edit
    const handleButtonClick = (row) => {
        // Call both functions when the button is clicked
        // handleRequestClick();
        setGetIdForEdit(row.original._id)
        // console.log(row.original._id)
        openModal();
    };



    // final edit function
    const handleEdit = e => {
        e.preventDefault();
        const form = e.target
        const Food_name = form.food_name.value //
        const Food_image = form.food_image.value //
        const Food_quantity = form.food_quantity.value //
        // const Donator_email = form.donator_email.value //
        // const Donator_name = form.donator_name.value //
        // const Donator_image = form.donator_image.value //
        const Pickup_location = form.pickup_location.value //
        const Food_status = form.food_status.value //
        const Expire_date = form.expire_date.value //
        const Additional_note = form.additional_note.value //
        const request = {
            Food_img: Food_image,
            Food_name,
            Donator_img: user.photoURL,
            Donator_name: user.displayName,
            Donator_email: user.email,
            Food_quantity,
            Pickup_location,
            Expired_date: Expire_date,
            Additional_notes: Additional_note,
            Food_status: Food_status,
        }
        fetch(`http://localhost:5000/available_foods/${getIdForEdit}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = fetchData.filter(fetchRemain => fetchRemain._id !== getIdForEdit)
                    let updated = fetchData.find(updateData => updateData._id === getIdForEdit);

                    // those are possible ways..........
                    // updated.Food_name = request.Food_name;
                    // updated.Food_img = request.Food_img;
                    // updated = {
                    //     Food_name : request.Food_name
                    // }
                    // .............
                    updated = request
                    const newUpdatedData = [updated, ...remaining]
                    setFetchData(newUpdatedData);
                    console.log(updated)
                    toast.success('Successfully updated the Food information!', {
                        position: "bottom-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    form.reset()

                }
                else {
                    toast.error('Oops, All are same, nothing to update !', {
                        position: "bottom-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    form.reset()
                }
            })
    }
    // console.log(fetchData)
    // console.log(getIdForEdit)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    console.log(headerGroups)
    // console.log(rows)
    return (
        <div className='max-w-[1240px] mx-auto'>
            <table className='table border' {...getTableProps()}>
                <thead className='text-center'>
                    {
                        headerGroups.map((headerGroup => (
                            <tr className='text-[20px]' {...headerGroup.getHeaderGroupProps()}>
                                <th className='border'>Food Img</th>
                                {
                                    headerGroup.headers.map((column) => (
                                        <>

                                            <th className='border'
                                                {...column.getHeaderProps()}
                                            >
                                                {column.render('Header')}
                                            </th>
                                        </>
                                    ))
                                }
                                <th className='border'>Manage</th>
                                <th className='border'>Edit</th>
                                <th className='border'>Delete</th>
                            </tr>
                        )))
                    }

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <>
                                    <tr className='border text-[18px]' {...row.getRowProps}>
                                        {/* <td>1</td> */}
                                        <td className='border'>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={row.original.Food_img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {
                                            row.cells.map(cell => {
                                                return <td className='text-center border' {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            })
                                        }
                                        <td className='border'>
                                            <button onClick={() => handleDelete(row)} className='btn'>edit</button>
                                        </td>
                                        <td className='border'>
                                            <button onClick={() => handleButtonClick(row)} className='btn'>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(row)} className="btn text-white bg-[#23aade] rounded-lg hover:bg-transparent hover:border-red-600 hover:text-red-600">Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </table>



            {/* handle the edit */}
            <dialog id="my_modal_1" className="modal">
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
                <div className="modal-box bg-[#4898b8]">
                    <section className=" dark:text-gray-100  min-w-full pb-[30px]">
                        <form onSubmit={handleEdit} className="container w-full  p-3 pb-[10px] mx-auto bg-[#4898b8] space-y-6 rounded-md">
                            <h2 className="w-full text-center text-[40px] font-bold leadi text-gray-900">Update Food</h2>
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
                                <button type="submit" className="btn px-[60px] w-[200px] hover:w-[450px] transition-all hover:w-ful text-white bg-transparent rounded-lg hover:bg-[#23aade] hover:border-[#23aade] hover:text-white">Update Food info</button>
                            </div>
                        </form>

                        <div>
                            <form method="dialog" className="flex justify-center">
                                <button className="btn px-[60px] w-[200px] hover:w-[450px] transition-all hover:w-ful text-white bg-transparent rounded-lg hover:bg-[#23aade] hover:border-[#23aade] hover:text-white">close</button>
                            </form>
                        </div>

                    </section>
                </div>
            </dialog>

        </div>
    );
};

export default BasicTable;