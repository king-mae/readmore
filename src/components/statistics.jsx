import '../App.css'
import books from '../assets/books.svg'
import users from '../assets/users.svg'
import swords from '../assets/swords.svg'

function statistics() {
    return (
        <div className='bg-secondary'>
            <div className="container flex flex-col py-16 mx-auto text-black">
                <h1 className='text-6xl font-black text-center'> Read To Your Heart's Content</h1>

                <div className='flex flex-col items-center my-12 lg:justify-between items lg:flex-row'>
                    <div className="bg-primary w-11/12 sm:w-[473px] h-[253px] rounded-[50px] mb-12 lg:mb-0 lg:mr-12 flex flex-col items-center justify-center">
                        <img src={books} alt="" className='w-20 h-20' />
                        <h1 className='text-5xl font-bold text-white'> 100K+ Books</h1>
                        <p className='text-2xl font-light text-white '>The Largest Online Library</p>
                    </div>
                    <div className="bg-primary w-11/12 sm:w-[473px] h-[253px] rounded-[50px] mb-12 lg:mb-0 lg:mr-12 flex flex-col items-center justify-center">
                        <img src={users} alt="" className='w-20 h-20' />
                        <h1 className='text-5xl font-bold text-white'> 50K+ Users</h1>
                        <p className='text-2xl font-light text-white '>Get To See What Others Read</p>
                    </div>
                    <div className='bg-primary w-11/12 sm:w-[473px] h-[253px] rounded-[50px] mb-12 lg:mb-0 flex flex-col items-center justify-center'>
                        <img src={swords} alt="" className='w-20 h-20' />
                        <h1 className='text-5xl font-bold text-white'> 100+ Genres</h1>
                        <p className='text-2xl font-light text-white '>Read Any Type You Like</p>
                    </div>
                </div>

                <button className='bg-tertiary rounded-full px-9 py-2.5  transition hover:brightness-50  w-fit self-center'>
                    <h1 className='text-3xl font-extrabold text-white '>
                        Get Started
                    </h1>
                </button>
            </div>
        </div>
    )
}

export default statistics;