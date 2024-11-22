import React from 'react'
import SkillCard from './SkillCard';
import Figma from '../assets/images/figma.svg';
import Nodejs from '../assets/images/nodejs.svg';
import Css from '../assets/images/css3.svg';
import Expressjs from '../assets/images/expressjs.svg';
import MongoDb from '../assets/images/mongodb.svg';
import Js from '../assets/images/javascript.svg';
import Reacticon from '../assets/images/react.svg';
import Tailwind from '../assets/images/tailwindcss.svg';

const skillItem = [
    {
        imgSrc: Figma,
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: Css,
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: Js,
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: Nodejs,
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: Expressjs,
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: MongoDb,
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: Reacticon,
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: Tailwind,
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
];

const Skills = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2">
                    Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc },key)=>(
                            <SkillCard
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills
