import { LogOut } from 'lucide-react'
import UserItems from './UserItems'

const Sidebar = () => {
  return (
    <>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm p-4'>
        <div className='pb-2 flex justify-between items-center'>
          <h1 className='font-bold'>MockYard</h1>
        </div>
        <div className='grow flex flex-col gap-6 mt-5'>
          <UserItems />
        </div>
        <div className='flex items-center gap-5 bg-slate-500 text-white py-3 justify-center rounded-lg'>
          <LogOut /> Logout
        </div>
      </nav>
    </>
  )
}

export default Sidebar
