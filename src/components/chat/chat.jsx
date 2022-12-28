import { useEffect, useState } from 'react'
// import { useMediaQuery } from 'react-responsive'
import getfollowing from '../../services/getfollowers'





export default function Chat({ Socket }) {
    const [user, setUser] = useState([])
    const [chat, setChat] = useState([])
    const [topic, setTopic] = useState([])
    // const IsBigScreen = useMediaQuery({ query: '(min-width: 1024px)' })
    useEffect(() => {
        console.log(chat, 'chat chateeeee')
    }, [chat])
    useEffect(() => {
        getfollowing().then((data) => {
            console.log(data.data.user)
            setUser(data.data.user)
        })
    }, [])
    const sendChat = () => {
        let chat = {
            // roomId: friendDetails.roomId,
            text: topic,
            time: new Date(),
            // author: user.userId
        }
        Socket.emit('client-to-server', chat)
        // setChatList([chat, ...chatList])
        setTopic('')
    }


    return (
        <div className=" w-full h-full p-4">
            <div className="flex flex-wrap w-full h-full max-h-[709px]  border border-gray-100">

                <div className="bg-white md:w-1/4 max-h-full w-full overflow-hidden border-r">
                    <div className="absalute w-full  h-16  border-b">
                        <div className="flex felx-row items-center h-16 ">
                            <div className=" m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14">
                                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div className="w-full ">
                                <h1 className="text-md font-semibold text-black">{user[0]?.name}</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col max-h-full p-2  overflow-y-auto scrollbar-hide'>


                        {
                            user[0]?.following?.map((obj) => {
                                return (

                                    <div key={obj._id} className="flex felx-row items-center h-16 " onClick={() => setChat([obj])}>
                                        <div className=" m-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14">
                                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="w-full ">
                                            <h1>{obj.name}</h1>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                {
                    !chat?.length ?
                        <div className='grid w-3/4 h-[700px] bg-white  content-center' >
                            <div>

                                <h1 className="text-center">Your Messages</h1>
                            </div>
                        </div>
                        :
                        <div className="w-3/4 bg-white md:visible invisible">
                            <div className="flex flex-wrap w-full h-16  border-b">
                                <div className="flex felx-row items-center w-1/4 h-16 ">
                                    <div className=" m-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14">
                                            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="w-full ">
                                        <h1>{chat[0].name}</h1>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/2 p-5 ">
                                    <h1 className="text-center">online</h1>
                                </div>
                            </div>
                            <div className="w-full h-[590px]">
                            </div>
                            <div className="flex justify-center w-full  bg-white h-[53px] pb-2">
                                <div className='flex flex-row w-3/4 max-h-[44px] border border-gray-200 rounded-full overflow-hidden'>
                                    <input className='w-full h-full focus:outline-0 ml-4' type="text" placeholder='Message...' value={topic} onChange={(e) => setTopic(e.target.value)}/>
                                    <button className="mr-3 text-sx font-semibold text-blue-400 " onClick={sendChat}>send</button>
                                </div>
                            </div>
                        </div>
                }

            </div>
        </div>
    )
}