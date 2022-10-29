import React from 'react';
import useUser from '../../hooks/useUser';
import userImage from '../../assets/user.png'

const AllUsers = () => {
    const users = useUser();
    // console.log(users[1]);
    return (
        <div>
            <div className='  mx-10 '>
                        <div class="overflow-x-auto w-full">
                            <table class="table w-full ">
                                <thead>
                                    <tr>
                                        <th>serial</th>
                                        <th>Image</th>
                                        <th> Name</th>
                                        <th>Role</th>
                                        <th>email</th>
                                        {/* <th>Total Quantity</th> */}
                                        <th>Mobile</th>
                                        <th>Button</th>
                                        <th>Button</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {
                                    users[1].map((o ,index) => 
                                        <tr>
                                        <th>{index + 1 } </th>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                    <img className='w-80 h-80' src={userImage} alt="Shoes" />
                                                        <img src={o.productImage} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{o.name}</td>
                                        <td>{o.role}</td>
                                        <td>{o.email}</td>
                                        <td>{o.mobile}</td>
                                        <th><button  class="btn btn-sm  bg-red-100 text-black hover:text-white">Delete</button></th>
                                        <th><button  class="btn btn-sm  bg-green-100 text-black hover:text-white">make admin</button></th>
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

export default AllUsers;