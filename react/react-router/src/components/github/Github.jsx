import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

const Github = () =>
{
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() =>
    // {
    //     fetch('https://api.github.com/users/prashantp2524')
    //         .then((res) => res.json())
    //         .then((data) =>
    //         {
    //             setData(data)
    //         })
    // }, [])
    return (
        <>
            <div className='text-center m-4 bg-gray-600 p-4 text-3x'>Github Followers:{data.followers}</div>

            <Outlet />
            <img src={data.avatar_url} alt="" />

        </>
    )
}

export default Github

export const githubInfoLoader = async () =>
{
    const response = await fetch('https://api.github.com/users/prashantp2524')
    return response.json()
}