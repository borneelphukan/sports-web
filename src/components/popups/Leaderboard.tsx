import React from 'react';
import ToggleTabSwitch from '../ToggleSwitch';

interface PopupProps {
  togglePopup: () => void;
}

const LeaderboardPopup: React.FC<PopupProps> = ({ togglePopup }) => {
    const handleLeaderboardClick = () => {
    console.log('Leaderboard tab clicked');
    // Add your logic for handling the click event for the Leaderboard tab
  };

  const handleTeetimesClick = () => {
    console.log('Teetimes tab clicked');
    // Add your logic for handling the click event for the Teetimes tab
  };

  const [activeTab, setActiveTab] = React.useState<'leaderboard' | 'teetimes'>('leaderboard');

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md">
        <div className="my-5 flex justify-center">
          <ToggleTabSwitch
            onLeaderboardClick={() => {
              setActiveTab('leaderboard');
              handleLeaderboardClick();
            }}
            onTeetimesClick={() => {
              setActiveTab('teetimes');
              handleTeetimesClick();
            }}
          />
        </div>
        
        {activeTab === 'leaderboard' ? (
          <>
            <p className='text-xl font-bold mb-3'>Top 5 Leaderboard</p>
            <table className="w-full border-collapse border-t border-b border-l-0 border-r-0">
              <thead>
            <tr>
              <th className="border-r p-5"> # </th>
              <th className="border-r p-5"> Nationality </th>
              <th className="border-r p-5"> Player Name </th>
              <th className="border-r p-5"> Today </th>
              <th className="border-r p-5"> Thru </th>
              <th className="border-r p-5"> To Par </th>
              <th className="border-r p-5"> R1 </th>
              <th className="border-r p-5"> R2 </th>
              <th className="border-r p-5"> R3 </th>
              <th className="border-r p-5"> R4 </th>
              <th className="p-5"> Total </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border-r px-5"><strong>{index + 1}</strong></td>
                <td className="border-r px-5">🇺🇸</td>
                <td className="border-r px-5">Player Name</td>
                <td className="border-r px-5">Today</td>
                <td className="border-r px-5">Thru</td>
                <td className="border-r px-5">To Par</td>
                <td className="border-r px-5">R1</td>
                <td className="border-r px-5">R2</td>
                <td className="border-r px-5">R3</td>
                <td className="border-r px-5">R4</td>
                <td className="p-5">Total</td>
              </tr>
            ))}
          </tbody>
            </table>
            <p className='mt-3 text-sm'><a href='#'>Show full Leaderboard of the The Genesis Invitational 2024</a></p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-3xl" onClick={togglePopup}>
              Close
            </button>
          </>
        ) : (
        <><p className='text-xl font-bold mb-3'>Round 4</p><table className="w-full border-collapse border-t border-b border-l-0 border-r-0">
                          <thead>
                              <tr>
                                  <th className="border-r p-5"> # </th>
                                  <th className="border-r p-5"> Nationality </th>
                                  <th className="border-r p-5"> Player Name </th>
                                  <th className="border-r p-5"> Tee Time (local) </th>
                                  <th className="p-5"> Starting Tee </th>
                              </tr>
                          </thead>
                          <tbody>
                              {[...Array(5)].map((_, index) => (
                                  <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                                      <td className="border-r px-5"><strong>{index + 1}</strong></td>
                                      <td className="border-r px-5">🇺🇸</td>
                                      <td className="border-r px-5">Player Name</td>
                                      <td className="border-r px-5">10:00 AM</td>
                                      <td className="p-5">10</td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-3xl" onClick={togglePopup}>
              Close
            </button></>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPopup;
