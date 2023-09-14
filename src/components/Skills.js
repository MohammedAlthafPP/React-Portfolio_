import React from 'react'
import HTML from '../assets/img/html.png'
import CSS from '../assets/img/css.png'
import JS from '../assets/img/javascript.png'
import ReactIcon from '../assets/img/react.png'
import Node from '../assets/img/node.png'
import Mongo from '../assets/img/mongo.png'
import Express from '../assets/img/express.png'
import Bootstrap from '../assets/img/bootstrap.png'
import AWS from '../assets/img/aws.png'
import Figma from '../assets/img/figma.png'
import Github from '../assets/img/github.png'
import Tailwind from '../assets/img/tailwind.png'
import Mysql from '../assets/img/MySQl1.png'
import PostgreSQL from '../assets/img/PostgreSql.png'
import Sequelize from '../assets/img/sequlize.png'
import Heroku from '../assets/img/Heroku.png'
import Cloudinary from '../assets/img/cloudinary.png'
import MUI from '../assets/img/MaterialUi.png' //Material UI
import Vite from '../assets/img/vite.png' 
import DigitalOcean from '../assets/img/DigitalOcean.png' //DigitalOcean



function Skills() {
  return (
    <div className='bg-[#121316] w-full h-full pt-12 pb-10 ' id='skills' name='skills'>
            <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center  pt-12 mt-12'>
                <div className=''>
                    <p className='text-white font-bold text-4xl border-b-4 inline border-blue-400'>Skills</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 text-center mt-5'>
                    <div className='shadow-md hover:shadow-orange-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={HTML} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>HTML</p>
                    </div>
                    <div className='shadow-md hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg'>
                        <img src={CSS} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>CSS</p>
                    </div>
                    <div className='shadow-md hover:shadow-yellow-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={JS} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>JavaScript</p>
                    </div>
                    <div className='shadow-md hover:shadow-blue-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={ReactIcon} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>React</p>
                    </div>

                    <div className='shadow-md hover:shadow-green-400 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Node} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Node Js</p>
                    </div>
                    <div className='shadow-md hover:shadow-green-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Mongo} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>MongoDB</p>
                    </div>
                    <div className='shadow-md hover:shadow-gray-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Express} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Express Js</p>
                    </div>
                    <div className='shadow-md hover:shadow-white hover:scale-110 duration-700 rounded-lg'>
                        <img src={Github} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Github</p>
                    </div>
                    
                    <div className='shadow-md hover:shadow-sky-800 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Mysql} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>MySQL</p>
                    </div>
                    <div className='shadow-md hover:shadow-slate-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={PostgreSQL} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>PostgreSQL</p>
                    </div>
                    <div className='shadow-md hover:shadow-sky-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Sequelize} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Sequelize</p>
                    </div>
                    <div className='shadow-md hover:shadow-violet-900 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Heroku} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>HEROKU</p>
                    </div>

                    <div className='shadow-md hover:shadow-yellow-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={AWS} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>AWS</p>
                    </div>
                    <div className='shadow-md hover:shadow-blue-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={DigitalOcean} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>DigitalOcean</p>
                    </div>
                    <div className='shadow-md hover:shadow-indigo-700 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Cloudinary} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Cloudinary</p>
                    </div>
                    <div className='shadow-md hover:shadow-fuchsia-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Vite} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Vite</p>
                    </div>
                    
                    <div className='shadow-md hover:shadow-sky-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Tailwind} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>TailwindCSS</p>
                    </div>
                    <div className='shadow-md hover:shadow-violet-700 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Bootstrap} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Bootstrap</p>
                    </div>
                    <div className='shadow-md hover:shadow-sky-600 hover:scale-110 duration-700 rounded-lg'>
                        <img src={MUI} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Material UI</p>
                    </div>
                    <div className='shadow-md hover:shadow-rose-500 hover:scale-110 duration-700 rounded-lg'>
                        <img src={Figma} className='w-20 mx-auto' alt="html" />
                        <p className='my-4 text-white font-bold'>Figma</p>
                    </div>

                </div>
            </div>
        </div>  
  )
}

export default Skills