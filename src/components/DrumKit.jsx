import React, { useEffect } from 'react';

const DrumKit = () => {

  useEffect(() => {
    const handleButtonClick = (key) => {
      makeSound(key);
      buttonAnimation(key);
    };

    const handleKeyPress = (event) => {
        console.log("hey")
      makeSound(event.key);
      buttonAnimation(event.key);
    };

    const makeSound = (key) => {
      // Update the switch cases based on your audio file naming convention
      // For example, if your audio files are named A.wav, B.wav, etc.
      // Use `key.toUpperCase() + ".wav"` to construct the filename.
    //   const audio = new Audio(`./sounds/${key.toUpperCase()}.wav`);
      const audio = new Audio(`./sounds/${key.toUpperCase()}.wav`);
      audio.play();
    };

    const buttonAnimation = (currentKey) => {
      const activeButton = document.querySelector(`.${currentKey}`);
      activeButton.classList.add("pressed");
      setTimeout(() => {
        activeButton.classList.remove("pressed");
      }, 100);
    };

    const drumButtons = document.querySelectorAll(".drum");
    drumButtons.forEach(button => {
      button.addEventListener("click", () => handleButtonClick(button.innerHTML));
    });

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      // Cleanup event listeners on component unmount
      drumButtons.forEach(button => {
        button.removeEventListener("click", () => handleButtonClick(button.innerHTML));
      });

      document.removeEventListener("keypress", handleKeyPress);
    };

  }, []);

  return (
    <div>
      <h1 id="title">Drum 🥁 Kit</h1>
      <div className="set">
        <button className="w drum">w</button>
        <button className="a drum">a</button>
        <button className="s drum">s</button>
        <button className="d drum">d</button>
        <button className="j drum">j</button>
        <button className="k drum">k</button>
        <button className="l drum">l</button>
      </div>
    </div>
  );
};

export default DrumKit;
