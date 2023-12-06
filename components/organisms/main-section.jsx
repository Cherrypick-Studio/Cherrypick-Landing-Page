import Image from 'next/image'
import Text from '@/components/ui/text'
import { Button } from '@/components/ui/button'

const MainSection = () => {
  return (
    <div className=" pt-28 md:pt-40 pb-20 md:bg-cover bg-contain bg-no-repeat md:bg-center md:bg-[url('/images/bg-mask.svg')] bg-[url('/images/bg-mask-mobile.svg')]">
      <div className='md:container md:mx-auto lg:flex space-y-6 lg:space-y-0'>
        <div className='w-full lg:w-2/5 text-center lg:text-start'>
          <Text
            variant='white'
            size='h0'
            weight='700'
            className='block !leading-[70px]'
          >
            Digitalize Your Products with Us
          </Text>
          <Text
            variant='white'
            size='h2'
            weight='400'
            className='block my-6 leading-9'
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
        <div className='w-full lg:w-3/5'>
          <Image
            src='/images/vector-1.svg'
            alt='vector'
            title='vector'
            height={422}
            width={687}
            className='sm:ml-0 md:float-right'
          />
        </div>
      </div>
    </div>
  )
}

export default MainSection
