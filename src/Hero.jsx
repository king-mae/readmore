import './App.css'
import illustration from './assets/illustration.svg'
import check from './assets/check.svg'

function Hero() {
    return (
        <div className=' bg-primary'>
            <div className="container items-center justify-between p-5 mx-auto overflow-hidden xl:h-screen lg:flex h-max">
                <div className='self-center'>
                    <h1 className='mb-12 text-6xl font-black text-white'>Why ReadMore?</h1>
                    <ul className='mb-12 text-3xl text-white'>
                        <li className='flex'>
                            <img src={check} alt="check" className='pr-[6.3px]' />
                            Excercise Your Brain
                        </li>
                        <li className='flex'>
                            <img src={check} alt="check" className='pr-[6.3px]' />
                            Be Smarter
                        </li>
                        <li className='flex'>
                            <img src={check} alt="check" className='pr-[6.3px]' />
                            Achieve Inner Peace
                        </li>
                        <li className='flex'>
                            <img src={check} alt="check" className='pr-[6.3px]' />
                            Enjoy Your Time
                        </li>
                    </ul>
                    <button className='bg-tertiary rounded-full px-9 py-2.5 w-full transition hover:brightness-50 mb-12 '>
                        <h1 className='text-3xl font-extrabold text-white'>
                            Get Started
                        </h1>
                    </button>
                </div>
                <div>
                    <img src={illustration} alt="illustration" className='w-full h-full' />
                </div>
            </div>

        </div>
    )
}

export default Hero