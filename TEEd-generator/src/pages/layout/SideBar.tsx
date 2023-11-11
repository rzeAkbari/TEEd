import {
    HomeModernIcon,
    PaintBrushIcon,
    QueueListIcon,
    WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
        ? 'py-3 my-2 cursor-pointer bg-background stroke-onPrimary'
        : 'py-3 my-2 cursor-pointer'
const navIcon = (isActive: boolean) =>
    isActive
        ? 'h-6 w-6 stroke-primary m-auto'
        : 'h-6 w-6 stroke-onPrimary m-auto'
function SideBar() {
    return (
        <div className='flex flex-col flex-1 h-full shadow-lg bg-primary rounded-md  w-[70px] ml-4 justify-start'>
            <NavLink aria-label='dashboard' to='' className={navClass}>
                {({ isActive }) => (
                    <HomeModernIcon className={navIcon(isActive)} />
                )}
            </NavLink>
            <NavLink aria-label='new-teed' to='new-teed' className={navClass}>
                {({ isActive }) => (
                    <PaintBrushIcon className={navIcon(isActive)} />
                )}
            </NavLink>
            <NavLink
                aria-label='teeds-list'
                to='teeds-list'
                className={navClass}
            >
                {({ isActive }) => (
                    <QueueListIcon className={navIcon(isActive)} />
                )}
            </NavLink>
            <NavLink aria-label='settings' to='settings' className={navClass}>
                {({ isActive }) => (
                    <WrenchScrewdriverIcon className={navIcon(isActive)} />
                )}
            </NavLink>
        </div>
    )
}

export default SideBar
