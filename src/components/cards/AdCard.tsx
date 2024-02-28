import React from 'react';
import Image from 'next/image';
import Button from '../buttons/Button';

type Props = {
  imageUrl: string;
  author: string;
  title: string;
  description: string;
  link: string;
};

const AdCard = ({ imageUrl, author, title, description, link }: Props) => {
  return (
    <div className="p-3">
      <a href={link}>
        <div className="rounded-md shadow-md relative">
          {/* Main Image */}
          <div className="items-center justify-center overflow-hidden mx-auto">
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

              <Button
              bgColor="emerald-500"
              textColor="white"
              text="Book Now"
            />
            </div>

        </div>
      </a>
    </div>
  );
};

export default AdCard;
