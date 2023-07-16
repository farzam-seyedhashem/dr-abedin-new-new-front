export default function Space({size}){
    let defStyle;
    switch (size){
        case "large":
            defStyle = "md:h-[64px] h-[72px]"
            break;
        case "normal":
            defStyle = "md:h-[56px] h-[64px]"
            break;
        case "small":
            defStyle = "h-[24px] "
            break;
        case "xs":
            defStyle = "h-[24px]"
            break;
        default :
            defStyle = "h-[16px]"
            break;
    }
    return(
        <div className={`${defStyle}`}/>
    )
}