import { useState } from 'react';

export default function GameProfile() {
  const [player, setPlayer] = useState({
    name: 'Alex',
    level: 3,
    points: 150,
  });

  const addRank = () => {
    setPlayer((prev) => {
      if ('rank' in prev) return prev;
      return {
        ...prev,
        rank: 'Beginner',
      };
    });
  };

  const deleteRank = () => {
    setPlayer((prev) => {
      const { rank, ...rest } = prev;
      return rest;
    });
  };

  return (
    <div>
      <h2>Player Profile</h2>

      <p>Name: {player.name}</p>
      <p>Level: {player.level}</p>
      <p>Points: {player.points}</p>
      {player.rank && <p>Rank: {player.rank}</p>}

      <button>Level Up</button>
      <button onClick={addRank}>Add Rank</button>
      <button onClick={deleteRank}>Reset Rank</button>
    </div>
  );
}
