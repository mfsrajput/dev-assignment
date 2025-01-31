// ProductDetail
'use client';

import { Product } from '../../types/products';
import { urlFor } from '@/sanity/lib/image';
import AddToCartForm from '@/components/AddToCartForm';
import HeroDefault from '@/components/HeroDefault';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  console.log('Product Image:', product.productImage);
  const productImageUrl = product.productImage?.asset?._ref
    ? urlFor(product.productImage).url()
    : '/placeholder-image.png';
    console.log('Product Image URL:', productImageUrl); 
  

  return (
    <div>
      <HeroDefault link1="Home" link2="Shop" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Gallery */}
          <div className="aspect-square relative overflow-hidden rounded-xl bg-muted">
            <img
              src={productImageUrl}
              alt={product.title || 'Product Image'}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-6">
            {/* Product Name */}
            <h1 className="text-3xl font-bold">{product.title}</h1>

            {/* Product Price */}
            <div className="text-2xl font-semibold">${product.price}</div>

            {/* Product Tags */}
            <div className="flex items-center space-x-2 text-sm">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Product Description */}
            <p className="text-muted-foreground">{product.description}</p>

            {/* Add to Cart Form */}
            <AddToCartForm productId={product._id}
            name={product.title}
            price={product.price}
             image={productImageUrl} />

            {/* Product Details */}
            <div className="border-t pt-6 space-y-2 text-sm">
              <div className="flex">
                <span className="w-24 text-muted-foreground">SKU:</span>
                <span>{product._id}</span>
              </div>
              <div className="flex">
                <span className="w-24 text-muted-foreground">Tags:</span>
                <span>{product.tags.join(', ') || 'None'}</span>
              </div>
              <div className="flex">
                <span className="w-24 text-muted-foreground">Status:</span>
                <span>{product.isNew ? 'New' : 'Regular'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
