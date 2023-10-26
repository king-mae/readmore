import '../App.css'
import logo from "../assets/Logo.svg"

function NavBar() {
  return (
    <div className=' w-full h-20  bg-[#091643] items-center flex'>
      <div className="container flex justify-between p-5 mx-auto">
        <div >
          <img src={logo} alt="logo" />
        </div>
        <div className='flex items-center space-x-7'>
          <button>
            <h1 className='text-2xl hover:brightness-50'>Log In</h1>
          </button>
          <button className='bg-tertiary rounded-full px-9 py-2.5 transition hover:brightness-50 hidden sm:block'>
            <h1 className='text-3xl font-extrabold text-white '>
              Get Started
            </h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
