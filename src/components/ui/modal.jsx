import React from "react";
import x from '/public/icons/x.svg';


export const Modal = ({children, close, isOpen}) => {

    if(!isOpen) {
        return null;
    }

    return (
        <>
        <div onClick={close} className=" bg-[#00000086] absolute inset-0 flex items-center justify-center pt-[30px]">
            <div className="bg-bgPink p-5 relative w-[440px] h-[792px] flex flex-col items-center" onClick={(e) => e.stopPropagation()} >
                {children}
                <button onClick={close} className=" absolute top-4 right-5">
                    <img src={x} alt="img" className="w-[24px] h-[24px]" />
                </button>
                </div>
        </div>
        </>
    )
}