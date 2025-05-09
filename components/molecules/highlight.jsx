const HighLightList = ({
    title,
    label
}) =>
{
    return (
        <div className="flex flex-col gap-2 items-center justify-center w-fit">
            <h1 className="text-[80px] text-red-cherry-500 font-medium">{title}</h1>
            <span className="text-xl text-gray-500">{label}</span>
        </div>
    )
}

export default HighLightList