import React from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

//  Register Gsap
gsap.registerPlugin(useGSAP, ScrollTrigger);

import ReviewCard from './ReviewCard.jsx';
import People1 from '../assets/images/people-1.jpg'
import People2 from '../assets/images/people-2.jpg'
import People3 from '../assets/images/people-3.jpg'
import People4 from '../assets/images/people-4.jpg'
import People5 from '../assets/images/people-5.jpg'
import People6 from '../assets/images/people-6.jpg'



const reviews = [
    {
        content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
        name: 'Sophia Ramirez',
        imgSrc: People1,
        company: 'PixelForge'
    },
    {
        content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
        name: 'Ethan Caldwell',
        imgSrc: People2,
        company: 'NexaWave'
    },
    {
        content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
        name: 'Liam Bennett',
        imgSrc: People3,
        company: 'CodeCraft'
    },
    {
        content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
        name: 'Noah Williams',
        imgSrc: People4,
        company: 'BrightWeb'
    },
    {
        content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
        name: 'Ava Thompson',
        imgSrc: People5,
        company: 'TechMosaic'
    },
    {
        content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
        name: 'Jonathan',
        imgSrc: People6,
        company: 'Skyline Digital'
    }
];

const Review = () => {

    useGSAP(()=>{
        gsap.to('.scrub-slide',{
            scrollTrigger:{
                trigger: '.scrub-slide',
                start:'-200% 80%',
                end:'400% 80%',
                scrub: true
            },
            x: '-1000'
        });
    });

    return (
        <section id='reviews' className="section overflow-hidden relative">
            <div className="container relative z-10">
                    <h2 className="headline-2 mb-8 reveal-up">
                        What our customers say
                    </h2>
                    <div className="scrub-slide flex items-stretch gap-3 w-fit">
                        {reviews.map(({ content, name, imgSrc, company }, key) => (
                            <ReviewCard
                                key={key}
                                imgSrc={imgSrc}
                                name={name}
                                company={company}
                                content={content}
                            />
                        ))}
                    </div>
                </div>
        </section>
    );
    
}

export default Review
