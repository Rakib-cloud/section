import React from 'react';

const Socialicons = ({ icon, text }) => {
    return (
        <div className='flex items-center gap-x-1 text-lg text-[#6005de] cursor-pointer hover:border-b transition duration-300 hover:border-[#6005de]'>
            <div className='text-xl'>
                {icon}
            </div>
            <h1 className='font-semibold'>{text}</h1>
        </div>
    );
};

export default Socialicons;