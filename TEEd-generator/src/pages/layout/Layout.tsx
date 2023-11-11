import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

function Layout() {
    return (
        <div className='grid grid-rows-1 h-screen grid-cols-12 grid-flow-col gap-4'>
            <div className='col-span-1 self-center h-[80vh]'>
                <SideBar />
            </div>
            <main className='col-span-11 p-2 h-screen'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
