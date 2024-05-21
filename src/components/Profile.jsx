import React from 'react'
import { Link } from 'react-router-dom';
const Profile = ({ userData }) => {
    if (!userData) return null;

    const { avatar_url, name, login } = userData;

    return (
        <div className='bg-transparent border rounded-xl px-10 py-5'>
            <div className='lg:w-1/2 w-full bg-transparent'>
                <img src={userData.avatar_url} alt="" className=' rounded-full ' />
            </div>
            <div className="bio flex flex-col  bg-transparent items-center justify-center gap-2  w-full  lg:w-1/2" >
                <h2 className='text-gray-800 font-bold text-sm text-center'>{userData.name}</h2>
                <h3 className='text-gray-500 font-semibold'>{userData.bio}</h3>
                <Link to='/userdetails' className='border border-gray-500 text-white p-2 rounded-xl'>View profile</Link>
            </div>
            {/* <input type="" value= "View Profile" className='mt-3 px-4 py-2 text-sm text-blue-800 font-semibold rounded-full border-2 hover:bg-blue-800  hover:text-white border-blue-800'/> */}
        </div>
    )
}

export default Profile
