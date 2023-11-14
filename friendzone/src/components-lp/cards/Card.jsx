const Card = ({ card }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center p-2 w-1/4">
        <div className="py-20 px-20">
          <h1 className="text-2xl font-bold">{card.title} </h1>
          <p className="text-xl">{card.paragraph}</p>
        </div>
        <div className="py-20 px-20">
          <h2 className="text-2xl font-bold">{card.subtitle}</h2>
          <p className="text-xl">{card.paragraph2}</p>
        </div>
      </div>
      <div className="relative w-1/2 h-54 mt-4">
        <img src={card.img} alt="photo first card" />
      </div>
    </div>
  );
};

export default Card;
