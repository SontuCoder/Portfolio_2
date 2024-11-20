import React from 'react';
import avter from '../assets/images/avatar-1.jpg';
import pic from '../assets/images/hero-banner.png';

import { ButtonPrimary, ButtonOntline } from './Button';

const Hero = () => {
    return (
        <section
            id='home'
            className='pt-28 lg:pt-36'
        >
            <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className='img-box w-9 h-9 rounded-lg '>
                            <img src={avter}
                                alt="cover-img"
                                width={40}
                                height={40}
                                className='img-cover'
                            />
                        </figure>

                        <div className=" flex items-center gap-1.5 text-zinc-400">
                            <span className="relative w-3 h-3 
                            rounded-full bg-emeralb-400">
                                <span className="absolute inset-0 bg-emerald-400 animate-pulse rounded-full">
                                </span>
                            </span>
                            Available for work
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    Building Scalable Modern Websites for the Future            
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary 
                        label='Download CV'
                        icon="download"/>
                        <ButtonOntline 
                        href="#about"
                        label='Scroll down'
                        icon="arrow_downward"/>
                    </div>
                </div>

                <div className="lg:block">
                    <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden '>
                        <img 
                        src={pic}
                        alt="My pic"
                        width={656}
                        height={800}
                        className=''/>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero
