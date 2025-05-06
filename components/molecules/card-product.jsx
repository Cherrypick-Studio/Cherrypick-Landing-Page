import Image from "next/image"
import Text from "../ui/text"

const CardProduct = ({
    img,
    title,
    list =[]
}) =>
{
    return (
        <div className="flex flex-col w-full gap-5">
            <div className="relative overflow-hidden w-fit">
            <Image src={img} alt="cherrypick-product-1" title="cherrypick-product-1" width={300} height={300} className="w-full hover:scale-105 transition-all duration-300" />
            </div>
            <div className="flex justify-between max-lg:items-center">
                <Text size="h1" weight="400" className="max-lg:text-base">{title}</Text>
                <div className="flex gap-3">
                    {list.map((item, index) => (
                        <div key={index} className="flex border border-[#DDDDDD] items-center px-4 py-2 gap-3 rounded-full">
                            <div className="w-2 h-2 bg-red-cherry-500 rounded-full" />
                            <Text size="h6" className="max-lg:text-xs font-light">{item}</Text>
                        </div>
                    ))}
               </div>
            </div>
        </div>
    )
 }

export default CardProduct