import '../App.css'
import book from '../assets/book.png'

function AllBooks() {
    return(
        <div className='container px-10 mx-auto py-7'>
            <h1 className='text-2xl font-bold pb-2.5'>
                AllBooks
            </h1>
            <div className='flex space-x-5 overflow-x-scroll no-scrollbar'>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                <div className='h-52 w-36 shrink-0'>
                    <img src={book} alt="book" className='w-full h-full'/>
                </div>
                
            </div>
        </div>
    )
}

export default AllBooks