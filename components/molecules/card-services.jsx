import Image from 'next/image'
import Text from '@/components/ui/text'

const CardServices = ({ image, alt, icon, title, description }) => {
  return (
    <article>
      <div className="flex items-center justify-center">
        <Image src={image} alt={alt} title={alt} height={238} width={379} />
      </div>
      <div className="mt-16 flex flex-col items-center justify-center text-center">
        <div className="flex items-center space-x-4">
          <Image src={icon} alt="icon" title="icon" height={40} width={40} />
          <Text variant="primary" size="h1" weight="700">
            <h3>{title}</h3>
          </Text>
        </div>
        <Text
          variant="primary"
          size="h4"
          weight="200"
          className="mt-5 leading-[30px]"
        >
          {description}
        </Text>
      </div>
    </article>
  );
}

export default CardServices
