import Link from "next/link"
import Image from "next/image"
import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import LogoImg from "../../public/images/Meubel House_Logos-05.png"


export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src={LogoImg} alt="Furniro" width={50} height={30} />
            <span className="text-[#B88E2F] text-2xl font-semibold">Furniro</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-[#B88E2F]">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium hover:text-[#B88E2F]">
              Shop
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-[#B88E2F]">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-[#B88E2F]">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-[#B88E2F]">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-[#B88E2F]">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-[#B88E2F]">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-[#B88E2F]">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

