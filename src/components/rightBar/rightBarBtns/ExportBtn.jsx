


function ExportBtn(props) {

    function handleClick() {
        props.setClickExport(true)
    }

    return (
        <>
            <button className="flex rounded-full bg-gray-700  py-3 px-6 hover:underline hover:text-white" onClick={handleClick}>
                <svg className="h-4 w-6 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />  <polyline points="16 6 12 2 8 6" />  <line x1="12" y1="2" x2="12" y2="15" /></svg>
                <div className="  text-gray-200  text-sm ">Экспорт
                </div>
            </button>
        </>
    )
}

export default ExportBtn