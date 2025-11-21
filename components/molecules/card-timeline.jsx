import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"

const CardTimeline = ({
    color,
    title,
    description,
    badge =[]
}) =>
{
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex gap-4 w-full items-center">
                <div className={`w-5 h-5 rounded-full flex-shrink-0`} style={{backgroundColor: color}}></div>
                <Separator orientation="vertical" className="h-[1px] w-full flex-1" />
            </div>
            <div className="grid gap-4 border border-[#DDDDDD] p-3 w-full rounded-xl h-full self-stretch">
                <h3 className="text-black text-lg font-normal">{title}</h3>
                <p className="text-sm text-gray-150 font-light">{description}</p>
                <div className="flex gap-2">
                {
                    badge.map((item, index) => (
                        <Badge showRedDot={false} key={index} className={`text-[${color}] text-xs`} style={{color:color}}>{item}</Badge>
                    ))
                }
               </div>
            </div>
        </div>
    )
}

export default CardTimeline