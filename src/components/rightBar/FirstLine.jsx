


function FirstLine() {
    return (
        <>
            <div className=" flex justify-between space-x-1 px-1 bg-white rounded-3xl w-2/3 ">
                <div className=" flex justify-start space-x-1 px-3 py-2  rounded-lg ">
                    <div className="font-semibold text-gray-700  text-sm 2xl:text-xl  px-4 py-4 flex">
                        <svg className="h-7 w-10 pr-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div className="">Иванов И.И.</div>
                    </div>
                    <div className="font-semibold text-gray-700  text-sm 2xl:text-xl  px-4 py-4 flex bg-blue-100 rounded-3xl ">
                        <svg className="h-7 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <div className="text-blue-400">Тариф до 15.04.2024</div>
                    </div>
                </div>


                <div className="flex px-3 py-4 pt-4 space-x-2">
                    <div className="  px-2  rounded-full bg-white border-2 border-gray-600">
                        <div className="  font-bold text-gray-700  text-sm py-3 px-3    ">Выйти
                        </div>
                    </div>
                    <div className=" flex   px-2  rounded-full bg-orange-500 text-gray-100">
                        <div className="text-sm pt-3 pl-2  ">О нас
                        </div>
                        <svg className="h-7 w-6  pt-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="5" y1="12" x2="19" y2="12" />  <line x1="15" y1="16" x2="19" y2="12" />  <line x1="15" y1="8" x2="19" y2="12" /></svg>
                    </div>

                </div>
            </div>
        </>
    )
}

export default FirstLine