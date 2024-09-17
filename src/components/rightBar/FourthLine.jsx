import ChangeDataBtn from "./fourthLineBtns/ChangeDataBtn"
import ClearDataBtn from "./fourthLineBtns/ClearDataBtn"
import LoadCsvBtn from "./fourthLineBtns/LoadCsvBtn"

function FourthLine(props) {
    return (

        <>
            <div className="flex justify-between space-x-1 py-2 border-t border-b border-gray-300   w-2/3">
                <div className="flex space-x-3">

                    <LoadCsvBtn setClick={props.setClick}></LoadCsvBtn>
                    <ChangeDataBtn></ChangeDataBtn>
                </div>
                <ClearDataBtn setClear={props.setClear}></ClearDataBtn>
            </div>
        </>
    )
}

export default FourthLine