import React, { useState } from 'react'
export default function Item(props) {
    const [done, setDone] = useState(false);
    return (
        <div onClick={() => setDone(!done)} className={`select-none cursor-pointer w-full border-b p-3 flex justify-between items-center`}>
            <div>
                <span className='pr-2 text-[14px] text-white'>
                    {props.time}
                </span>
                <span className={`${done === true ? 'line-through' : ''} text-[20px]`}>
                    {props.item}
                </span>
            </div>
            <div className='cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center' onClick={() => props.removeHandler(props.id)}>
                -
            </div>
        </div>
    )
}