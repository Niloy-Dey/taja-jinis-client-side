import React, { useEffect, useState } from 'react';

const AllFarmers = () => {
    // Getting all farmers requests
    const [requests, setRequests] = useState([]);

      // console.log(allOrders)
      useEffect(() => {
        fetch('https://taja-jinis.herokuapp.com/farmerRequest')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRequests(data);
            })
    }, [requests])

    // deleting requests
    const handleDelete = (_id) => {
        // const confirm = window.confirm('Do you want to delete?')
        // if (confirm) {
            const url = `http://localhost:5000/farmerRequest/${_id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted seccessfully');
                        const remainingRequests = requests.filter(request => request._id !== _id)
                        setRequests(remainingRequests);
                    }
                })
        // }
    }

    // Updating status by function
    const handleUpdatedStatus = (_id) => {
        alert('updated');
        const url = `https://taja-jinis.herokuapp.com/${_id}`;
        const updatedStatus = 'accepted';
        const updatedFarmer = { status: updatedStatus }
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFarmer)
        })
    }

    return (
        <div>
            <div className='mt-10  mx-10 '>
                        <div class="overflow-x-auto w-full">
                            <table class="table w-full ">
                                <thead>
                                    <tr>
                                        <th>serial</th>
                                        <th>Image</th>
                                        <th>Farmer Name</th>
                                        <th>Farmer email</th>
                                        <th>Address</th>
                                        <th>Bikash Number</th>
                                        <th>NID Number</th>
                                        <th>Delete</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {
                                    requests.map((o, index) => 
                                        <tr>
                                        <th>{index + 1 } </th>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src={o.photo} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{o.name}</td>
                                        <td>{o.email}</td>
                                        <td>{o.address}</td>
                                        <td>{o.bikashNumber}</td>
                                        <td>{o.nidNumber}</td>
                                        <th><button class="btn btn-sm  bg-red-100 text-black hover:text-white"
                                                    onclick={() => handleDelete(o._id)}
                                        >Delete</button></th>
                                        <th>
                                            <button class="btn btn-sm  bg-green-100 text-black hover:text-white"
                                                    onClick={() => handleUpdatedStatus(o._id)}
                                            >{o.status}</button>
                                        </th>
                                    </tr>
                                    )
                                }
                             </tbody>
                            </table>
                        </div>
                    </div>
        </div>
    );
};

export default AllFarmers;