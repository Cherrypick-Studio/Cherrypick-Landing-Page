import Image from 'next/image'
import Text from '@/components/ui/text'
import { Button } from '@/components/ui/button'

const MainSection = () => {
  return (
    <div className="pt-40 pb-20 bg-cover bg-center bg-[url('/images/bg-mask.svg')]">
      <div className='container mx-auto lg:flex space-y-16 lg:space-y-0'>
        <div className='w-full lg:w-1/3 text-center lg:text-start'>
          <Text
            variant='white'
            size='h0'
            weight='700'
            className='block'
          >
            Digitalize Your Products with Us
          </Text>
          <Text
            variant='white'
            size='h2'
            weight='400'
            className='block my-6'
          >
            Create intuitive UI/UX designs aligned with client goals, delivering high-quality UI/UX Design & Development services.
          </Text>
          <Button
            variant='homepage'
            rounded='2xl'
          >
            <>
              Create Together Now
            </>
          </Button>
        </div>
        <div className='w-full lg:w-2/3'>
          <Image
            src='/images/vector-1.svg'
            alt='vector'
            title='vector'
            height={422}
            width={687}
            className='w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default MainSection
