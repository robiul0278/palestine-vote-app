"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useAddVoteMutation } from "../redux/api/api";

interface FormData {
  name: string;
  age: number;
  vote: string;
}

export default function VoteForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [addVote, { isLoading }] = useAddVoteMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await addVote(data).unwrap();
      if (result?.status === true) {
        toast.success("আপনার ভোট গ্রহণ করা হয়েছে!💚");
        reset();
      }
    } catch (error) {
      toast.error("ভোট দিতে সমস্যা হয়েছে!❌");
      console.error("Vote submission error:", error);
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <h1 className="font-semibold text-[#1a7034]">ভোট দিন</h1>

        <input
          {...register("name")}
          placeholder="নাম"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          {...register("age")}
          placeholder="বয়স"
          type="number"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />

        <div className="grid grid-cols-3 gap-4">
          <label className="cursor-pointer">
            <input
              type="radio"
              value="Palestine"
              {...register("vote")}
              className="peer hidden"
            />
            <div className="border p-3 rounded-lg flex justify-center items-center flex-col hover:shadow-md transition-all peer-checked:border-green-600 peer-checked:ring-2 peer-checked:ring-green-500">
              <Image src="https://flagcdn.com/w320/ps.png" width={50} height={50} alt="Palestine" />
            </div>
          </label>

          <label className="cursor-pointer">
            <input
              type="radio"
              value="Neutral"
              {...register("vote")}
              className="peer hidden"
            />
            <div className="border p-2 rounded-lg flex justify-center items-center hover:shadow-md transition-all peer-checked:border-yellow-500 peer-checked:ring-2 peer-checked:ring-yellow-300 text-3xl">
              😐
            </div>
          </label>

          <label className="cursor-pointer">
            <input
              type="radio"
              value="Israel"
              {...register("vote")}
              className="peer hidden"
            />
            <div className="border p-2 rounded-lg flex justify-center items-center flex-col hover:shadow-md transition-all peer-checked:border-red-600 peer-checked:ring-2 peer-checked:ring-red-400">
              <Image src="https://flagcdn.com/w320/il.png" width={50} height={50} alt="Israel" />
            </div>
          </label>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full cursor-pointer bg-green-700 hover:bg-green-800 transition-colors text-white font-semibold py-2 rounded-lg"
        >
          {isLoading ? "ভোট দিচ্ছে..." : "ভোট জমা দিন"}
        </button>
      </form>
    </div>
  );
}
