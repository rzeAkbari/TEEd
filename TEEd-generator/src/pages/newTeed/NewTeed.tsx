import Tee from './components/Tee'
import TeeCup from './components/TeeCup'

function NewTeed() {
    return (
        <section data-testid='new-teed' className='h-full'>
            <TeeCup />
            <Tee />
        </section>
    )
}

export default NewTeed
