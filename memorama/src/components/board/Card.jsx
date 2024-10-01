import React from "react";

function Card({ card, handleClick }) {

  return (
    <div
      className={`drop-shadow-lg flex items-center ${
        card.flipped ? "[transform: rotateY(10deg)]" : "bg-gray-100"
      } justify-center cursor-pointer h-16 w-16 hover:scale-105 rounded-xl transition-all duration-500`}
      onClick={() => handleClick(card.id)}
    >
      <div>
        <img
          src={card.url}
          alt={card.alt}
          className={`h-16 rounded-xl transition-all duration-500 ${
            !card.flipped
              ? "[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-700"
              : ""
          }`}
        />
      </div>
    </div>
  );
}

export default Card;
