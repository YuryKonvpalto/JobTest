// import React from 'react';

import LeftCardOne from "./leftBar/LeftCardOne"
import LeftCardTwo from "./leftBar/LeftCardTwo"
import SmallButton from "./leftBar/SmallButton"
import FirstLine from "./rightBar/FirstLine"
import FourthLine from "./rightBar/FourthLine"
import LeftOvers from "./rightBar/LeftOvers"
import CreateBtn from "./rightBar/rightBarBtns/CreateBtn"
import ExportBtn from "./rightBar/rightBarBtns/ExportBtn"
import ThirdLine from "./rightBar/ThirdLine"
import MainTable from "./table/MainTable"
import { useState } from "react"




function MainWindow() {

    const [click, setClick] = useState(false)
    const [clear, setClear] = useState(false)
    const [clickExport, setClickExport] = useState(false)
    const [clickCreate, setClickCreate] = useState(false)
    const [filterBarcode, setFilterBarcode] = useState('')
    const [filterBrand, setFilterBrand] = useState('')


    return (



        <>
            <div className=" bg-gray-200 min-h-screen">

                <div className="flex flex-row pt-24 px-10 pb-4">
                    <div className=" mr-6 w-1/5 ">
                        <LeftCardOne></LeftCardOne>
                        <LeftCardTwo></LeftCardTwo>
                        <SmallButton></SmallButton>
                    </div>


                    <div className=" w-full pl-6 flex-col space-y-8">
                        <FirstLine></FirstLine>
                        <LeftOvers></LeftOvers>
                        <ThirdLine setFilterBarcode={setFilterBarcode} setFilterBrand={setFilterBrand}></ThirdLine>

                        <div className="flex space-x-2">
                            <CreateBtn setClickCreate={setClickCreate}></CreateBtn>
                            <ExportBtn setClickExport={setClickExport}></ExportBtn>
                        </div>

                        <FourthLine setClick={setClick} setClear={setClear} ></FourthLine>

                        <div className="px-4 py-4 bg-white rounded-3xl">
                            <MainTable
                                click={click} setClick={setClick}
                                clear={clear} setClear={setClear}
                                clickExport={clickExport} setClickExport={setClickExport}
                                clickCreate={clickCreate} setClickCreate={setClickCreate}
                                filterBarcode={filterBarcode}
                                filterBrand={filterBrand}
                            ></MainTable>
                        </div>
                    </div>


                </div>
            </div>
        </>


    )
}

export default MainWindow