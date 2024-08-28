import React from 'react';

export function Post({ title, body}) {
    return (
        <div className='w-72 h-72 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-2xl relative bg-white rounded-md '>
            <div className="flex mt-5">
                <div>
                    <label
                        className='text-red-700 text-[17px] font-bold '>{title}</label>
                    <label/>
                    <p className='text-[15px] font-light mt-5'>{body}</p>
                </div>
            </div>
        </div>

    );
}