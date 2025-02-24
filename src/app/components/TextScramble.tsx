import React, { useState, useEffect, useRef } from 'react';

const TextScramble = ({
  text,
  duration = 1000, // total time in ms for the scramble effect
  delay = 0,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-='
}) => {
  const [displayedText, setDisplayedText] = useState(text);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    let timeoutId;

    const scramble = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Calculate how many characters should be revealed based on progress
      const revealCount = Math.floor(progress * text.length);
      const newText = text
        .split('')
        .map((letter, index) =>
          index < revealCount
            ? letter
            : characters[Math.floor(Math.random() * characters.length)]
        )
        .join('');

      setDisplayedText(newText);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(scramble);
      }
    };

    const startAnimation = () => {
      startTimeRef.current = null; // reset for each run
      animationFrameRef.current = requestAnimationFrame(scramble);
    };

    if (delay) {
      timeoutId = setTimeout(startAnimation, delay);
    } else {
      startAnimation();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [text, duration, delay, characters]);

  return <span>{displayedText}</span>;
};

export default TextScramble;
