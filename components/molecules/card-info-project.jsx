const { default: Image } = require("next/image")

const CardInfoProject = ({
    img,
    title,
    desc,
    list
}) =>
{
    return (
        <div className="flex flex-col gap-10 p-10 rounded-xl bg-[#FBFBFB] w-full">
            <Image src={img} alt="project-1" width={400} height={400} className="w-16 h-16"/>
            <div className="space-y-2">
                <h3 className="text-3xl font-light">{title}</h3>
                <p className="text-xl text-gray-150 font-light">{desc}</p>
                <ul className="list-disc text-xl text-gray-150 font-light space-y-2">
                    {list} { /** please using <li>> tag */}
                </ul>
            </div>
        </div>
    )
}

export default CardInfoProject