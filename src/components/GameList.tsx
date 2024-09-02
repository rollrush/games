import GameCard from "./GameCard";

const GameList = () => {
  const games = [
    {
      title: "Game Title 1",
      image: "path/to/game1.jpg",
      releaseDate: "Released: Jan 1, 2024",
      description: "This is a brief description of Game 1.",
    },
    {
      title: "Game Title 2",
      image: "path/to/game2.jpg",
      releaseDate: "Released: Feb 15, 2024",
      description: "This is a brief description of Game 2.",
    },
    {
      title: "Game Title 3",
      image: "path/to/game3.jpg",
      releaseDate: "Released: Mar 30, 2024",
      description: "This is a brief description of Game 3.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:gap-6">
      {games.map((game, index) => (
        <GameCard
          key={index}
          className="w-full lg:w-1/3 mb-6 lg:mb-0"
          gameTitle={game.title}
          gameImage={game.image}
        />
      ))}
    </div>
  );
};

export default GameList;
