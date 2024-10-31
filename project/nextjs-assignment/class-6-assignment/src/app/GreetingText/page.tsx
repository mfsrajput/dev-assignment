// src/app/GreetingText/page.tsx

"use client"; // Ensure this is at the top for client-side rendering

import Head from "next/head";

export default function GreetingText() {
  return (

    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <Head>
      <title>Thank You</title>
    </Head>
    <div className="text-center bg-white p-10 rounded shadow h-screen w-full flex items-center justify-center"> {/* Full height and width */}
      <div>
        <h1 className="text-6xl font-bold text-blue-500 mb-4">
          Thank you for shopping!!!
        </h1>
        <p className="text-lg">
          Your order will be delivered in 3 business days.
        </p>
      </div>
    </div>
  </div>
  );
}
