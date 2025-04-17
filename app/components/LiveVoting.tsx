"use client";

import Image from 'next/image'
import React from 'react'
import { useGetVotesQuery } from '../redux/api/api';

const LiveVoting = () => {
    const { data } = useGetVotesQuery(undefined, {
        pollingInterval: 3000, // 3 seconds
      });
    return (
        <div>
            <h1 className="text-2xl pt-5 pb-2 font-semibold text-[#1a7034] text-center">লাইভ ভোটিং চলছে</h1>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-5">
                <div className="border border-green-400 p-4 rounded-lg flex flex-col items-center justify-around bg-white text-black shadow-sm">
                    <Image
                        src="https://flagcdn.com/w320/ps.png"
                        width={80}
                        height={80}
                        alt="Palestine"
                        className="mb-2 rounded"
                    />
                    <p>সমর্থনকারী সংখ্যা: <strong>{data?.counts.Palestine}</strong></p>
                </div>
                <div className="border border-red-400 p-4 rounded-lg flex flex-col items-center justify-around bg-white text-black shadow-sm">
                    <Image
                        src="https://clipart-library.com/new_gallery/51-515337_x-mark-png-png-download-transparent-background-red.png"
                        width={80}
                        height={80}
                        alt="Israel"
                        className="mb-2 rounded"
                    />
                    <p>অসমর্থনকারী সংখ্যা: <strong>{data?.counts.Neutral}</strong></p>
                </div>
                <div className="border border-red-400 p-4 rounded-lg flex flex-col items-center justify-around bg-white text-black shadow-sm">
                    <Image
                        src="https://flagcdn.com/w320/il.png"
                        width={80}
                        height={80}
                        alt="Israel"
                        className="mb-2 rounded"
                    />
                    <p>সমর্থনকারী সংখ্যা: <strong>{data?.counts.Israel}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default LiveVoting