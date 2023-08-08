import React from 'react';

type ThemeToggleProps = {
  onClick: () => void;
import React from 'react';

type ThemeToggleProps = {
  onClick: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Toggle Theme</button>
  );
};

export default ThemeToggle;