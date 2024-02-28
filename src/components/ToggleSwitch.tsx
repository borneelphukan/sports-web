import React, { useState } from 'react';

interface TabSwitchProps {
  onLeaderboardClick: () => void;
  onTeetimesClick: () => void;
}

const ToggleTabSwitch: React.FC<TabSwitchProps> = ({ onLeaderboardClick, onTeetimesClick }) => {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'teetimes'>('leaderboard');

  const handleTabClick = (tab: 'leaderboard' | 'teetimes') => {
    setActiveTab(tab);
    if (tab === 'leaderboard') {
      onLeaderboardClick();
    } else {
      onTeetimesClick();
    }
  };

  return (
    <div className="flex items-center justify-between w-full max-w-xs p-2 bg-gray-200 rounded-full">
      <button
        className={`py-1 px-4 rounded-full ${
          activeTab === 'leaderboard' ? 'bg-emerald-500 text-white' : 'text-gray-700'
        }`}
        onClick={() => handleTabClick('leaderboard')}
      >
        Leaderboard
      </button>
      <button
        className={`py-1 px-4 rounded-full ${
          activeTab === 'teetimes' ? 'bg-emerald-500 text-white' : 'text-gray-700'
        }`}
        onClick={() => handleTabClick('teetimes')}
      >
        Teetimes
      </button>
    </div>
  );
};

export default ToggleTabSwitch;
