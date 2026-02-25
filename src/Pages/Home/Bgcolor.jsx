import React from 'react';

const Bgcolor = () => {
  return (
    <div className="relative w-full h-24 overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 animate-gradient-x hover:scale-105 transition-transform duration-700 ease-in-out shadow-xl ">
      {/* Optional overlay for extra depth */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Subtle animated shine effect */}
      <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine"></div>
    </div>
  );
};

export default Bgcolor;