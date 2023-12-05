import Text from '@/components/ui/text'

const Goals = () => {
  return (
    <div className="bg-cover object-fill md:bg-center bg-[url('/images/bg-mask-2.svg')]">
      <div className='container mx-auto py-[100px] flex flex-col items-center justify-center text-center'>
        <Text
          variant='black'
          size='h0'
          weight='700'
        >
          We craft <span className='text-red-cherry-500'>digital products</span>
        </Text>
        <Text
          variant='black'
          size='h0'
          weight='700'
        >
          for business and user goals.
        </Text>
        <Text
          variant='black'
          size='h2'
          weight='200'
          className='w-full lg:w-[789px] mt-8'
        >
          Help find solutions with UI / UX designs that are intuitive and in accordance with client business goals. We provide a high-quality service in UI/ UX Design & Development.
        </Text>
      </div>
    </div>
  )
}

export default Goals
