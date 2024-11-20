import React from 'react'

const aboutItems = [
    {
        label: 'Project done',
        number: 45
    },
    {
        label: 'Years of experience',
        number: 10
    }
];


const About = () => {
    return (
        <section
        id='about'
        className='section'
        >
            <div className="container">
                <div className="">
                    <p className="">
                        Welcome! I&apos;m Henry, a professional web developer with a knack for crafessional visually stunning and highly functional websites.
                        Combining creativity and technical experience. Transform your vision into degital masterpice that excels in both appearance and performance.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About
