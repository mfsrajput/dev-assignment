"use client"; // Enable client-side rendering

import Navbar from '@/components/navBar';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer';

export default function Forms() {
  const router = useRouter();

  const GreetingClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent form submission
    router.push("/GreetingText"); // Navigate to the GreetingText page
  };

  return (

    <>
    <Navbar />
    <div className="text-center pt-10 mt-10">
      <h1 className="text-5xl font-bold">Enter Your Forms</h1>

      <div className="py-5">
        <form className="flex flex-col gap-5 justify-center items-center border">
          <input
            type="email"
            className="p-2 rounded-2xl border-b-8 w-2/5"
            name="Email"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="password"
            name="Password"
            placeholder="Enter Your Password"
            className="p-2 rounded-2xl border-b-8 w-2/5"
            required
          />
          <button
            type="submit"
            className="p-3 px-7 rounded-lg border-b-8 w-2/12"
            onClick={GreetingClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}
