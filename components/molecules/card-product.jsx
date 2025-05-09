import Image from "next/image"
import Text from "../ui/text"
import { useRouter } from "next/navigation"
import { Badge } from "../ui/badge";

const CardProduct = ({
    img,
    title,
    list =[]
}) =>
{
    const router = useRouter();

    return (
        <div className="flex flex-col w-full gap-5 cursor-pointer" onClick={() => router.push("/project/termo-beton") }>
            <div className="relative overflow-hidden w-fit">
            <Image src={img} alt="cherrypick-product-1" title="cherrypick-product-1" width={300} height={300} className="w-full hover:scale-105 transition-all duration-300 rounded-xl" />
            </div>
            <div className="flex justify-between max-lg:items-center">
                <Text size="h1" weight="400" className="max-lg:text-base">{title}</Text>
                <div className="flex gap-3">
                    {list.map((item, index) => (
                        <Badge key={index}>{item}</Badge>
                    ))}
               </div>
            </div>
        </div>
    )
 }

export default CardProduct