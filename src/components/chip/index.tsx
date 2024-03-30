import React from 'react';

interface ChipProps {
  label: string;
  type?: 'filled' | 'gradient' | 'outlined' | 'ghost';
  size?: 'small' | 'medium' | 'large';
}

const Chip: React.FC<ChipProps> = ({
  label,
  type = 'fillesd',
  size = 'medium',
}) => {
  const getTypeClass = () => {
    switch (type) {
      case 'gradient':
        return 'bg-gradient-to-tr from-gray-900 to-gray-800';
      case 'outlined':
        return 'border border-gray-900 text-gray-700';
      case 'ghost':
        return 'bg-gray-900/10 text-gray-900';
      case 'filled':
      default:
        return 'bg-graydark';
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-1';
      case 'large':
        return 'px-4 py-2';
      case 'medium':
      default:
        return 'px-3 py-1.5';
    }
  };

  return (
    <div
      className={`relative grid select-none items-center whitespace-nowrap rounded-lg font-sans text-xs font-bold uppercase text-white ${getTypeClass()} ${getSizeClass()}`}
    >
      <span>{label}</span>
    </div>
  );
};

export default Chip;
