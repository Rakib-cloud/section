import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const Review = ({ text }) => {

    return (

        <div className='flex gap-x-3'>

            <div className='flex'>
                <AiFillStar className='text-yellow-400 text-2xl' />
                <AiFillStar className='text-yellow-400 text-2xl' />
                <AiFillStar className='text-yellow-400 text-2xl' />
                <AiFillStar className='text-yellow-400 text-2xl' />
                <AiFillStar className='text-yellow-400 text-2xl' />
            </div>
            <p className='text-[#818181] text-sm'>{text}</p>

        </div>
    );
};

export default Review;