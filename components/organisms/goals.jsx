import Text from '@/components/ui/text'

const Goals = () => {
  return (
    <div className="bg-cover bg-center md:bg-[url('/images/bg-mask-2.svg')] bg-[url('/images/bg-mask-work-mobile.svg')]">
      <div className='container mx-auto py-[100px] flex flex-col items-center justify-center text-center'>
        <Text
          variant='primary'
          size='h0'
          weight='700'
          className='break-words w-full lg:w-[670px] !leading-[62px] block'
        >
          We craft <span className='text-red-cherry-500'>digital products</span> for business and user goals.
        </Text>
        <Text
          variant='primary'
          size='h2'
          weight='200'
          className='w-full lg:w-[789px] mt-8 leading-9'
        >
          Help find solutions with UI / UX designs that are intuitive and in accordance with client business goals. We provide a high-quality service in UI/ UX Design & Development.
        </Text>
      </div>
    </div>
  )
}

export default Goals