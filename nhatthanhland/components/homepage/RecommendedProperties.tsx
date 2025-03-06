import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText: string;
}

const Card = ({ imageSrc, title, description, buttonText }: CardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center border">
      <div className="w-24 h-24 mb-4">
        <Image src={imageSrc} alt={title} width={96} height={96} />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
        {buttonText}
      </button>
    </div>
  );
};

export default function RealEstateCards() {
  const cards = [
    {
      imageSrc: '/buy-icon.png',
      title: 'Buy',
      description:
        "Redfin agents are among the most experienced in the industry and can help you win in today's market.",
      buttonText: 'Find an agent',
    },
    {
      imageSrc: '/sell-icon.png',
      title: 'Sell',
      description:
        'We know how to price, market, and sell your home for top dollar. And we do it all for half the listing fee others often charge.',
      buttonText: 'Learn more',
    },
    {
      imageSrc: '/rent-icon.png',
      title: 'Rent',
      description:
        "Whether you're searching for apartments, condos, or rental homes, we make it easy to find a place you'll love.",
      buttonText: 'Explore rentals',
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
