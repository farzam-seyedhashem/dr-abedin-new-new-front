import {ModalSideSheet} from "@/components/SideSheet/ModalSideSheet";
import Icon from "@/components/assets/Icon";

export default function SettingList({colorMode,handleChangeColor,modeType,handleChangeMode}) {
    const colors = [
        {
            name:"default",
            class:"default-theme-color"
        },
        {
            name:"blue",
            class:"blue-theme-color"
        },
        {
            name:"green",
            class:"green-theme-color"
        },
        {
            name:"yellow",
            class:"yellow-theme-color"
        },
        {    name:"orange",
            class:"orange-theme-color"
        },
        {    name:"pink",
            class:"pink-theme-color"
        },
        {    name:"purple",
            class:"purple-theme-color"
        }
    ]
    // modeType={modeType}
    // colorMode={colorMode}
    // handleChangeMode={handleChangeMode}
    // handleChangeColor={handleChangeColor}
    return (
        <div>
            <h3 className={"text-title-small font-bold text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
               تم سایت
            </h3>
            <div className={"grid pt-4 pb-3 grid-cols-4 gap-2"}>
                {colors.map((item,i)=><div key={i}
                    className={"relative flex items-center justify-center bg-surface-container-lowest-light dark:bg-surface-container-lowest-dark h-[80px] rounded-[12px] w-full"}>
                    <div onClick={()=>handleChangeColor(item.class)}
                        className={`${item.class} overflow-hidden h-[56px] w-[56px] grid grid-cols-2 rounded-full`}>
                        <div className={"col-span-2 bg-primary-container-light dark:bg-primary-container-dark"}/>
                        <div className={"col-span-1 bg-tertiary-container-light dark:bg-tertiary-container-dark"}/>
                        <div className={"col-span-1 bg-secondary-container-light dark:bg-secondary-container-dark"}/>
                    </div>
                    {colorMode === item.class && <div
                        className={"flex justify-center items-center bg-primary-light rounded-full w-[40px] h-[40px] absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 dark:bg-primary-dark"}>
                        <Icon className={"text-on-primary-light dark:text-on-primary-dark"}
                              type={"outline"}>
                            check
                        </Icon>
                    </div>}
                </div>)}
            </div>
            <div className={" space-x-2 space-x-reverse flex items-center"}>
                <div onClick={()=>handleChangeMode(false)}
                    className={`${modeType==="light"&&"ring-1 ring-offset-2 ring-offset-transparent ring-primary-light dark:ring-primary-dark"} flex items-center rounded-[12px] justify-center bg-surface-light h-[200px] w-6/12`}>
                    <Icon size={40} className={"text-[40px] text-on-surface-light"} type={"outline"}>
                        light_mode
                    </Icon>
                </div>
                <div onClick={()=>handleChangeMode(true)} className={`${modeType==="dark"&&"ring-1 ring-offset-transparent ring-offset-2 ring-primary-light dark:ring-primary-dark"} flex items-center rounded-[12px] justify-center bg-surface-dark h-[200px] w-6/12`}>
                    <Icon size={40} className={"text-on-surface-dark"} type={"outline"}>
                        dark_mode
                    </Icon>
                </div>
            </div>
        </div>
    )
}