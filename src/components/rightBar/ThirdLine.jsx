
function ThirdLine(props) {

    function handleUpdateFilterBarcode(value) {
        props.setFilterBarcode(value)
    }

    function handleUpdateFilterBrand(value) {
        props.setFilterBrand(value)
    }

    return (

        <>
            <div className="flex   space-x-2 w-3/5 ">

                <div className=" flex justify-between space-x-4 px-1 bg-white rounded-2xl  ">
                    <div className=" flex  px-0 py-2  rounded-lg ">
                        <div className="font-semibold text-gray-700  text-base  px-2 py-4">
                            <div className="">Баркод</div>
                        </div>
                        <input
                            onChange={(event) =>
                                handleUpdateFilterBarcode(event.target.value, "barcode")
                            }
                            className=" text-gray-900 font-medium bg-gray-100 text-sm   rounded-2xl py-2 px-1 text-center" type="number" name="name" placeholder="656576576598789" />
                    </div>
                </div>
                <div className=" flex justify-between space-x-1 px-1 bg-white rounded-2xl  ">
                    <div className=" flex  px-0 py-2  rounded-lg ">
                        <div className="font-semibold text-gray-700  text-base  px-2 py-4">
                            <div className="">Бренд</div>
                        </div>
                        <input
                            onChange={(event) =>
                                handleUpdateFilterBrand(event.target.value, "brand")
                            }
                            className=" text-gray-900 font-medium bg-gray-100 text-sm  rounded-2xl py-2 px-1 text-center" type="text" name="name" placeholder="ДсМдлодлдлСжддж" />
                    </div>
                </div>


                <div className="  px-1 bg-white rounded-2xl  ">
                    <div className="   px-0 py-1  rounded-lg ">
                        <div className="flex pt-2">
                            <div className="pt-3 pr-2">Размер</div>
                            <input className="d py-3 max-w-14  text-gray-900  bg-gray-100 rounded-full text-sm text-center " type="text" placeholder="44" />
                        </div>
                    </div>
                </div>
                <div className="flex  justify-between space-x-1 px-1 bg-white rounded-2xl  ">
                    <div className=" flex flex-col  px-0 py-2  rounded-lg ">
                        <div className="font-semibold text-gray-400  text-sm  px-4 py-1">
                            <div className="">Категория</div>
                        </div>
                        <div className='flex flex-row px-4 py-0'>
                            <div className=''>
                                <button className="hover:underline">Джинсы</button>
                            </div>
                            <div className='  pt-1 '>
                                <svg className="h-4 w-4 text-gray-800" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M18 15l-6-6l-6 6h12" transform="rotate(180 12 12)" /></svg>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ThirdLine