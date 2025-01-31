import Image from "next/image";
import heroImg from "../../public/images/HeroImg.png";
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 py-16 flex items-center">
        <div className="bg-[#FFF3e3] p-8 max-w-md ml-auto rounded-lg mr-10">
        <p className="text-gray-800 mb-2">
            New Arrival.
          </p>
          <h1 className="text-5xl font-bold text-[#B88E2F] mb-4">Discover Our New Collection</h1>
          <p className="text-gray-600 mb-8">
            Discover a wide range of stylish furniture to transform your living spaces.
          </p>
          <Link  href = {'/shop'}>
          <button className="bg-[#B88E2F] text-white py-3 px-6 rounded-lg hover:bg-[#9A7625]">
            Buy Now
          </button></Link>
        </div>
      </div>
      <div className="absolute inset-0 z-[-1]">
      
        <Image src={heroImg} alt="Hero Image" layout="fill" objectFit="cover" />
      </div>
    </section>
  );
}
