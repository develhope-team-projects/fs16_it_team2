import React, { useEffect, useState } from "react";

const DinamicColorLight = ({ children }) => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "#ff99ff",
    "#ff80bf",
    "#ff66a3",
    "#df80ff",
    "#b366ff",
    "#9999e6",
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

export default DinamicColorLight;
