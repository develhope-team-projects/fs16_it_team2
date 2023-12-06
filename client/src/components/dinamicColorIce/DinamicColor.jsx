import React, { useEffect, useState } from "react";

const DinamicColor = ({ children }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "#f984ef",
    "#cc00ff",
    "#bd33a4",
    "#800080",
    "#663399",
    "#4b0082",
    "#483d8b",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 800); // Cambia il colore ogni secondo (1000 millisecondi)

    return () => clearInterval(intervalId); // Pulisce l'intervallo quando il componente viene smontato
  }, [colors.length]);

  const currentColor = colors[colorIndex];

  // Clona il componente figlio e applica il colore dinamico come stile
  const childWithColor = React.cloneElement(children, {
    style: { color: currentColor },
  });

  return <>{childWithColor}</>;
};

export default DinamicColor;
