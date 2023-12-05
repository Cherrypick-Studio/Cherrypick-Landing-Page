import Image from 'next/image'

const CardIcon = ({ image, alt }) => {
  return (
    <div>
      <Image
        src={image}
        alt={alt}
        title={alt}
        height={24}
        width={24}
      />
    </div>
  )
}

export default CardIcon
