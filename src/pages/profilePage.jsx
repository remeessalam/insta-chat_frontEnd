import Profile from '../components/profile/profile'
import SideBar from '../layout/sideBar'




function profilePage() {
    return (
        <>
            <SideBar component={<Profile />} />
        </>
    )
}


export default profilePage