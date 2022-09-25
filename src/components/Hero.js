import React from 'react'
import Particle from './Particle'

function Hero() {
  return (
    <div className='w-full h-fit md:h-screen pt-12 md:pt-0 flex justify-center items-center bg-[#121316] ' id='home' name='home'
        // style={{ backgroundImage: `url(${bgimg})` }}
        >
            <Particle />
            {/* hero section */}
            <div className='max-w-[1000px] h-fit mx-auto px-8 flex flex-col md:justify-center pt-5  md:pt-0 md:mt-0 absolute' >

                <div className='mt-12 pt-12 md:pt-0 md:mt-0'></div>
                <p className='text-white'>Hi, I'm</p>
                <h1 className='md:text-6xl text-4xl font-bold text-white'>Mohammed Althaf PP</h1>
                <h2 className='md:text-4xl text-2xl font-bold text-gray-400'>Full Stack Developer</h2>
                
                {/* <p className='max-w-[700px] py-4 text-white'>
                    Passionate Self-taught Full Stack web developer specialising on MERN Stack with application development experience and well-versed in a variety of front-end and back-end technologies.Possess a solid commitment to the team environment and enjoy working as a team member and independently.
                </p> */}

                {/* button  */}
                {/* <div className='flex flex-col ' >
                    <Link to='contact' smooth={true} duration={1000} className='group border-2 py-3 px-3 md:px-6 my-2 flex items-center justify-center text-white w-fit cursor-pointer'>
                        Contact me
                        <span className='group-hover:rotate-90 duration-500'>
                            <HiArrowNarrowRight className='ml-3 text-white' />
                        </span>
                    </Link>
                    <a href='/Sreeshil-CK-Resume.pdf' download={true} className='lg:hidden group border-2 py-3 px-6 my-2  flex items-center justify-center text-white w-fit'>
                        Resume
                        <span className=''>
                            <CgFileDocument size={20} className='ml-3 text-white' />
                        </span>
                    </a>
                </div> */}

                {/* social icons */}
                {/* <div className='flex mt-8 lg:hidden  items-center'>
                    <ul className='flex '>
                        <li className='w-[20px] h-[60px]   duration-500 text-center'>
                            <a href="https://www.linkedin.com/in/mohammedAlthaf-pp/" target="_blank" rel="noreferrer" className='text-white'>
                                <FaLinkedin size={30} />
                            </a>
                        </li>
                        <li className='w-[20px] h-[60px]   duration-500 mx-4'>
                            <a href="https://github.com/MohammedAlthafPP/" target="_blank" rel="noreferrer" className='text-white'>
                                <FaGithub size={30} />
                            </a>
                        </li>
                        <li className='w-[20px] h-[60px]  duration-500'>
                            <a href="mailto:mgmalthaf@gmail.com" className='text-white'>
                                <HiOutlineMail size={32} />
                            </a>
                        </li>
                    </ul>
                </div> */}

            </div>
            {/* <Particle /> */}
        </div>
  )
}

export default Hero