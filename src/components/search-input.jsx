import React, { useState } from "react";
import { SearchIcon } from "@primer/octicons-react";
import { Spinner } from "@primer/react";

const UserSearch = ({ user }) => {

  const [username, setUsername] = useState(user);
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className='w-96'>
      <div className="relative p-6 flex-auto">
        <label className="block text-white text-sm font-bold mb-1" htmlFor="username">
          GitHub username
        </label>
        <div className="flex justify-end items-center relative">
          <input
            placeholder="Search GitHub"
            type="text"
            className="border border-gray-400 rounded-lg p-4 w-full"
            value={username}
            onChange={handleUsernameChange}
          />
          <span className="absolute mr-2 w-10 cursor-pointer" onClick={() => setLoading(true)} >
            {loading ? <Spinner /> : <SearchIcon size={32} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserSearch;
