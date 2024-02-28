import React from 'react';
import PopupCarousel from '../carousel/PopupCarousel';

type PopupWindowProps = {
  imageUrl: string;
  onClose: () => void;
};

const TravelAd: React.FC<PopupWindowProps> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-md shadow-lg w-[50%] h-[60%]">
        <PopupCarousel/>
        <h2 className="text-lg font-bold mb-5">Brilliant Golf Resort In The Thracian Cliffs</h2>
        <p className="text-gray-700 text-left mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra tempus urna, vel porttitor est
          congue eget. Maecenas condimentum efficitur justo in sagittis. Etiam eget quam a velit vestibulum sodales
          sodales quis diam.
        </p>
        <p className="text-gray-700 text-left">
          Donec consequat pulvinar nunc, ultrices ullamcorper arcu egestas at. Vestibulum a leo ac nisi pellentesque
          consequat eget egestas augue. Nunc purus ipsum, suscipit at nulla quis, tincidunt suscipit massa. Donec in
          sapien odio.
        </p>
        <div className="flex mt-3">
          <button
            className="mt-4 mr-2 px-4 py-2 bg-emerald-500 text-white rounded-3xl"
            onClick={() => window.open('https://borneelphukan.com', '_blank')}
          >
            Book Now
          </button>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-3xl" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelAd;
