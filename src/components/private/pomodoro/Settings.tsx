import React from 'react';

interface Props {
  setIsBreak: React.Dispatch<React.SetStateAction<boolean>>;
  setSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
}

export default function Settings({ setIsBreak, setSecondsLeft }: Props) {
  const switchMode = () => {
    setIsBreak((prev) => {
      const next = !prev;
      setSecondsLeft(next ? 5 * 60 : 25 * 60);
      return next;
    });
  };

  return (
    <div className="mt-6">
      <button onClick={switchMode} className="btn-nav">
        Switch Mode
      </button>
    </div>
  );
}
