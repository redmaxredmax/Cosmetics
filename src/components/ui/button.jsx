import React, { Children } from 'react'
import clsx from 'clsx'

export const Button = ({ type, variant, children, onClick, icon: Icon }) => {
    return (
        <button type={type} onClick={onClick}
            className={clsx(" px-[22px] py-[10px]", {
                "bg-black border border-black hover:bg-transparent text-white hover:text-black": variant == "primary",
                "border border-black hover:bg-black  hover:text-white": variant == "secondary",
                "bg-black border border-white text-white opacity-80":variant=="footer",
            })}
        >
            {Icon ? Icon : ""}
            <span>{children}</span>
        </button>
    )
}
