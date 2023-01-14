import React, { useEffect, useState } from 'react';

const AllFarmers = () => {
    // Getting all farmers requests
    const [requests, setRequests] = useState([]);

      // console.log(allOrders)
      useEffect(() => {
        fetch('https://taja-jinis-server-side.vercel.app/farmerRequest')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setRequests(data);
            })
    }, [requests])

    // deleting requests
    const handleDelete = (_id) => {
        console.log(_id);
        // const confirm = window.confirm('Do you want to delete?')
        // if (confirm) {
            // const url = 'http://localhost:5000/farmerRequest/${_id}`;
            const url = `https://taja-jinis-server-side.vercel.app/farmerRequest/${_id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingRequests = requests.filter(request => request._id !== _id)
                        setRequests(remainingRequests);
                        
                    }
                })
        // }
    }

    // Updating status by function
    const handleUpdatedStatus = (_id) => {
        alert('updated');
        const url = `https://taja-jinis-server-side.vercel.app/farmerRequest/${_id}`;
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
                                        <th className="text-xs">serial</th>
                                        <th className="text-xs">Image</th>
                                        <th className="text-xs">Farmer Name</th>
                                        <th className="text-xs">Farmer email</th>
                                        <th className="text-xs">Address</th>
                                        <th className="text-xs">Bikash Number</th>
                                        <th className="text-xs">NID Number</th>
                                        <th className="text-xs">Delete</th>
                                        <th className="text-xs">Status</th>
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
                                        <td className="text-xs">{o.email}</td>
                                        <td className="text-xs">{o.name}</td>
                                        <td className="text-xs">{o.address}</td>
                                        <td className="text-xs">{o.bikashNumber}</td>
                                        <td className="text-xs">{o.nidNumber}</td>
                                        <th className="text-xs"><button class="btn btn-xs  bg-red-100 text-black hover:text-white"
                                                    onclick={() => handleDelete(o._id)}
                                        >Delete</button></th>
                                        <th>
                                            <button class="btn btn-xs  bg-green-100 text-black hover:text-white"
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