

function LeftOvers() {
    return (
        <>
            <div className=" flex    rounded-3xl w-3/5 ">
                <div className=" flex justify-between  space-x-2 pl-0 py-0  rounded-lg ">
                    <div className="font-semibold text-gray-800 text-xs sm:text-sm md:text-sm lg:text-2xl 2xl:text-3xl   pl-0  md:py-1 sm:tracking-tight 2xl:mr-10  ">
                        <div className="">Остатки сформированы на 01.04.2023г.</div>
                    </div>
                    <div className="font-semibold  px-4 py-2 flex bg-gray-700 rounded-3xl ">
                        <svg className="h-7 w-6  pb-0 text-gray-700" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>

                        <div className="text-gray-200  pt-1 xl:text-sm text-xs">Инструкции</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftOvers