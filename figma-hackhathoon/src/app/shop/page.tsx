import Link from 'next/link';
import HeroDefault from '@/components/HeroDefault';

// Sample product data (replace with actual static data or a larger array)
const products = [
  { id: 1, name: "Syltherine", price: "Rs. 2,500,000", description: "Stylish Sofa Chair", img: "/images/Syltherine.png" },
  { id: 2, name: "Leviosa", price: "Rs. 2,500.00", description: "Stylish Sofa Chair", img: "/images/Leviosa.png" },
  { id: 3, name: "Lolito", price: "Rs. 7,000.00", description: "Luxury Big Sofa", img: "/images/Lolito.png" },
  { id: 4, name: "Respira", price: "Rs. 500.00", description: "Minimal Stand", img: "/images/Respira.png" },
  { id: 5, name: "Grifo", price: "Rs. 500.00", description: "Minimal Stand", img: "/images/Grifo.png" },
  { id: 6, name: "Muggo", price: "Rs. 2500.00", description: "Small Mug", img: "/images/Muggo.png" },
  { id: 7, name: "Pingky", price: "Rs. 500.00", description: "Notebook", img: "/images/Pingky.png" },
  { id: 8, name: "Potty", price: "Rs. 500.00", description: "Potty", img: "/images/potty.png" },
  // Add more products as needed
];

export default function ShopPage() {
  return (
    <div>
      <HeroDefault link1="Home" link2="Shop" />
      <div className="p-8">
        <h1 className="text-3xl font-semibold text-center mb-8">Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
              <Link href={`/shop/${product.id}`} className="block">
                <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
              </Link>
              <div className="p-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-lg text-gray-500">{product.price}</p>
                <Link href={`/shop/${product.id}`} className="text-indigo-600 mt-4 inline-block">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
