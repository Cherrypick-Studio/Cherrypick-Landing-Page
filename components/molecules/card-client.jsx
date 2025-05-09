import Image from 'next/image'

const CardClient = ({ image, alt }) => {
  return (
    <div className='bg-white rounded-2xl px-4 py-2'>
      <Image
        src={image}
        alt={alt}
        title={alt}
        height={28}
        width={128}
        className='w-full h-full'
      />
      <div className='w-full' />
    </div>
  )
}

export default CardClient
