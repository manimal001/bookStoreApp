import 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout=()=>{
        try {
            
            setAuthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem("Users");
            toast.success("Logout successfully!");
            setTimeout(() => {   
            window.location.reload();
          }, 3000);
            
        } catch (error) {
            toast.error("Error: " + error.message);
            setTimeout(() =>{}, 2000);
        }
    }
  return (
    <div>
        <button className='px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout