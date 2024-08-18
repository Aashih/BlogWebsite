import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

export const Blogs = () => {
    //Step3- Consume Data 

    const {post,loading} = useContext(AppContext);
  
    return (
    <div className='w-11/12 h-screen max-w-[650px] py-5 flex flex-col gap-y-8 mt-[66px] mb-[70px] justify-center items-center'>
        {
            loading ? 
            (<Spinner/>) : 
            (
                post.length === 0 ? 
                
                (<div>No Post Found</div>):
                    (post.map((p) => (
                        <div key={p.id}>
                            <p className=' font-bold text-lg'>{p.title}</p>
                            <p className='text-[13px]'>
                                By <span className=' italic'>{p.author}</span> on <span className=' font-bold underline'>{p.category}</span>
                            </p>
                            <p className='text-[12px] pt-1'>Posted on {p.date}</p>
                            <p className='text-[13px] mt-[10px]'>{p.content}</p>
                            <div className='flex gap-x-3'>
                                {p.tags.map((tag) => {
                                    return <span className='text-blue-500 underline font-bold text-[10px]'>{`#${tag}`}</span>
                                })}
                            </div>
                        </div>
                    )))
            ) 
        }
    </div>
  )
}
