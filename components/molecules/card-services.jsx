import Image from 'next/image'
import Text from '@/components/ui/text'

const CardServices = ({ image, alt, icon, title, description }) => {
  return (
    <div>
      <div>
        <Image
          src={image}
          alt={alt}
          title={alt}
          height={238}
          width={379}
        />
      </div>
      <div className='mt-16 flex flex-col items-center justify-center text-center'>
        <div className='flex items-center space-x-4'>
          <Image
            src={icon}
            alt='icon'
            title='icon'
            height={40}
            width={40}
          />
          <Text
            variant='black'
            size='h1'
            weight='700'
          >
            { title }
          </Text>
        </div>
        <Text
          variant='black'
          size='h4'
          weight='200'
          className='mt-5'
        >
          { description }
        </Text>
      </div>
    </div>
  )
}

export default CardServices
