import React from 'react';
import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  productName: string;
  price: string;
}

const ProductCard: React.FC<CardProps> = ({ imageUrl, productName, price }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden px-5 mx-1 my-1">
        <Image
            src={imageUrl}
            alt={productName}
            width={450}
            height={450}
            className="w-full h-64 object-cover object-center"
          />
      <div className="py-4 px-6">
        <p className="font-semibold text-gray-800">{productName}</p>
        <p className="text-gray-400">${price}</p>
        <button className="mt-2 bg-emerald-500 text-white font-semibold py-2 px-2 rounded-full">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
