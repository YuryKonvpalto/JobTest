


function CreateBtn(props) {

    function handleClick() {
        props.setClickCreate(true)
    }

    return (
        <>
            <button className="    rounded-full bg-blue-500 hover:underline hover:text-white " onClick={handleClick}>
                <div className="   text-gray-200  text-sm py-3 px-3">Сформировать
                </div>
            </button>

        </>
    )
}

export default CreateBtn