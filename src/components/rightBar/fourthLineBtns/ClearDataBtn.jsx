


function ClearDataBtn(props) {

    function handleClick() {

        props.setClear(true)
    }

    return (

        <>
            <button className="flex border-l border-gray-300 pl-8   py-1 px-1 hover:underline" onClick={handleClick}>
                <div className="  text-gray-700  text-sm     ">Очистить
                </div>
                <svg className=" h-5 w-4 text-black ml-1 pt-1 " width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>

            </button>
        </>
    )
}

export default ClearDataBtn

