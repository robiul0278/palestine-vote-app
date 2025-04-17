import React from "react";
import LiveVoting from "../components/LiveVoting";
import VoteFormSection from "../components/VoteFormSection"; // client component

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center">
      <div className="bg-[#1a7034] p-5 text-center">
        <h1 className="max-w-3xl mx-auto text-2xl md:text-3xl font-bold mb-2">
          ফিলিস্তিন বিষয়ে বাংলাদেশের জাতীয় পর্যায়ের জনমত
        </h1>
        <p className="text-sm">সরকার অনুমোদিত অনলাইন ভোটিং সিস্টেম</p>
      </div>

      <div className="w-full max-w-3xl mx-auto space-y-4 px-4">
        <LiveVoting />
        <VoteFormSection />
        <p className="text-center text-gray-400 pb-5 text-sm mt-6">
          © ২০২৫ বাংলাদেশ সরকার। সকল অধিকার সংরক্ষিত।
        </p>
      </div>
    </div>
  );
}
