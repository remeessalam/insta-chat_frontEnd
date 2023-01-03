import { useEffect, useState } from 'react'
import clickLike from '../../services/like'
import Lastseen from '../time/lastseen'
import jwt_decode from "jwt-decode";
import { refreshReducer } from '../../gobalState/rerenderSlice';
import { useDispatch } from 'react-redux';
import addComment from '../../services/addcomment'
import Popup from '../popup/popup'

function Post({ e }) {

    const [liked, setLiked] = useState()
    const [likedEffect, setLikedEffect] = useState(false)

    const [comment, setComment] = useState()

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

    const token = localStorage.getItem('userToken')
    const decoded = jwt_decode(token)

    const like = (postId) => {
        setLikedEffect(true)
        setTimeout(() => {
            setLikedEffect(false)
        }, 200)
        clickLike(postId).then((data) => {
            data.data.msg === 'Liked' && setLiked(false)
            data.data.msg === 'Unliked' && setLiked(true)
            setLiked(!liked)
            dispatch(refreshReducer())
        })
    }

    useEffect(() => {
        e.Likes.includes(decoded.userId) ? setLiked(false) : setLiked(true)
    }, [decoded.userId, e])

    const Comments = (postId) => {
        addComment(postId, comment).then(data => {
            setComment('')
            dispatch(refreshReducer())
        })
    }

    return (
        <div key={e._id} className=" flex flex-col  mx-auto rounded-md border border-slate-300 lg:w-3/4 w-full mb-3 drop-shadow-l">
            <div className="flex justify-start min-h-18 mt-2">
                <img className="ml-3 rounded-full w-9 h-9 object-cover" src={e.image[0]?.url} alt="" />
                <div className='flex-col'>
                    <h1 className="text-justify text-sm ml-3">{e.user.name}</h1>
                    <div className="flex flex-row ml-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>



                        <h1 className="text-justify ml-3 text-sm"><Lastseen time={e.createdAt} /> ago</h1>
                    </div>
                </div>
            </div>
            <div className="" >
                <div className='flex overflow-x-auto snap-x snap-mandatory scrollbar-hide bg-black' onDoubleClick={() => { like(e._id) }}
                // onClick={() => {
                //     setOpen(!open)
                // }}
                >
                    {e.image.map((obj,i) => {
                        return (

                            <div key={i} className=' min-w-full snap-always snap-center'>

                                <img className='flex h-96  mx-auto object-cover ' src={obj.url} alt="" />
                            </div>

                        )
                    })
                    }

                </div>

            </div>
            < Popup open={open} setOpen={setOpen} posts={e} />
            <div className="flex flex-col justify-start border-t  p-3">
                <div className="flex flex-row ">
                    {liked ?

                        <div className={`ml-2 flex flex-row cursor-pointer `} onClick={() => { like(e._id) }}>
                            {/* <FavoriteBorderRoundedIcon /> */}
                            {/* <h1>like</h1> */}
                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>


                        </div>
                        :
                        <div className={`ml-2 flex flex-row cursor-pointer ${likedEffect ? 'scale-150' : ""} `} onClick={() => {
                            like(e._id)
                        }}>
                            {/* <FavoriteIcon /> */}
                           
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#ed4956" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>



                            {/* <h1>unlike</h1> */}

                        </div>
                    }
                    <div className="ml-2 flex flex-row cursor-pointer" onClick={() => {
                        setOpen(!open)

                    }}>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>

                        {/* <h1>comment</h1> */}

                    </div>
                </div>
            </div>
            <div className='flex justify-start pl-7'>
                <h1 className='text-sx font-normal pr-5'>{e.Likes.length} likes</h1>
                <h1 className='text-sx font-normal cursor-pointer' onClick={() => setOpen(!open)}>{e.comments.length} comments</h1>
            </div>
            <div className='flex flex-row justify-start pl-7'>
                <h1 className='text-sx font-medium'>{e.user.name} </h1>
                <p className='pl-6 pb-4 font-light text-sx'>{e.caption}</p>
            </div>
            <div className='flex flex-row justify-start pl-7 border-y p-3 w-full'>
                <div className='w-3/4'>
                    <input className='w-full focus:outline-0' type="text" placeholder='Add a comment...' value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>
                <div className='w-1/4 flex justify-end' >
                    {comment ?
                        <button className='text-sx font-semibold text-blue-400 ' onClick={() => Comments(e._id)}>post</button>
                        : <p className='text-sx font-semibold text-blue-200 '>post</p>
                    }
                </div>

            </div>
        </div >
    )
}

export default Post


