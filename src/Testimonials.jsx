import './App.css'
import james from './assets/James.png'
import ryan from './assets/Ryan.png'
import tim from './assets/Tim.png'

function testimonials() {
    return (
        <div className='bg-accent'>
            <div className="container flex flex-col py-16 mx-auto text-black ">
                <h1 className='text-6xl font-black text-center'>Trusted By The Best Auth</h1>

                <div className='flex flex-col items-center sm:justify-between items 2xl:flex-row'>
                    <div className='flex flex-col items-center mb-14'>
                        <img src={james} alt="" className='relative top-[132px] ' />
                        <div className='w-3/4 sm:w-[477px] lg:h-[420px] px-6 pt-[132px] bg-secondary rounded-[60px] text-justify'>
                            <p className='font-normal leading-7'>“Whether you want to learn a new skill, improve your habits, or escape into a fictional world, you’ll find something that suits your taste and interest. ReadMore also has a user-friendly interface, a fast and secure payment system, and a responsive customer service. I highly recommend ReadMore to anyone who loves reading and learning. It’s a great resource for personal and professional growth.”</p>
                            <h1 className='pt-4 pb-12 text-4xl font-black text-center'>James Clear</h1>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mb-14'>
                        <img src={ryan} alt="" className='relative top-[132px] ' />
                        <div className='w-3/4 sm:w-[477px] lg:h-[420px] px-6 pt-[132px] bg-secondary rounded-[60px] text-justify'>
                            <p className='font-normal leading-7'>“ReadMore is a valuable resource for anyone who wants to discover new ideas, learn from the best minds, and improve themselves. It has a wide range of books on various topics and genres, from business and marketing to philosophy and history. It also has a simple and elegant design, a secure and easy payment system, and a friendly and helpful customer service.””</p>
                            <h1 className='pt-4 pb-12 text-4xl font-black text-center'>Ryan Holiday</h1>
                        </div>
                    </div>
                    <div className='flex flex-col items-center mb-14'>
                        <img src={tim} alt="" className='relative top-[132px] ' />
                        <div className='w-3/4 sm:w-[477px] lg:h-[420px] px-6 pt-[132px] bg-secondary rounded-[60px] text-justify'>
                            <p className='font-normal leading-7'>““I know how valuable it is to have access to a library of books that can help you achieve your goals, expand your horizons, and enrich your life. That’s why I love ReadMore, which offers a vast collection of books on various topics and genres. Whether you want to master a new skill, optimize your performance, or explore a new perspective, you’ll find something that sparks your curiosity and interest.””</p>
                            <h1 className='pt-4 pb-12 text-4xl font-black text-center'>Tim Ferris</h1>
                        </div>
                    </div>
                </div>

                <button className='bg-tertiary rounded-full px-9 py-2.5  transition hover:brightness-50 mb-12 w-7/12 self-center'>
                    <h1 className='text-3xl font-extrabold text-white '>
                        Get Started
                    </h1>
                </button>
            </div>


        </div>
    )
}

export default testimonials