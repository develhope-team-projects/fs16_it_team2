import { useEffect, useState } from "react";
import { IoIceCream } from "react-icons/io5";

const DinamicIceCreams = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "#f984ef",
    "#cc00ff ",
    "#bd33a4",
    "#800080",
    "#663399",
    "#4b0082",
    "#483d8b ",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Cambia il colore ogni secondo (1000 millisecondi)

    return () => clearInterval(intervalId); // Pulisce l'intervallo quando il componente viene smontato
  }, [colors.length]);

  const currentColor = colors[colorIndex];

  return (
    <i>
      <IoIceCream
        className="inline-block mr-2 text-4xl"
        style={{ color: currentColor }}
      />
    </i>
  );
};

export default DinamicIceCreams;
