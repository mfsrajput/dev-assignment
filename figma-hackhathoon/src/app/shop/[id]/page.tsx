'use client';

import { useParams } from 'next/navigation'; // To access dynamic parameters in the URL
import Image from "next/image";
import Link from "next/link";
import { Star } from 'lucide-react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductGallery from "@/components/ProductGallery";
import AddToCartForm from "@/components/AddToCartForm";
import HeroDefault from '@/components/HeroDefault';
import { CartProvider } from '@/components/CartProvider';

const products = [
  { id: '1', name: "Syltherine", price: "Rs. 2,500,000", description: "Stylish Sofa Chair", img: "/images/Syltherine.png" },
  { id: '2', name: "Leviosa", price: "Rs. 2,500.00", description: "Stylish Sofa Chair", img: "/images/Leviosa.png" },
  { id: '3', name: "Lolito", price: "Rs. 7,000.00", description: "Luxury Big Sofa", img: "/images/Lolito.png" },
  { id: '4', name: "Respira", price: "Rs. 500.00", description: "Minimal Stand", img: "/images/Respira.png" },
  { id: '5', name: "Grifo", price: "Rs. 500.00", description: "Minimal Stand", img: "/images/Grifo.png" },
  { id: '6', name: "Muggo", price: "Rs. 2500.00", description: "Small Mug", img: "/images/Muggo.png" },
  { id: '7', name: "Pingky", price: "Rs. 500.00", description: "Notebook", img: "/images/Pingky.png" },
  { id: '8', name: "Potty", price: "Rs. 500.00", description: "Potty", img: "/images/potty.png" },
];

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL params

  // Find the product from the static array using the ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <CartProvider>

    <div className="min-h-screen bg-white">
      <HeroDefault link1="Home" link2="Shop" />
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <ProductGallery />

          <div className="space-y-6">
            {/* Product Name */}
            <h1 className="text-3xl font-bold">{product.name}</h1>

            {/* Product Price */}
            <div className="text-2xl font-semibold">{product.price}</div>

            {/* Product Ratings */}
            <div className="flex items-center space-x-2">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <Star className="w-5 h-5 text-muted stroke-muted-foreground" />
              <span className="text-sm text-muted-foreground ml-2">5 Customer Reviews</span>
            </div>

            {/* Product Description */}
            <p className="text-muted-foreground">{product.description}</p>

            {/* Add to Cart Form */}
            <AddToCartForm />

            {/* Product Details */}
            <div className="border-t pt-6 space-y-2 text-sm">
              <div className="flex">
                <span className="w-24 text-muted-foreground">SKU:</span>
                <span>SS001</span>
              </div>
              <div className="flex">
                <span className="w-24 text-muted-foreground">Category:</span>
                <span>Sofas</span>
              </div>
              <div className="flex">
                <span className="w-24 text-muted-foreground">Tags:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="additional">Additional Information</TabsTrigger>
            <TabsTrigger value="reviews">Reviews (5)</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="prose max-w-none">
            <p>Product description...</p>
          </TabsContent>

          <TabsContent value="additional">Additional information content...</TabsContent>
          <TabsContent value="reviews">Reviews content...</TabsContent>
        </Tabs>
      </div>
    </div>
    </CartProvider>

  );
};

export default ProductDetail;
