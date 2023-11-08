import '../App.css'
import { books } from '../data.js'

function MostLiked() {
    let likes = [];
    for (let i = 0; i<books.length; i++){
        likes[i] = books[i];
    }

    for(let i = likes.length-1; i>0; i--){
        for(let j=likes.length-1; j>0; j--){
            if(likes[j].Rating > likes[j-1].Rating){
                let tmp = likes[j]
                likes[j] = likes[j-1]
                likes[j-1] = tmp
            }
        }
    }

    return (
        <div className='container px-10 mx-auto py-7'>
            <h1 className='text-2xl font-bold pb-2.5'>
                Most Liked
            </h1>
            <div className='flex space-x-5 overflow-x-scroll no-scrollbar '>
                {likes.map((item, index) => (
                    <div key={index} className='h-52 w-36 shrink-0 hover:brightness-50'>
                        <img src={item.Image} alt="book" className='w-full h-full rounded-xl'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MostLiked