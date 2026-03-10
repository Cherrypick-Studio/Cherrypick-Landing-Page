import Image from "next/image"
import Text from "../ui/text"
import { useRouter } from "next/navigation"
import { Badge } from "../ui/badge";

const CardProduct = ({
    img,
    title,
    url ='termo-beton',
    list =[]
}) =>
{
    const router = useRouter();

    return (
        <div className="flex flex-col w-full gap-5 cursor-pointer" onClick={() => router.push(`/portfolio/${url}`) }>
            <div className="relative overflow-hidden w-full">
            <Image src={img} alt={`${title} project by Cherrypick Studio`} title={title} width={300} height={300} className="hover:scale-105 transition-all duration-300 rounded-xl w-full" />
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