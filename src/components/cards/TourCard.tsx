import React, { useState } from 'react';
import Image from 'next/image';
import LeaderboardPopup from '../popups/Leaderboard';

type Props = {
  imageUrl: string;
  startDate: string;
  endDate: string;
  tournament: string;
  description: string;
  location: string;
  winner: string;
  prizeMoney: string;
  logoUrl: string;
};

const TourCard = ({ imageUrl, startDate, endDate, tournament, description, location, winner, prizeMoney, logoUrl }: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Parse the date string into a Date object
  const formattedStartDate = new Date(startDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const formattedEndDate = new Date(endDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <div className="container mx-auto my-8 max-w-screen-lg">
      <a onClick={togglePopup}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-md shadow-md relative">
          {/* Column 1 */}
          <div className="col-span-1 md:col-span-1 items-center justify-center overflow-hidden mx-auto">
            <Image
              src={imageUrl}
              alt="Blog Image"
              width={450}
              height={450}
              className="rounded-t-md hover:scale-125 transition-all duration-500 cursor-pointer w-full h-full object-cover"
            />
          </div>

          {/* Column 2 */}
          <div className="col-span-1 md:col-span-1 m-10">
            <div className="flex flex-col h-full">
              <div className="justify-center">
                <p className="text-gray-500">{formattedStartDate} - {formattedEndDate}</p>
              </div>

              <h1 className="text-2xl font-bold my-2 justify-center">{tournament}</h1>

              <p className="justify-center">
                <div className="inline-flex items-center text-md font-normal">{description}</div>
              </p>
              <p className="justify-center">
                <div className="inline-flex items-center text-xs font-normal">{location}</div>
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-span-1 md:col-span-1 m-10">
            <div className="flex flex-col h-full">
              <div className="justify-center">
                <p className="text-gray-500">Winner</p>
                <p className="inline-flex items-center text-sm font-normal">{winner}</p>
                <p className="text-gray-500">${prizeMoney}</p>
                <Image
              src={logoUrl}
              alt="Blog Image"
              width={450}
              height={450}
              className="w-28 h-28 mt-2"
            />
              </div>
            </div>
          </div>
        </div>
      </a>

      {isPopupOpen && (<LeaderboardPopup togglePopup={togglePopup}/>
      )}
    </div>
  );
};

export default TourCard;
