import React from 'react'

const CartOne = [
    {
        companyName: 'dubizzle',
        country: 'Dubai'
    },
    {
        companyName: 'dubizzle',
        country: 'Abu Dhabi'
    },
    {
        companyName: 'dubizzle',
        country: 'Sharjah'
    },
    {
        companyName: 'dubizzle',
        country: 'Ajman'
    },
]

const CartTwo = [
    {
        companyName: 'dubizzle',
        country: 'Al Ain'
    },
    {
        companyName: 'dubizzle',
        country: 'Ras Al Khaimah'
    },
    {
        companyName: 'dubizzle',
        country: 'Fujairah'
    },
    {
        companyName: 'dubizzle',
        country: 'Umm Al Quwain'
    },
]

const Hero = () => {
    return (

        <div>
            <div className='relative flex justify-center'>
                <img src='/images/hero/hero-image-desktop.png' className='w-[100%] z-20' />


                <h1 className='text-white font-normal xl:font-light text-xl xl:text-[48px] z-50 text-center absolute top-5 xl:top-28'>
                    Welcome to the UAE's #1
                </h1>
                <h1 className='text-white font-normal xl:font-light text-xl xl:text-[48px] z-50 text-center absolute top-11 xl:top-44'>
                    online classifieds website!
                </h1>

            </div>


            <div className='justify-center flex'>

                <div className='text-black h-auto absolute top-52 xl:top-[23rem] z-50 w-[100%] mb-10'>

                    <h1 className='text-center text-black md:text-white text-[20px] pb-8 px-5'>Which emirate would you like to explore?</h1>

                    <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 w-[50%] m-auto gap-x-16'>

                        {CartOne.map((data) => {

                            return (
                                <div className="border-[1px] hover:border-red-500 hover:transition-all duration-500 hover:text-red-500 hover:drop-shadow-xl cursor-pointer bg-white border-gray-300 rounded-[5px] w-48 py-6 text-center">
                                    <div>{data.companyName}</div>
                                    <div>{data.country}</div>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div className='mt-[33.5rem] sm:mt-[13.5rem] lg:mt-[9rem] xl:mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-4 w-[50%] m-auto gap-x-16'>
                    {CartTwo.map((data) => {

                        return (
                            <div className="border-[1px] hover:border-red-500 hover:transition-all duration-500 hover:text-red-500 hover:drop-shadow-xl cursor-pointer bg-white border-gray-300 rounded-[5px] w-48 py-6 text-center">
                                <div>{data.companyName}</div>
                                <div>{data.country}</div>
                            </div>
                        )
                    })}

                </div>
            </div>



        </div>
    )
}

export default Hero;
