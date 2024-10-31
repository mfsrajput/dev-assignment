"use client"; // Add this directive at the top

import NavBar from "@/components/navBar";
import { useParams, useRouter } from "next/navigation"; // Import useRouter
import { cars } from "../../../components/CarData";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function CarDetail() {
  const { car } = useParams(); // Get the dynamic route parameter
  const router = useRouter(); // Initialize router for navigation
  const carDetails = cars.find((c) => c.route === car);

  // State declarations outside of conditionals
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false); // State for showing additional info
  const [showInitialDetails, setShowInitialDetails] = useState(true); // State for hiding initial details

  if (!carDetails) {
    return <p>Car not found</p>;
  }

  const handlePaymentClick = () => {
    setShowAdditionalInfo(true); // Show additional info when button is clicked
    setShowInitialDetails(false); // Hide initial details
  };

  const handleMakePaymentClick = () => {
    router.push("/Form"); // Navigate to the payment form page
  };

  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto m-1 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">
          {carDetails.name} 2024 Price in Pakistan, Image, Reviews & Specs
        </h1>
        <Image
          src={carDetails.imageUrl}
          alt={carDetails.name}
          width={600}
          height={400}
          className="w-1/3 object-cover rounded-lg"
        />

        {showInitialDetails && ( // Conditionally render initial details
          <div className="flex flex-col items-center">
            <p className="text-xl text-green-500 text-center">
              {carDetails.price}
            </p>
            <p className="mt-4 text-center">{carDetails.description}</p>
            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={handlePaymentClick}
            >
              Make Payment
            </button>
          </div>
        )}

        {/* Additional Info Section */}
        {showAdditionalInfo && ( // Conditionally render additional info
          <div className="mt-2">
            <div className="buttons flex justify-center space-x-4">
              <button className="px-4 py-2 bg-gray-300 rounded">
                Book a Test Drive
              </button>
              <button className="px-4 py-2 bg-gray-300 rounded">
                Request Bank Finance
              </button>
              <button className="px-4 py-2 bg-gray-300 rounded">
                Visit Place
              </button>
              <button className="px-4 py-2 bg-gray-300 rounded">
                Car Inspection
              </button>
            </div>
            <div className="vehicle-description mt-2">
              <h2 className="text-xl font-bold text-center">
                Vehicle Description
              </h2>
              <ul className="list-none flex flex-wrap justify-center space-x-4">
                <li className="flex items-center space-x-1 mt-2">
                  <span className="font-bold">Number of Doors:</span>
                  <span>{carDetails.numberOfDoors}</span>
                </li>
                <li className="flex items-center space-x-1 mt-2">
                  <span className="font-bold">Engine:</span>
                  <span>{carDetails.engine}</span>
                </li>
                <li className="flex items-center space-x-1 mt-2">
                  <span className="font-bold">Condition:</span>
                  <span>{carDetails.condition}</span>
                </li>
                <li className="flex items-center space-x-1 mt-2">
                  <span className="font-bold">Driven:</span>
                  <span>{carDetails.driven}</span>
                </li>
                <li className="flex items-center space-x-1 mt-2">
                  <span className="font-bold">Suspension Type:</span>
                  <span>{carDetails.suspensionType}</span>
                </li>
                <li className="flex items-center space-x-1 mt-2">
                  <span className="font-bold">Average:</span>
                  <span>{carDetails.average}</span>
                </li>
                <li className="flex items-center space-x-1 mt-2">
                  <span className="font-bold">Transmission:</span>
                  <span>{carDetails.transmission}</span>
                </li>
                <li className="flex items-center space-x-1 mt-2">
                  <span className="font-bold">Fuel Type:</span>
                  <span>{carDetails.fuelType}</span>
                </li>
              </ul>
            </div>
            <div className="price mt-4 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl text-green-500 font-bold">{carDetails.price}</h2>{" "}
              {/* Displaying price dynamically */}
              <button
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleMakePaymentClick}
              >
                Make Payment
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
