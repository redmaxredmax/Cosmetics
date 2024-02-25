import React from "react";
import clsx from "clsx";


export const Input = React.forwardRef(
    (
        {
            name,
            placeholder,
            value,
            onChange,
            id,
            type,
            label,
            error,
            helperText,
            variant,
            clasname,
            ...resTprop
        },
        ref,
    ) => {
        return (
            <div className="flex flex-col  text-left ml-auto mr-auto translate-y-1/2">
                {label && <label htmlFor={id}>{label}</label>}
                <input 
                {...resTprop}
                 className={clsx(" bg-gray-400/50 rounded-[8px] px-[30px] py-[10px] outline-none", {
                    "w-[360px] h-[56px] bg-white border border-black mb-[20px]":variant == 'primary',
                    " ":variant == "secondary",
                    " ":variant == "smooth",
                 }, clasname)}
                 ref={ref}
                 value={value}
                 onChange={onChange}
                 name={name}
                 id={id}
                 placeholder={placeholder}
                 type={type}
                 
                />
                {helperText && <p className=" text-red-700 text-xs text-left mt-[-15px]">{helperText}</p>}
            </div>
        )
    }
)