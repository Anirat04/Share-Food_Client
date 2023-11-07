/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import { ProviderContext } from '../Provider/Provider';
import Swal from 'sweetalert2';

const BasicTable = () => {
    const { user } = useContext(ProviderContext)
    const [fetchData, setFetchData] = useState([])
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

    // console.log(fetchData)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    console.log(headerGroups)
    console.log(rows)
    return (
        <div className='max-w-[1240px] mx-auto'>
            <table className='table' {...getTableProps()}>
                <thead className='text-center'>
                    {
                        headerGroups.map((headerGroup => (
                            <tr className='text-[20px]' {...headerGroup.getHeaderGroupProps()}>
                                <th>Food Img</th>
                                {
                                    headerGroup.headers.map((column) => (
                                        <>

                                            <th
                                                {...column.getHeaderProps()}
                                                >
                                                {column.render('Header')}
                                            </th>
                                        </>
                                    ))
                                }
                                <th>Manage</th>
                                <th>Edit</th>
                                <th>Delete</th>
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
                                        <td>
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
                                                return <td className='text-center' {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            })
                                        }
                                        <td>
                                            <button onClick={() => handleDelete(row)} className='btn'>edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(row)} className='btn'>edit</button>
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
        </div>
    );
};

export default BasicTable;