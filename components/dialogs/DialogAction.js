import React from "react";

export default function DialogAction({children}) {
    return (

        <div
            className={"flex space-x-2 mt-6 bottom-0 left-0 w-full justify-end"}>
            {children}
        </div>

    )
}
