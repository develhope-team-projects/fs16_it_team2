import styled, { keyframes } from 'styled-components';
import videoLoading from "../../assets/videos/loading/loading.webm";
import bgl from "../../assets/images/backgrounds/bg-light.png";
import useDarkSide from "../../customHooks/useDarkSide";


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-70px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Componente stilizzato per il titolo
const StyledTitle = styled.h1`
  font-family:'Ms Madi', 'cursive';
  color: #ffffff; // Personalizza il colore del testo
  font-size: 2em;
  animation: ${fadeIn} 1s ease-in-out; // Applica l'animazione
`;

const Loading = () => {
  const [colorTheme, setTheme] = useDarkSide();

  const backgroundImage = colorTheme === "dark" ? `url(${bgl})` : `url(${bgl})`;

  return (
    <div
      className="flex flex-col items-center justify-center  w-full h-screen p-5"
      style={{ backgroundImage, backgroundSize: "cover" }}
    >
      <div className="flex-col relative items-center justify-center w-[50%] h-full mx-auto">
        <video autoPlay loop muted className="mx-auto">
          <source src={videoLoading} type="video/webm" />
          Loading...
        </video>
        <div className='flex absolute text-center text-6xl'>
                <StyledTitle> Please, don't let it melt!</StyledTitle>
        </div>
  
      </div>
    </div>
  );
};

export default Loading;