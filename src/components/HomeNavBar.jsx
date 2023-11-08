import '../App.css'
import logo from "../assets/Logo.svg"

function HomeNavBar() {
  return (
    <div className=' w-full h-20  bg-[#091643] items-center flex'>
      <div className="container flex justify-between p-5 mx-auto">
        <div >
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default HomeNavBar
