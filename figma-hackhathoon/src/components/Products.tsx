import Image from "next/image";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Syltherine", price: "Rs. 2,500,000", description: "Stylish Sofa Chair", img: "/images/Syltherine.png" },
  { id: 2, name: "Leviosa", price: "Rs. 2,500.00", description: "Stylish Sofa Chair", img: "/images/Leviosa.png" },
  { id: 3, name: "Lolito", price: "Rs. 7,000.00", description: "Luxury Big Sofa", img: "/images/Lolito.png" },
  { id: 4, name: "Respira", price: "Rs. 500.00", description: "Minimal Stand", img: "/images/Respira.png" },
  { id: 5, name: "Grifo", price: "Rs. 500.00", description: "Minimal Stand", img: "/images/Grifo.png" },
  { id: 6, name: "Muggo", price: "Rs. 2500.00", description: "Small Mug", img: "/images/Muggo.png" },
  { id: 7, name: "Pingky", price: "Rs. 500.00", description: "Notebook", img: "/images/Pingky.png" },
  { id: 8, name: "Potty", price: "Rs. 500.00", description: "Potty", img: "/images/potty.png" },
];

export function Products() {
  return (
    <section className="bg-[#F9F1E7] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
              {/* Image container with hover effect */}
              <div className="relative group">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                {/* Add to Cart Button */}
                <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
  bg-white text-[#B88E2F] border-2 border-[#B88E2F] 
  group-hover:bg-[#B88E2F] group-hover:text-white transition-all duration-300 rounded-lg text-center">
  Add to Cart
</Button>

              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-[#B88E2F] font-bold mb-4">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
