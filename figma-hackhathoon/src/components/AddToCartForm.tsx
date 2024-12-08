'use client'; 

import { useState } from "react"
import { Heart, Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/CartProvider"



export default function AddToCartForm() {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState("M")
  const [color, setColor] = useState("purple")
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: "asgaard-sofa",
        name: "Asgaard Sofa",
        price: 250000,
        quantity,
        size,
        color,
        image: "/images/potty.png", // Update with actual product image URL
      },
    })
  }

  // Disabled button condition
  const isAddToCartDisabled = !size || !color;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        {/* Size Selector */}
        <div>
          <Label htmlFor="size" className="text-base">Size</Label>
          <RadioGroup
            value={size}
            onValueChange={setSize}
            className="flex items-center gap-2 mt-2"
          >
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <Label
                key={s}
                htmlFor={`size-${s}`}
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id={`size-${s}`} value={s} />
                {s}
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Color Selector */}
        <div>
          <Label htmlFor="color" className="text-base">Color</Label>
          <RadioGroup
            value={color}
            onValueChange={setColor}
            className="flex items-center gap-2 mt-2"
          >
            {["purple", "black", "brown"].map((colorOption) => (
              <Label
                key={colorOption}
                htmlFor={`color-${colorOption}`}
                className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
              >
                <RadioGroupItem id={`color-${colorOption}`} value={colorOption} />
                <span className={`w-4 h-4 rounded-full bg-${colorOption === 'purple' ? 'purple-500' : colorOption === 'black' ? 'black' : 'amber-800'}`} />
              </Label>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* Quantity & Add to Cart Section */}
      <div className="flex items-center space-x-4">
        {/* Quantity Controls */}
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-12 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className="flex-1"
          disabled={isAddToCartDisabled}
        >
          Add To Cart
        </Button>

        {/* Wishlist Button */}
        <Button variant="outline" size="sm">
          <Heart className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
