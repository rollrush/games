import React from "react";

interface GameCardProps {
  className?: string;
  gameTitle: string;
  gameImage: string;
}

const GameCard: React.FC<GameCardProps> = ({
  className = "",
  gameTitle,
  gameImage,
}) => {
  return (
    <div
      className={`${className} flex flex-col items-center p-4 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 mb-6`}
    >
      <img
        src={gameImage}
        width={120}
        height={120}
        alt={gameTitle}
        className="rounded-xl"
      />

      <div className="flex-1 text-center">
        <h6 className="mb-1 font-semibold text-base">{gameTitle}</h6>
      </div>
    </div>
  );
};

export default GameCard;
