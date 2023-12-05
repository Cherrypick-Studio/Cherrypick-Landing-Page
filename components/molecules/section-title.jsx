import Text from '@/components/ui/text'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div className='flex flex-col justify-center text-center'>
      <Text
        variant='black'
        size='h0'
        weight='700'
      >
        { title }
      </Text>
      <div className='mt-4'>
        <Text
          variant='subtitle'
          size='h6'
          rounded='lg'
        >
          { subtitle }
        </Text>
      </div>
    </div>
  )
}

export default SectionTitle
