import React, { useState } from 'react';
import Image from 'next/image';
import TravelAd from '../popups/TravelAd';

type Props = {
  imageUrl: string;
  author: string;
  title: string;
  description: string;
};

const AdCard = ({ imageUrl, author, title, description }: Props) => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative p-3">
      <div className="rounded-md shadow-md">
        {/* Main Image */}
        <div className="items-center justify-center overflow-hidden mx-auto" onClick={openPopup}>
          <Image
            src={imageUrl}
            alt="Blog Image"
            width={450}
            height={450}
            className="rounded-t-md hover:scale-125 transition-all duration-500 cursor-pointer w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col h-full pb-5">
          {/* Title */}
          <h1 className="text-normal font-bold mt-2 justify-center">{title}</h1>

          {/* Author */}
          <div className="justify-center">
            <p className="text-gray-500">{author}</p>
          </div>

          {/* Description */}
          <p className="justify-center">
            <div className="inline-flex items-center text-sm mb-2 font-normal">{description}</div>
          </p>
        </div>

        {/* Popup Window */}
        {showPopup && <TravelAd imageUrl={imageUrl} onClose={closePopup} />}
      </div>
    </div>
  );
};

export default AdCard;
