import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <header className="bg-gray-900 text-white mx-auto px-16">
        {/* Top Section */}
        <div className="flex justify-between py-2  text-sm ">
          <Link
            href="#"
            className="text-red-500 flex items-center gap-1 hover:underline"
          >
            <span>📱</span> Download App via SMS
          </Link>
          <div className="items-center space-x-4">
            <Link href="#" className="text-sm hover:text-red-500 ">
              اردو
            </Link>
            <Link href="#" className="text-sm hover:text-red-500 border-x px-2">
              Sign Up
            </Link>
            <Link href="#" className="text-sm hover:text-red-500">
              Sign In
            </Link>
          </div>
        </div>
        <div className="w-full border-b mx-auto"></div>

        {/* Main Navbar Section */}
        <div className="flex items-center justify-between  py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg"
              alt="Logo"
              className="h-8"
              width={149.73} // Set appropriate width
              height={40} // Set appropriate height
              priority // Optional: use this if you want to load the image eagerly
            />
          </Link>

          {/* Navbar Links */}
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="#" className="hover:text-red-500">
              Used Cars ▼
            </Link>
            <Link href="#" className="hover:text-red-500">
              New Cars ▼
            </Link>
            <Link href="#" className="hover:text-red-500">
              Bikes ▼
            </Link>
            <Link href="#" className="hover:text-red-500">
              Auto Store ▼
            </Link>
            <Link href="#" className="hover:text-red-500">
              Videos
            </Link>
            <Link href="#" className="hover:text-red-500">
              Forums
            </Link>
            <Link href="#" className="hover:text-red-500">
              Blog
            </Link>
            <Link
              href="#"
              className="flex items-center gap-1 hover:text-red-500"
            >
              More ▼{" "}
              <span className="text-xs bg-blue-600 px-1 py-0.5 rounded text-white">
                New
              </span>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500"
            >
              Post an Ad
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
