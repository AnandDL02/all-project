import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const AdvancedHeadlineEffect = () => {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 75,
    });

    typewriter
      .typeString("A Developer.")
      .pauseFor(100)
      .deleteAll()
      .typeString("A Professional Coder.")
      .pauseFor(100)
      .start();
  }, []);

  return <div ref={typewriterRef} style={{ fontSize: "3rem", textAlign: "start"  }} />;
};

export default AdvancedHeadlineEffect;
