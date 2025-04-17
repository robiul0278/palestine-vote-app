"use client";

import Image from 'next/image';
import { useGetVotesQuery } from '../redux/api/api';
import { motion } from 'framer-motion';

type Vote = {
    name: string;
    age: number;
    vote: string;
};


const LiveVoting = () => {
    const { data } = useGetVotesQuery(undefined, {
        pollingInterval: 3000, // 3 seconds
    });

    console.log(data?.data);


    return (
        <div className="relative overflow-hidden">
            <div className="relative overflow-hidden bg-[#f0fdf4] border-b border-green-300 py-2 px-4 flex items-center gap-2">
                {/* Static Fixed Label */}
                <span className="text-green-700 font-semibold whitespace-nowrap shrink-0">
                    সর্বশেষ ভোট দিয়েছেন:
                </span>

                {/* Marquee Text */}
                <div className="overflow-hidden w-full">
                    <motion.div
                        className="whitespace-nowrap inline-block text-green-800 font-medium"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: 'linear'
                        }}
                    >
                        {
                            data?.data.slice(0,2).map((item: Vote, index: number) => (
                                <span key={index} className="inline-flex items-center text-sm">
                                    <span className="mx-3">নাম: {item.name}</span>
                                    <span className="mx-3">বয়স: {item.age}</span>
                                    <span className="mx-3">সমর্থন করেছেন: {item.vote} |</span>
                                </span>
                            ))
                        }

                    </motion.div>
                </div>

            </div>


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
                        alt="Neutral"
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
    );
};

export default LiveVoting;
