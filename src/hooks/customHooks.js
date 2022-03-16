import React, { useState, useEffect } from "react";

export function useWindowHeight () {
    const [ screenHeight, setScreenHeight ] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', setScreenHeight(window.innerHeight));
  }, [])
  return screenHeight;
}