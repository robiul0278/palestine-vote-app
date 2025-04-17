'use client';

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import VoteForm from "./VoteForm";

export default function VoteFormSection() {
  const announceRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(announceRef.current, {
      opacity: 0,
      x: -100,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(formRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <div
        ref={announceRef}
        className="bg-yellow-100 text-black p-6 rounded-lg shadow-md space-y-3 text-sm border-l-4 border-yellow-500 mb-6"
      >
        <h2 className="text-lg font-bold text-yellow-700">📢 ঘোষণা ও নিয়মাবলী</h2>
        <p>
          বাংলাদেশের সরকারের প্রধান উপদেষ্টা <strong>ড. মুহাম্মদ ইউনুস</strong> ফিলিস্তিনের প্রতি সংহতি প্রকাশ করে দেশের নাগরিকদের একটি অনলাইন সার্ভেতে অংশগ্রহণ করার আহ্বান জানিয়েছেন।
        </p>
        <p>
          আপনার মতামত জাতিসংঘের ডাটাবেজে জমা পড়বে, যা আন্তর্জাতিকভাবে উপস্থাপন করা হবে।
        </p>
        <ul className="list-disc list-inside ml-2">
          <li>একজন ব্যক্তি একবারই ভোট দিতে পারবে।</li>
          <li>ভোটে অংশ নিতে নাম ও বয়স বাধ্যতামূলক।</li>
          <li>আপনার তথ্য গোপন রাখা হবে।</li>
          <li>দয়া করে নিচের ফর্মটি পূরণ করে আপনার সমর্থন জানান।</li>
        </ul>
      </div>

      <div ref={formRef}>
        <VoteForm />
      </div>
    </>
  );
}
