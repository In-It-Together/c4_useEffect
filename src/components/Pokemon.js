import React, { useState } from "react";
import "./Pokemon.scss";

const Pokemon = ({ sprite }) => {
  const [isDancing, setIsDancing] = useState(false);
  const [offset, setOffset] = useState({
    vertical: `${Math.random() * Math.floor(150)}px`,
    horizontal: `${Math.random() * Math.floor(1200)}px`
  });
  const dancingStyle = {
    animation: `jumpAround ${Math.random(2)}s infinite`,
    animationDirection: `alternate-reverse`,
    zIndex: 1
  };
  return (
    <div onClick={() => setIsDancing(true)}>
      <img
        className={Math.random() > 0.5 ? "spriteEnterRight" : "spriteEnterLeft"}
        style={{
          height: `200px`,
          width: `auto`,
          position: `absolute`,
          bottom: offset.vertical,
          left: offset.horizontal,
          zIndex: 2,
          ...(isDancing ? dancingStyle : null)
        }}
        src={sprite}
        alt="unfound"
      />
    </div>
  );
};

export default Pokemon;
