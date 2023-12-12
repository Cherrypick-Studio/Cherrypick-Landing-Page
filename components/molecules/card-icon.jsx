import Image from "next/image";

const CardIcon = ({ image, alt }) => {
  return <Image src={image} alt={alt} title={alt} height={24} width={24} className="hover:-mt-1 transition-all duration-150 ease-in-out" />;
};

export default CardIcon;
