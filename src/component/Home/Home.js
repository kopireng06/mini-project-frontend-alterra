import './Home.css'
import pp2 from './pp2.jpeg'
import { Link } from 'react-router-dom'

const Home = ()=>{
    return(
        <div className="h-screen lg:container mx-auto flex justify-center items-center">
            <div className="w-10/12 flex items-center md:flex-row flex-col-reverse">
                <div className="flex-1">
                    <h1 className="mt-5 md:mt-0 text-lg md:text-2xl lg:text-3xl font-bold nunito line-height-introduction">
                        Hi 👋 I'm Naufal, and this is my blog. Here, I share through writing my experience as a frontend engineer 
                        and everything I'm learning about on React, Javascript, CSS, Serverless, and Testing.
                    </h1>
                    <Link to="/blog" className="block shadow w-24 md:w-28 text-sm md:text-lg mt-5 md:mt-10 p-2 md:p-2 text-center
                    text-white bg-blue-linear rounded-lg font-semibold ml-auto md:ml-0">
                        My Blog
                    </Link>
                </div>
                <figure className="w-56 md:w-64 h-56 md:h-72 rounded-full md:rounded-2xl overflow-hidden md:ml-20">
                    <img src={pp2} className="object-top object-cover h-full w-full" alt="naufal ghani achmani" />
                </figure>
            </div>
        </div>
    )
}

export default Home;