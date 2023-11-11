import {
    PhotoIcon,
    VideoCameraIcon,
    FaceSmileIcon,
    ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline'
import EmojiPicker from 'emoji-picker-react'
import {
    ReactElement,
    useState,
    CSSProperties,
    useCallback,
    ChangeEvent,
} from 'react'

function Tee(): ReactElement {
    const [noImage, setNoImage] = useState<string>()
    const [yesImage, setYesImage] = useState<string>()
    const [question, setQuesttion] = useState<string>('')
    const [sureImage, setSureImage] = useState<string>()
    const [mainImage, setMainImage] = useState<string>()

    return (
        <div className='flex justify-between pr-6 h-5/6'>
            <div className='self-center w-20 h-[90%]'>
                <h4 className='text-center'>NO</h4>
                <div className='max-w-[100%] max-h-[100%] self-center mt-5'>
                    {noImage && (
                        <img className='h-full object-contain' src={noImage} />
                    )}
                </div>

                <TeeReflect
                    setImage={setNoImage}
                    id='no'
                    className='flex-col border-error border-dashed rounded-md border-2 p-2 '
                />
            </div>
            <div className='flex flex-col h-full justify-around flex-1 text-center'>
                <div>
                    <h4>Your Text</h4>
                    <input
                        aria-label='tee-description'
                        type='text'
                        value={question}
                        onChange={(event) => setQuesttion(event.target.value)}
                        className='border-2 border-primary rounded-md w-2/3 h-10'
                    ></input>
                </div>
                <div className='max-w-[40%] max-h-[40%] self-center mt-5'>
                    {mainImage && (
                        <img className='object-contain' src={mainImage} />
                    )}
                </div>

                <TeeReflect
                    className='w-[25%] m-auto flex-1'
                    id='main'
                    setImage={setMainImage}
                />

                <div className='w-[20%] h-fit m-auto'>
                    <h4 className='text-center'>Not Sure</h4>
                    <div className='max-w-[40%] max-h-[40%] self-center mt-5'>
                        {sureImage && <img src={sureImage} />}
                    </div>
                    <TeeReflect
                        setImage={setSureImage}
                        id='sure'
                        className='border-grayDark border-dashed rounded-md border-2'
                    />
                </div>
            </div>
            <div className='self-center w-20 h-[90%]'>
                <h4 className='text-center'>YES</h4>
                {yesImage && <img src={yesImage} />}

                <TeeReflect
                    setImage={setYesImage}
                    id='yes'
                    className='flex-col border-secondary border-dashed rounded-md border-2 p-2'
                />
            </div>
        </div>
    )
}

type TeeReflectProps = {
    style?: CSSProperties
    className?: string
    setImage: React.Dispatch<React.SetStateAction<string | undefined>>
    id: string
}

function TeeReflect(props: TeeReflectProps): ReactElement {
    const [showEmoji, setShowEmoji] = useState(false)
    const handleEmoji = useCallback(() => setShowEmoji(!showEmoji), [showEmoji])
    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedImage = event.target.files?.[0]
        const imageUrl = URL.createObjectURL(selectedImage!)
        props.setImage(imageUrl)
    }
    return (
        <div
            className={`flex cursor-pointer gap-4  ${props.className}`}
            style={props.style}
        >
            <label
                data-testid={`${props.id}-image-file`}
                htmlFor={`${props.id}-image-file`}
                className='w-full cursor-pointer self-center'
            >
                <PhotoIcon className='stroke-primary w-5/6' />
            </label>
            <input
                id={`${props.id}-image-file`}
                name='image-file'
                type='file'
                className='hidden'
                onChange={handleImageUpload}
                accept='image/*'
            />
            <label
                htmlFor='video-file'
                className='w-full cursor-pointer self-center'
            >
                <VideoCameraIcon className='stroke-primary w-5/6' />
            </label>
            <input
                id='video-file'
                name='video-file'
                type='file'
                className='hidden'
                accept='video/*'
            />

            {showEmoji && (
                <div className='absolute top-0'>
                    <EmojiPicker />
                </div>
            )}
            <FaceSmileIcon
                className='stroke-primaryVariant w-5/6'
                onClick={handleEmoji}
            />
            <ChatBubbleBottomCenterIcon className='stroke-error w-5/6' />
        </div>
    )
}

export default Tee
