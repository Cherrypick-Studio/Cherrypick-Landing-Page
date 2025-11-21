import Text from "@/components/ui/text";

const SectionTitle = ({
  title,
  subtitle,
  desc,
  sizeTitle = "banner",
  spanCherrypick = false,
  isHeading = false,
}) => {
  return (
    <div className="flex flex-col justify-start text-left gap-5">
      <Text
        variant="primary"
        size="h6"
        rounded="lg"
        className="text-red-cherry-500"
      >
        {subtitle}
      </Text>
      <Text
        variant="primary"
        className="max-lg:text-[40px]"
        size={sizeTitle}
        weight="400"
      >
        {isHeading ? (
          <h1>
            {title}{" "}
            {spanCherrypick && (
              <span className="text-red-cherry-500">Cherrypick</span>
            )}
          </h1>
        ) : (
          <h2>
            {title}{" "}
            {spanCherrypick && (
              <span className="text-red-cherry-500">Cherrypick</span>
            )}
          </h2>
        )}
      </Text>
      <Text size="h2" className="text-gray-150 max-lg:text-base font-light">
        {desc}
      </Text>
    </div>
  );
};

export default SectionTitle;
