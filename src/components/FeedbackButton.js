import React from 'react';
import { NEUTRAL,GOOD,BAD } from '../constants/constant';
export function FeedbackButton({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        onClick={onGoodClick}
      >
        {GOOD}
      </button>
      <button
        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded"
        onClick={onNeutralClick}
      >
        {NEUTRAL}
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
        onClick={onBadClick}
      >
        {NEUTRAL}
      </button>
    </div>
  );
}
