import { useState } from "react";

const Player = (props) => {
  const { initialName, symbol, isActive } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        type="text"
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
