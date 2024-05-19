import React from 'react'
import { Link } from 'react-router-dom';
const Profile = ({userData}) => {
    if (!userData) return null;

  const { avatar_url, name, login } = userData;

  return (
    <div className='mx-auto my-auto bg-white py-8 px-8 rounded-xl shadow-lg max-w-[70rem] flex flex-col gap-2 justify-between items-center flex-wrap mt-10'>
        <img src={userData.avatar_url} alt="" className='rounded-full w-20 h-20' />
        <div className="bio flex flex-col" >
            <h2 className='text-gray-800 font-bold text-center'>{userData.name}</h2>
            <h3 className='text-gray-500 font-semibold'>{userData.bio}</h3>
        </div>
        
        <Link to='/userdetails' className='mt-5 px-4 py-2 text-sm text-blue-800 font-semibold rounded-full border-2 hover:bg-blue-800  hover:text-white border-blue-800'>View profile</Link>
        
        
        {/* <input type="submit" value= "View Profile" className='mt-3 px-4 py-2 text-sm text-blue-800 font-semibold rounded-full border-2 hover:bg-blue-800  hover:text-white border-blue-800'/> */}
    </div>
  )
}

export default Profile