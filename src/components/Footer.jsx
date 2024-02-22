import React from 'react'




const FooterOne = [
    {
        strong: 'dubizzle Dubai',
        L1: 'Apartments for Sale in Dubai',
        L2: 'Villa/House for Sale in Dubai',
        L3: 'Apartments for Rent in Dubai',
        L4: 'Villa/House for Rent in Dubai',
        L5: 'Cars in Dubai',
        L6: 'Classifieds in Dubai',
        L7: 'Jobs in Dubai',
    }
]

const FooterTwo = [
    {
        strong: 'dubizzle Abu Dhabi',
        L1: 'Apartments for Sale in  Abu Dhabi',
        L2: 'Villa/House for Sale in  Abu Dhabi',
        L3: 'Apartments for Rent in  Abu Dhabi',
        L4: 'Villa/House for Rent in  Abu Dhabi',
        L5: 'Cars in  Abu Dhabi',
        L6: 'Classifieds in  Abu Dhabi',
        L7: 'Jobs in  Abu Dhabi',
    }
]

const FooterThree = [
    {
        strong: 'dubizzle Sharjah',
        L1: 'Apartments for Sale in Sharjah',
        L2: 'Villa/House for Sale in Sharjah',
        L3: 'Apartments for Rent in Sharjah',
        L4: 'Villa/House for Rent in Sharjah',
        L5: 'Cars in Sharjah',
        L6: 'Classifieds in Sharjah',
        L7: 'Jobs in Sharjah',
    }
]

const FooterFour = [
    {
        strong: 'dubizzle Ajman',
        L1: 'Apartments for Sale in Ajman',
        L2: 'Villa/House for Sale in Ajman',
        L3: 'Apartments for Rent in Ajman',
        L4: 'Villa/House for Rent in Ajman',
        L5: 'Cars in Ajman',
        L6: 'Classifieds in Ajman',
        L7: 'Jobs in Ajman',
    }
]


const FooterFive = [
    {
        strong: 'dubizzle Al Ain',
        L1: 'Apartments for Sale in Al Ain',
        L2: 'Villa/House for Sale in Al Ain',
        L3: 'Apartments for Rent in Al Ain',
        L4: 'Villa/House for Rent in Al Ain',
        L5: 'Cars in Al Ain',
        L6: 'Classifieds in Al Ain',
        L7: 'Jobs in Al Ain',
    }
]

const FooterSix = [
    {
        strong: 'dubizzle Ras Al Khaimah',
        L1: 'Apartments for Sale in Ras Al Khaimah',
        L2: 'Villa/House for Sale in Ras Al Khaimah',
        L3: 'Apartments for Rent in Ras Al Khaimah',
        L4: 'Villa/House for Rent in Ras Al Khaimah',
        L5: 'Cars in Ras Al Khaimah',
        L6: 'Classifieds in Ras Al Khaimah',
        L7: 'Jobs in Ras Al Khaimah',
    }
]

const FooterSeven = [
    {
        strong: 'dubizzle Fujairah',
        L1: 'Apartments for Sale in Fujairah',
        L2: 'Villa/House for Sale in Fujairah',
        L3: 'Apartments for Rent in Fujairah',
        L4: 'Villa/House for Rent in Fujairah',
        L5: 'Cars in Fujairah',
        L6: 'Classifieds in Fujairah',
        L7: 'Jobs in Fujairah',
    }
]

const FooterEight = [
    {
        strong: 'dubizzle Umm Al Quwain',
        L1: 'Apartments for Sale in Umm Al Quwain',
        L2: 'Villa/House for Sale in Umm Al Quwain',
        L3: 'Apartments for Rent in Umm Al Quwain',
        L4: 'Villa/House for Rent in Umm Al Quwain',
        L5: 'Cars in Umm Al Quwain',
        L6: 'Classifieds in Umm Al Quwain',
        L7: 'Jobs in Umm Al Quwain',
    }
]














const Footer = () => {
    return (
        <div className='mt-10 xl:mt-20 px-4 mb-10 text-center text-2xl'>

            <h1>Join millions of users to buy and sell anything in the UAE</h1>

            <div className='grid xl:grid-cols-4 md:grid-cols-2 md:w-[70%] md:gap-16 grid-cols-1 mt-10 xl:gap-16 gap-5 xl:w-[85%] w-[55%] m-auto justify-evenly'>

                <div>
                    {FooterOne.map((data) => {
                        return (
                            <div>
                                <h1 className='text-left text-base'><strong>{data.strong}</strong></h1>
                                <ul className='text-left text-sm text-[#5b77d1]'>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L1}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L2}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L3}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L4}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L5}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L6}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L7}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {FooterTwo.map((data) => {
                        return (
                            <div>
                                <h1 className='text-left text-base'><strong>{data.strong}</strong></h1>
                                <ul className='text-left text-sm text-[#5b77d1]'>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L1}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L2}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L3}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L4}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L5}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L6}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L7}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {FooterThree.map((data) => {
                        return (
                            <div>
                                <h1 className='text-left text-base'><strong>{data.strong}</strong></h1>
                                <ul className='text-left text-sm text-[#5b77d1]'>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L1}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L2}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L3}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L4}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L5}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L6}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L7}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {FooterFour.map((data) => {
                        return (
                            <div>
                                <h1 className='text-left text-base'><strong>{data.strong}</strong></h1>
                                <ul className='text-left text-sm text-[#5b77d1]'>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L1}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L2}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L3}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L4}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L5}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L6}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L7}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>



            <div className='grid xl:grid-cols-4 md:grid-cols-2 md:w-[70%] md:gap-16 grid-cols-1 mt-10 w xl:gap-16 gap-5 xl:w-[85%] w-[55%] m-auto justify-evenly'>


                <div>
                    {FooterFive.map((data) => {
                        return (
                            <div>
                                <h1 className='text-left text-base'><strong>{data.strong}</strong></h1>
                                <ul className='text-left text-sm text-[#5b77d1]'>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L1}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L2}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L3}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L4}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L5}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L6}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L7}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {FooterSix.map((data) => {
                        return (
                            <div>
                                <h1 className='text-left text-base'><strong>{data.strong}</strong></h1>
                                <ul className='text-left text-sm text-[#5b77d1]'>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L1}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L2}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L3}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L4}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L5}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L6}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L7}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {FooterSeven.map((data) => {
                        return (
                            <div>
                                <h1 className='text-left text-base'><strong>{data.strong}</strong></h1>
                                <ul className='text-left text-sm text-[#5b77d1]'>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L1}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L2}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L3}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L4}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L5}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L6}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L7}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>

                <div>
                    {FooterEight.map((data) => {
                        return (
                            <div>
                                <h1 className='text-left text-base'><strong>{data.strong}</strong></h1>
                                <ul className='text-left text-sm text-[#5b77d1]'>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L1}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L2}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L3}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L4}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L5}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L6}</li>
                                    <li className='cursor-pointer hover:underline py-[5px]'>{data.L7}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer;