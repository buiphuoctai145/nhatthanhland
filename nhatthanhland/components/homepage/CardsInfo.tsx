import Image from "next/image";
interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}
const Card = ({ imageSrc, title, description, buttonText }: CardProps) => {
  return (
    <div className="w-full mx-auto max-w-7xl pt-8 pb-4 px-4 sm:px-6 lg:px-8 flex flex-col items-center p-4 gap bg-white rounded-lg shadow-lg ">
      <div className="w-24 h-24 mb-4">
        <Image src={imageSrc} alt={title} width={100} height={100} />
      </div>
      <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
      <p className="text-gray-800 mb-4">{description}</p>
      <button className="px-4 py-2 bg-white text-black border-1 border-black rounded-lg hover:bg-black hover:text-white">
        {buttonText}
      </button>
    </div>
  );
};

export default function CardsInfo() {
  const cards = [
    {
      imageSrc: "/images/info-1.png",
      title: "Buy",
      description:
        "Redfin agents are among the most experienced in the industry and can help you win in today's market.",
      buttonText: "Find an agent",
    },
    {
      imageSrc: "/images/info-2.png",
      title: "Sell",
      description:
        "We know how to price, market, and sell your home for top dollar. And we do it all for half the listing fee others often charge.",
      buttonText: "Learn more",
    },
    {
      imageSrc: "/images/info-3.png",
      title: "Rent",
      description:
        "Whether you're searching for apartments, condos, or rental homes, we make it easy to find a place you'll love.",
      buttonText: "Explore rentals",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-8 bg-gray-100">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
