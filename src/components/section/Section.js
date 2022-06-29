import React, { useEffect, useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { VscHeart } from 'react-icons/vsc';
import { BiShare } from 'react-icons/bi';
import Review from './Review';
import Socialicons from './Socialicons';

const Section = () => {

    const [images, setImages] = useState([]);

    // fetching images from public JSON data 
    useEffect(() => {

        const getImage = async () => {
            const res = await fetch('./data.json');
            const data = await res.json();
            setImages(data);
        };
        getImage();

    }, []);


    return (

        <div className='lg:flex lg:h-[90vh] lg:items-center'>

            <div className='container lg:w-[1140px]'>

                <div className='capitalize mb-10'>
                    <h1 className='text-2xl lg:text-4xl font-bold text-[#222222]'>summer art camp! 5 days of artists and painting Moment, Van Gogh, Matisse, & More</h1>
                    <p className='flex items-center gap-x-2 text-[#818181] mt-2 font-medium'>Multi-Day
                        course<BsQuestionCircle />{/* question icon */}</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-end'>

                    <div className='flex flex-col justify-center mb-5'>

                        <div className='font-medium text-lg text-justify mb-6'>
                            In this 5 day class we will explore artists Moment, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work
                        </div>

                        <div>

                            <div className='flex items-center gap-x-3 mb-4'>

                                <div className='w-10 border rounded-full'>
                                    <img className='rounded-full' src="https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?b=1&k=20&m=805012064&s=170667a&w=0&h=7jWoHlRITekFJe0gSCx6CVbpqRWNhGH_KyNH782sqs4=" alt="instructor" />
                                </div>
                                <h1 className='text-xl font-bold text-[#6005de]'>Kimberly R Moseler</h1>

                            </div>

                            <div className='flex flex-col gap-y-2 mb-6'>

                                {/* separate review component */}
                                <Review text='467 total reviews of the teacher' />
                                <Review text='5 reviews of this class' />
                                <h1 className='font-medium text-lg'>Completed by 21 learners</h1>

                            </div>

                            <div className='flex flex-wrap justify-center md:justify-start gap-x-2 lg:gap-x-8'>

                                <button className='bg-[#6005de] hover:bg-white hover:-translate-y-1 hover:scale-110 hover:text-[#6005de] border border-[#6005de] transition ease-in-out text-white text-lg pl-3 lg:pl-6 pr-3 py-2 rounded-full flex items-center font-semibold'>See Class Schedule <MdOutlineKeyboardArrowRight className='text-2xl' />{/* arrow icon */}</button>

                                {/* separate social media icon component*/}
                                <Socialicons icon={<VscHeart />} text='Save' />
                                <Socialicons icon={<BiShare style={{ transform: 'scaleX(-1)' }} />} text='Share' />

                            </div>

                        </div>

                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 w-60 mx-auto md:w-10/12 gap-x-2 gap-y-5 lg:gap-y-0'>

                        <div>
                            <img className='w-full h-full' src={images?.[0]?.img} alt="" />
                        </div>

                        <div className='grid grid-rows-2 gap-y-2'>

                            <div>
                                <img className='w-full h-full' src={images?.[1]?.img} alt="" />
                            </div><div>
                                <img className='w-full h-full' src={images?.[2]?.img} alt="" />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Section;