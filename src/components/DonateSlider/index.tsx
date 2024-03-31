'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

export default function DonateSlider() {
  const [amount, setAmount] = useState(10);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setAmount(newValue);
  };

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    // Adjusting the slider to change the amount by 5 at the end
    if (newValue > 100) {
      setAmount(amount + 5);
    } else {
      setAmount(newValue);
    }
  };

  return (
    <div className="flex flex-col p-5 align-bottom">
      <span className="text-8xl font-anton text-center mb-2">
        {amount > 100 ? `${100}$+` : `${amount}$`}
      </span>
      <input
        type="range"
        className="range-slider mt-2"
        name="amount"
        min="10"
        max="105"
        step="5"
        value={amount}
        onChange={handleSliderChange}
        onMouseUp={handleChange}
      />
      <button className="bg-secondary mt-7 block w-fit px-24 py-1 rounded-xl font-anton text-4xl">
        <Link href={'/auth'}>Donate</Link>
      </button>
    </div>
  );
}
