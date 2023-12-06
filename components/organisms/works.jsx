import SectionTitle from '@/components/molecules/section-title'
import Text from '@/components/ui/text'
import Image from 'next/image'

const Works = () => {
  return (
    <div className='my-16 container mx-auto'>
      <SectionTitle
        title='Our Works'
        subtitle='Latest Masterpieces'
      />
      <div className='mt-12 space-y-[72px]'>
        {/* Laracamp */}
        <div className='grid grid-cols-1 lg:grid-cols-2 relative bg-gradient-to-r from-[#4D1DAB] to-[#7839F3] p-6 lg:py-[121px] lg:px-[103px] rounded-[32px] min-h-[550px]'>
          <Image
            src='/images/bg-laracamp.svg'
            alt='bg-laracamp'
            title='bg-laracamp'
            height={251}
            width={271}
            className='absolute top-4 md:top-14 left-8 px-4 lg:px-0 lg:left-40 w-[251px] h-[271px] md:w-[364px] md:h-[394px]'
          />
          <div className='z-20'>
            <Image
              src='/images/logo-laracamp.svg'
              alt='logo-laracamp'
              title='logo-laracamp'
              height={40}
              width={200}
            />
            <Text
              variant='white'
              size='h4'
              className='block w-full lg:w-[378px] mt-4 md:mt-8 text-justify leading-[30px]'
            >
              Laracamp is a bootcamp that helps junior developers who are really passionate about programming by providing several benefits such as learning videos, 1 on 1 mentoring programs, design kits, and many more.
            </Text>
          </div>
          <div className='relative'>
            <Image
              src='/images/vector-laracamp.svg'
              alt='vector-laracamp'
              title='vector-laracamp'
              height={461}
              width={582}
              className='lg:absolute -mb-16 mt-4 lg:mt-0 rounded-[20px] shadow-md lg:-bottom-24 lg:right-0'
            />
          </div>
        </div>
        {/* Shamo & Flutix */}
        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-[72px] lg:gap-y-0'>
          {/* Shamo */}
          <div className='relative flex flex-col bg-gradient-to-b from-[#1990A3] to-[#64C5D6] p-6 lg:py-10 lg:px-[103px] rounded-[32px]'>
            <Image
              src='/images/bg-shamo.svg'
              alt='bg-shamo'
              title='bg-shamo'
              height={468}
              width={584}
              className='absolute bottom-44 lg:bottom-0 inset-x-0 mx-auto'
            />
            <div className='relative z-20 order-last lg:order-first'>
              <Image
                src='/images/vector-shamo.svg'
                alt='vector-shamo'
                title='vector-shamo'
                height={733}
                width={378}
                className='hidden lg:block -mt-20 mx-auto rounded-[20px] shadow-md'
              />
              <Image
                src='/images/vector-shamo-2.svg'
                alt='vector-shamo'
                title='vector-shamo'
                height={733}
                width={378}
                className='block lg:hidden -mb-14 mt-4 mx-auto rounded-[20px] shadow-md'
              />
            </div>
            <div className='lg:mt-10 relative z-20'>
              <Image
                src='/images/logo-shamo.svg'
                alt='logo-shamo'
                title='logo-shamo'
                height={40}
                width={127}
              />
              <Text
                variant='white'
                size='h4'
                className='block w-full mt-5 text-justify leading-[30px]'
              >
                Shamo is a shoe sales application with a shopping experience that prioritizes an easy user experience. and has various types of shoes from famous brands.
              </Text>
            </div>
          </div>
          {/* Flutix */}
          <div className='relative lg:h-[850px] bg-gradient-to-b from-[#E5DEFF] to-[#DAD3F7] p-6 lg:py-10 lg:px-[103px] max-h-[863px] rounded-[32px]'>
            <Image
              src='/images/bg-flutix.svg'
              alt='bg-flutix'
              title='bg-flutix'
              height={325}
              width={340}
              className='absolute top-4 px-4 inset-x-0 mx-auto'
            />
            <div className='relative z-20'>
              <Image
                src='/images/logo-flutix.svg'
                alt='logo-flutix'
                title='logo-flutix'
                height={40}
                width={127}
              />
              <Text
                variant='flutix'
                size='h4'
                className='block w-full mt-5 text-justify leading-[30px]'
              >
                Flutix is a cinema ticket sales application with various attractive offers and various conveniences for its users.
              </Text>
            </div>
            <div className='lg:mt-10 relative z-20'>
              <Image
                src='/images/vector-flutix.svg'
                alt='vector-flutix'
                title='vector-flutix'
                height={673}
                width={378}
                className='hidden lg:block absolute top-6 inset-x-0 mx-auto rounded-[20px] shadow-md'
              />
              <Image
                src='/images/vector-flutix-2.svg'
                alt='vector-flutix'
                title='vector-flutix'
                height={733}
                width={378}
                className='block lg:hidden -mb-16 mx-auto'
              />
            </div>
          </div>
        </div>
        {/* Micro */}
        <div className='flex flex-col lg:flex-row lg:space-x-10 relative bg-gradient-to-r from-[#4D55BC] to-[#343A84] p-6 lg:py-[121px] lg:px-[103px] rounded-[32px]'>
          <Image
            src='/images/bg-micro.svg'
            alt='bg-micro'
            title='bg-micro'
            height={418}
            width={576}
            className='absolute top-4 px-4 lg:px-0 lg:right-28'
          />
          <div className='relative w-full lg:w-1/2 order-last lg:order-first z-30'>
            <Image
              src='/images/vector-micro.svg'
              alt='vector-micro'
              title='vector-micro'
              height={452}
              width={481}
              className='lg:absolute -mb-14 lg:-top-20 lg:left-0 mt-4 lg:mt-0 rounded-[20px] shadow-md'
            />
          </div>
          <div className='z-20 w-full lg:w-1/2'>
            <Image
              src='/images/logo-micro.svg'
              alt='logo-micro'
              title='logo-micro'
              height={40}
              width={203}
            />
            <Text
              variant='white'
              size='h4'
              className='block w-full lg:w-[450px] mt-5 text-justify leading-[30px]'
            >
              Micro is a website-based online course application that offers various kinds of online courses. Micro offers a wide selection of materials ranging from business development, content writing, game development, and many other learning materials.
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
