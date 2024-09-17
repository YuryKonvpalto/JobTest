


function SmallButton() {
    return (
        <>
            <div className=" bg-blue-600 rounded-3xl  mb-4 px-4 py-2 ">
                <div className="flex justify-center text-gray-200 w-full  px-2 py-5 font-semibold">
                    <div className='pt-0.5  px-1  '>
                        <svg className="h-6 w-6  " fill="white" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div className=' text-xl  '>
                        <button className="hover:underline">Связаться с нами</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SmallButton