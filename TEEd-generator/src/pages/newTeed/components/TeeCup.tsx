import { SquaresPlusIcon } from '@heroicons/react/24/outline'

function TeeCup() {
    return (
        <button
            aria-label='add-tee'
            className='rounded-full border-dashed border-primary w-[100px] h-[100px] border-2 flex'
        >
            <SquaresPlusIcon className='h-8 w-8 stroke-primary m-auto self-center cursor-pointer' />
        </button>
    )
}

export default TeeCup
