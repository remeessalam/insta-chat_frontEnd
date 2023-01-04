import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import allpost from '../../services/allpost'
import allusers from '../../services/allusers'
// import follow from '../../services/follow'
// import unfollow from '../../services/unfollow'
import Post from '../post/post'
import Friend from '../suggestion/suggestion'
import { useSelector } from 'react-redux';


function Content() {

    const [post, setPost] = useState([])

    const [users, setUsers] = useState([])

    // const [liked, setLiked] = useState(true)

    const refresh = useSelector(state => state.refresh.refresh)

    useEffect(() => {
        allpost().then((data) => {
            setPost(data.data.post)
            // console.log(data, 'home useEffect')
        })
        allusers().then((data) => {
            // console.log(data.data.user, 'user data"s multiple')
            setUsers(data.data.user)
        })
    }, [refresh])

    const IsBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })

    return (

        < div className='flex flex-col w-full  h-screen  m-1 p-2' >
            {/* STORY DIV */}
            < div className='flex  h-28 w-full rounded-md border  border-slate-300' >

                <div className='flex justify-start overflow-x-auto scrollbar-hide gap-1 mt-2 ml-2'>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>
                    <div className='flex flex-col w-16 m-1'>
                        <img className="rounded-full aspect-square border-2 border-red-400" src="https://res.cloudinary.com/domqbgvw6/image/upload/v1669275021/tether/tklrjgkrbuvmpoonswvg.png" alt="" />
                        <h1 className='truncate h-8 font-normal text-xs'>remees salam</h1>
                    </div>

                </div>
            </div >

            {/* POST AND FRIEND DIV  */}

            < div className='flex ml-4 mr-4 h-5/6'>
                
                {/* POST DIV */}

                < div className='flex flex-col mx-auto md:w-3/4 p-2  w-full   overflow-x-auto scrollbar-hide h-100%   ' >
                    {
                        post.map((post) => <Post key={post._id} e={post} />)
                    }
                </div >

                {/* FRIEND DIV */}

                {IsBigScreen &&
                    < div className='flex flex-col   w-1/4  h-100%  m-2 overflow-y-auto scrollbar-hide' >
                        <h1 className="ml-3 mt-2 text-sx font-semibold text-gray-500">Suggestions For You</h1>
                        {
                            users?.map((obj) => <Friend key={obj._id} frnd={obj} />)
                        }
                    </div >
                }
            </div >
        </div >
    )

}

export default Content






