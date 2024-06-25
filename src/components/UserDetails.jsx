// import { repos } from '@primer/react/lib-esm/DataTable/storybook/data';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import UserRepositories from './UserRepositories';

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
  const { avatar_url, name, bio, login, html_url, followers, following } = userData;

  return (
    <div className='lg:p-10 p-5'>
      <div className='text-white flex flex-col gap-5 items-center justify-center p-5'>
        <img src={avatar_url} alt={name} className='rounded-full w-32 h-32 mb-4' />
        <h1 className='text-xl text-center font-bold'>{name}</h1>
        <p className='text-sm font-[400]'>Username: {login}</p>
        <p className='text-white text-lg font-normal opacity-50'>{bio || 'No bio provided'}</p>

        <div className='flex gap-8 text-white font-normal'>
          <p className='text-white font-normal'>Followers: {followers}</p>
          <p>Following: {following}</p>
        </div>

        <button className='border hover:bg-white  text-center hover:text-black  border-gray-500  font-medium  p-3  rounded-full text-gray-300 w-[9rem] h-16'>
          <a href={html_url} className='text-[1rem]'>View in Github</a>
        </button>
      </div>


      <div className='lg:p-3'>
        <UserRepositories username={username} />
      </div>

    </div>
  )
}

export default UserDetails
