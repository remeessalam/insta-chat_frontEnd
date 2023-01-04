import Profile from '../components/profile/profile'
import SideBar from '../layout/sideBar'




function ProfilePage() {
    return (
        <>
            <SideBar component={<Profile />} />
        </>
    )
}


export default ProfilePage