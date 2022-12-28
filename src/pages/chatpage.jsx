import SideBar from "../layout/sideBar";
import Chat from '../components/chat/chat'

export default function Chatpage (){

    return(
        <SideBar component={<Chat />}/>
    )
}