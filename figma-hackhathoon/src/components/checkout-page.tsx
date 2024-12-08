'use client'

import Link from "next/link"
import { Heart, Search, ShoppingCart, User } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "./header"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
    

      {/* Page Title */}
      <div className="bg-[#F9F1E7] py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Checkout</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="text-gray-600">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span>Checkout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Billing Details */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Billing details</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name (Optional)</Label>
                <Input id="company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country / Region</Label>
                <Select defaultValue="sri-lanka">
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="pakistan">Pakistan</SelectItem>
                    <SelectItem value="bangladesh">Bangladesh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-[#F9F1E7] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-8">Product</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b">
                <div className="flex items-center gap-2">
                  <span>Asgaard sofa</span>
                  <span className="text-gray-500">x 1</span>
                </div>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center pb-4 text-lg font-bold">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
              
              {/* Payment Methods */}
              <div className="pt-4">
                <RadioGroup defaultValue="bank-transfer">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label htmlFor="bank-transfer">Direct Bank Transfer</Label>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 pl-6">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </div>
                </RadioGroup>
              </div>

              <button className="w-full bg-[#B88E2F] text-white py-4 rounded-lg mt-8 hover:bg-[#9A7625] transition-colors">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

