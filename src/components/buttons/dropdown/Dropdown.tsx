import React, { useState } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, isOpen, onToggle, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

  React.useEffect(() => {
    if (!selectedOption && options.length > 0 && !placeholder) {
      setSelectedOption(options[0]);
    }
  }, [options, placeholder, selectedOption]);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    onSelect(option.value);
    onToggle();
  };

  return (
    <div className="relative inline-block text-left">
      <div className='m-2'>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-3xl border border-black px-5 py-2 text-sm font-medium text-gray-700 hover:bg-black hover:text-white relative z-10" // Adjusted z-index
          onClick={onToggle}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.293 13.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"> {/* Adjusted z-index */}
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
