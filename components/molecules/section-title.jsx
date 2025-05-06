import Text from '@/components/ui/text'

const SectionTitle = ({title, subtitle, desc, sizeTitle = 'banner', spanCherrypick = false}) => {
  return (
    <div className="flex flex-col justify-start text-left gap-5">
       <Text variant="primary" size="h6" rounded="lg" className="text-red-cherry-500">
          {subtitle}
        </Text>
        <Text variant="primary" size={sizeTitle} weight="400">
        <h1>{title} {spanCherrypick && <span className='text-red-cherry-500'>Cherrypick</span>}</h1> 
        </Text>
         <Text size="h2" className="text-gray-150">{desc}</Text>
    </div>
  );
}

export default SectionTitle
