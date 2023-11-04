import {
    HomeModernIcon,
    PaintBrushIcon,
    QueueListIcon,
    WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
        ? 'py-3 my-2 cursor-pointer bg-primaryVariant'
        : 'py-3 my-2 cursor-pointer'
function SideBar() {
    return (
        <div className='flex flex-col flex-1 bg-primary rounded-md  w-[70px] ml-4 justify-around'>
            <NavLink aria-label='dashboard' to='' className={navClass}>
                <HomeModernIcon className='h-6 w-6 stroke-onPrimary m-auto' />
            </NavLink>
            <NavLink aria-label='new-teed' to='new-teed' className={navClass}>
                <PaintBrushIcon className='h-6 w-6 stroke-onPrimary m-auto' />
            </NavLink>
            <NavLink
                aria-label='teeds-list'
                to='teeds-list'
                className={navClass}
            >
                <QueueListIcon className='h-6 w-6 stroke-onPrimary m-auto' />
            </NavLink>
            <NavLink aria-label='settings' to='settings' className={navClass}>
                <WrenchScrewdriverIcon className='h-6 w-6 stroke-onPrimary m-auto' />
            </NavLink>
        </div>
    )
}

export default SideBar
