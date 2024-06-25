import React, { useEffect, useState } from 'react';

const UserRepositories = ({ username }) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepositories = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepositories();
    }, [username]);

    if (loading) {
        return <div>Loading repositories...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!repos.length) {
        return <div>No repositories found.</div>;
    }

    return (
        <div className=' p-6'>
            <h2 className='text-xl font-bold mb-4 text-white'>Projects</h2>
            <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
                {repos.map(repo => (
                    <li key={repo.id} className='mb-4 p-4 bg-slate-100 border flex flex-col gap-4 rounded-md items-center justify-center hover:translate-y-4'>
                        <a href={repo.html_url} target='_blank' className='text-black font-medium'>
                            {repo.name}
                        </a>
                        <p className='text-lg'>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserRepositories;
