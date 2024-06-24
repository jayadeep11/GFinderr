import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const UserDetails = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchuserdata = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('user not found');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message)
      }
      finally {
        setLoading(false)
      }

    };
    fetchuserdata();


  }, [username])


  if (loading) {
    return <div>Loading user details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No user data available</div>;
  }
  const { avatar_url, name, bio, login, html_url } = userData;

  return (
    <>
      <div className='mx-auto container h-full bg-white'>
        <img src={avatar_url} alt={name} className='rounded-full w-32 h-32 mb-4' />
        <h1 className='text-xl font-bold'>{name}</h1>
        {/* <p className='text-gray-700'>{bio || 'No bio provided'}</p>
        <p className='text-gray-500'>Username: {login}</p> */}
        <button className='border hover:bg-black  text-center hover:text-white  border-gray-500 text-black font-normal  p-3  rounded-full'>
          <a href={html_url} className='text-[1rem]'>View in Github</a>
        </button>
        

      </div>
    </>
  )
}

export default UserDetails