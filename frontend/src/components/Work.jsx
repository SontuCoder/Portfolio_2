import React from 'react'
import ProjectCard from './ProjectCard';
import P1 from '../assets/images/project-1.jpg';
import P2 from '../assets/images/project-2.jpg';
import P3 from '../assets/images/project-3.jpg';
import P4 from '../assets/images/project-4.jpg';
import P5 from '../assets/images/project-5.jpg';
import P6 from '../assets/images/project-6.jpg';



const works = [
    {
        imgSrc: P1,
        title: 'Full stack music app',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
        imgSrc: P2,
        title: 'Free stock photo app',
        tags: ['API', 'SPA'],
        projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
        imgSrc: P3,
        title: 'Recipe app',
        tags: ['Development', 'API'],
        projectLink: ''
    },
    {
        imgSrc: P4,
        title: 'Real state website',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
        imgSrc: P5,
        title: 'eCommerce website',
        tags: ['eCommerce', 'Development'],
        projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
        imgSrc: P6,
        title: 'vCard Personal portfolio',
        tags: ['Web-design', 'Development'],
        projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
];

const Work = () => {
    return (
        <section 
        id="work"
        className="section">
            <div className="container">
                <h2 className="headline-2 mb-8">
                    My Portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) =>(
                        <ProjectCard 
                        key={key}
                        imgSrc = {imgSrc}
                        title = {title}
                        tags = {tags}
                        projectLink={projectLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work
