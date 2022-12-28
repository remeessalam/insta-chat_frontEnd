import { Fragment, useRef, useState, memo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import uploadImage from '../../services/imageUpload'
import InsertPost from '../../services/uploadPost'


export default memo(function Modal({ open, setOpen }) {

    const [urls, setUrls] = useState([])

    const [images, setImages] = useState([])

    const cancelButtonRef = useRef(true);

    function uploadPhoto(e) {
        const files = Object.values(e.target.files)
        console.log(files, 'kkkkk');
        uploadImage(files).then((data) => {
            setUrls(data)
            console.log(data)
        })

        files.forEach((img) => {
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = (readerEvent) => {
                setImages((images) => [...images, readerEvent.target.result]);
            };
        });
    }
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>


                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 w-full text-center items-center sm:p-0 ">

                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:max-w-xl p-5">
                            <div className="bg-white p-16  w-full h-full ">
                                <div className="sm:flex sm:items-start ">
                                    <div as="h3" className="text-lg font-medium leading-6 text-gray-900 fixed">
                                        <div className=''>
                                            <button
                                                type="button"
                                                className="inline-flex w-full fixed top-0 left-0 right-0 p-4 text-base font-medium text-black  "
                                                onClick={() => {
                                                    setImages([])
                                                    setOpen(false)
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                                </svg>

                                            </button>
                                        </div>
                                    </div>
                                    {
                                        images && images.length ? (<div className='border-2 p-2  rounded-md'>
                                            <div className='flex justify-end border-b-2 '>
                                                <button className=' m-1  text-sky-500 text-sm font-bold' onClick={() => {
                                                    InsertPost(urls)
                                                    setOpen(false)
                                                    setImages([])
                                                }}
                                                >Share</button>
                                            </div>
                                            <div className='flex  justify-start mx-auto w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide'>
                                                {
                                                    images.map((img) => (
                                                        <div className='min-w-full mx-auto min-w-full snap-always snap-center'>
                                                            <img className='m-3 max-h-96' src={img} alt="" />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>) :
                                            (<div className="mt-3 text-center  w-full h-full" >
                                                <div className="max-h-full max-w-full p-4 border flex flex-col m-2 ">
                                                    <h1 >insert image</h1>

                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer p-3 rounded-md bg-sky-600 font-medium text-white  hover:pointer"
                                                        >
                                                            <span>Select photos and videos</span>
                                                            <input id="file-upload" name="file-upload" type="file" multiple className="sr-only" onChange={uploadPhoto} />
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>)
                                    }
                                </div>
                            </div>
                        </Dialog.Panel>

                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
})





