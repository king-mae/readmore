import '../App.css'
import { books } from '../data.js'

function AllBooks() {

    return (
        <div className='container px-10 mx-auto py-7'>
            <h1 className='text-2xl font-bold pb-2.5'>
                All Books
            </h1>
            <div className='flex space-x-5 overflow-x-scroll no-scrollbar'>
                {books.map((item, index) => (
                    <div key={index} className=' h-52 w-36 shrink-0 hover:brightness-50'>
                        <img src={item.Image} alt="book" className='w-full h-full rounded-xl'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllBooks