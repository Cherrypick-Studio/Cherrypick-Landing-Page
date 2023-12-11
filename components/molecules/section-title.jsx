import Text from '@/components/ui/text'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div className="flex flex-col justify-center text-center">
      <Text variant="primary" size="h0" weight="700">
        <h1>{title}</h1>
      </Text>
      <div className="mt-4 max-w-fit mx-auto">
        <Text variant="subtitle" size="h6" rounded="lg">
          {subtitle}
        </Text>
      </div>
    </div>
  );
}

export default SectionTitle
