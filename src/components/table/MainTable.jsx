
import { CompactTable } from "@table-library/react-table-library/compact";

import { useTheme } from "@table-library/react-table-library/theme";
import { useSort } from "@table-library/react-table-library/sort";


import dataJS from "./data.json";
import THEME from "./tableCss"
import { useState } from "react";
import { useEffect } from "react";




let dummyData = [
    {
        "id": null,
        "barcode": null,
        "product_brand": null,
        "product_name": null,
        "product_quantity": null,
        "price": null
    },
]



function MainTable(props) {

    const [data, setData] = useState({ nodes: dummyData })
    const [togInput, setTogInput] = useState(true)
    const [totalSum, setTotalSum] = useState(0)
    const [totalQu, setTotalQu] = useState(0)
    const theme = useTheme(THEME);




    ////загрузка данных и пересчет Итого
    useEffect(() => {
        props.click ? setData({ nodes: dataJS }) : null

        props.setClick(false)
        return () => {
        }
    }, [props.click])


    ////очистка данных и таблицы
    useEffect(() => {
        props.clear ? setData({ nodes: dummyData }) : null

        props.setClear(false)
        return () => {
        }
    }, [props.clear])



    useEffect(() => {

        console.log(props.filterBarcode);
        console.log(props.filterBrand);


        filterBrandBarcode(props.filterBarcode, props.filterBrand)

        props.setClickCreate(false)
        return () => {
        }
        // }, [props.filterBarcode])
    }, [props.clickCreate])


    /////выгрузка в csv
    useEffect(() => {
        if (props.clickExport) {
            handleDownloadCsv()
            props.setClickExport(false)
        }

        return () => {
        }
    }, [props.clickExport])


    /////один useEffect сразу для двух значений
    useEffect(() => {

        let sum = 0
        let quantity = 0
        for (let i = 0; i < data.nodes.length; i++) {
            quantity += +data.nodes[i].product_quantity;
            sum += +data.nodes[i].price;
        }

        setTotalSum(sum)
        setTotalQu(quantity)

        return () => {
        }
    }, [data])





    ////изменение содерж ячейки по doubleclick
    function toggleInput(event) {
        event.preventDefault()
        setTogInput(false);
    }

    function toggleInputTrue(event) {
        event.preventDefault()
        setTogInput(true);
    }



    //////сортировка
    const sort = useSort(
        data,
        {
        },
        {
            sortFns: {
                BARCODE: (array) => array.sort((a, b) => a.barcode - b.barcode),
                BRAND: (array) => array.sort((a, b) => a.product_brand.localeCompare(b.product_brand)),
                NAME: (array) => array.sort((a, b) => a.product_name.localeCompare(b.product_name)),
                QUANTITY: (array) => array.sort((a, b) => a.product_quantity - b.product_quantity),
                PRICE: (array) => array.sort((a, b) => a.price - b.price),
            },
            sortIcon: {

            }
        },

    );


    ////ввод данных в ячейку
    const handleUpdate = (value, id, property) => {

        setData((state) => ({
            ...state,
            nodes: state.nodes.map((node) => {
                if (node.id === id) {
                    return { ...node, [property]: value };
                } else {
                    return node;
                }
            }),
        }));
    };



    /////сохранение данных в csv
    const escapeCsvCell = (cell) => {
        if (cell == null) {
            return "";
        }
        const sc = cell.toString().trim();
        if (sc === "" || sc === '""') {
            return sc;
        }
        if (
            sc.includes('"') ||
            sc.includes(",") ||
            sc.includes("\n") ||
            sc.includes("\r")
        ) {
            return '"' + sc.replace(/"/g, '""') + '"';
        }
        return sc;
    };

    const makeCsvData = (columns, data) => {
        return data.reduce((csvString, rowItem) => {
            return (
                csvString +
                columns
                    .map(({ accessor }) => escapeCsvCell(accessor(rowItem)))
                    .join(",") +
                "\r\n"
            );
        }, columns.map(({ name }) => escapeCsvCell(name)).join(",") + "\r\n");
    };

    const downloadAsCsv = (columns, data, filename) => {
        const csvData = makeCsvData(columns, data);
        const csvFile = new Blob([csvData], { type: "text/csv" });
        const downloadLink = document.createElement("a");

        downloadLink.display = "none";
        downloadLink.download = filename;
        downloadLink.href = window.URL.createObjectURL(csvFile);
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const handleDownloadCsv = () => {
        const columns = [
            { accessor: (item) => item.barcode, name: "barcode" },
            { accessor: (item) => item.product_brand, name: "product_brand" },
            { accessor: (item) => item.product_name, name: "product_name" },
            { accessor: (item) => item.product_quantity, name: "product_quantity" },
            { accessor: (item) => item.price, name: "price" },
        ];

        downloadAsCsv(columns, data.nodes, "table");
    };


    //////фильтр по бренду и баркоду
    function filterBrandBarcode(barcode, brand) {

        if (!barcode && !brand) return

        setData((state) => {

            let a
            if (barcode > 0) {
                a = state.nodes.filter((node) => node.barcode == barcode)
            }

            if (brand && brand !== "") {
                if (barcode > 0) return { nodes: a.filter((node) => node.product_brand == brand) }
                else { a = state.nodes.filter((node) => node.product_brand == brand) }
            }

            return { nodes: a }
        })

    }


    /////параметры столбцов
    const COLUMNS = [
        {
            label: 'Баркод', renderCell: (item) =>
                <input
                    readOnly={togInput}
                    onDoubleClick={toggleInput}
                    className="bg-transparent w-full [&::-webkit-inner-spin-button]:appearance-none focus:outline-none"
                    type="number"
                    value={item.barcode || ''}
                    onChange={(event) =>
                        handleUpdate(event.target.value, item.id, "barcode")
                    }
                    onBlur={toggleInputTrue}
                />
            , sort: { sortKey: "BARCODE" },
        },
        {
            label: 'Бренд', renderCell: (item) =>
                <input
                    readOnly={togInput}
                    onDoubleClick={toggleInput}
                    className="bg-transparent w-full [&::-webkit-inner-spin-button]:appearance-none focus:outline-none"
                    value={item.product_brand || ''}
                    onChange={(event) =>
                        handleUpdate(event.target.value, item.id, "product_brand")
                    }
                    onBlur={toggleInputTrue}
                />
            , sort: { sortKey: "BRAND" }
        },
        {
            label: 'Наименование', renderCell: (item) =>
                <input
                    readOnly={togInput}
                    onDoubleClick={toggleInput}
                    className="bg-transparent w-full [&::-webkit-inner-spin-button]:appearance-none focus:outline-none"
                    value={item.product_name || ''}
                    onChange={(event) =>
                        handleUpdate(event.target.value, item.id, "product_name")
                    }
                    onBlur={toggleInputTrue}
                />
            , sort: { sortKey: "NAME" }
        },
        {
            label: 'Количество', renderCell: (item) =>
                <input
                    readOnly={togInput}
                    onDoubleClick={toggleInput}
                    className="bg-transparent w-full [&::-webkit-inner-spin-button]:appearance-none focus:outline-none"
                    type="number"
                    value={item.product_quantity || ''}
                    onChange={(event) =>
                        handleUpdate(event.target.value, item.id, "product_quantity")
                    }
                    onBlur={toggleInputTrue}
                />
            , sort: { sortKey: "QUANTITY" }
        },
        {
            label: 'Цена', renderCell: (item) =>
                <input
                    readOnly={togInput}
                    onDoubleClick={toggleInput}
                    className="bg-transparent w-full [&::-webkit-inner-spin-button]:appearance-none focus:outline-none"
                    type="number"
                    value={item.price || ''}
                    onChange={(event) =>
                        handleUpdate(event.target.value, item.id, "price")
                    }
                    onBlur={toggleInputTrue}
                />
            , sort: { sortKey: "PRICE" }
        },
    ];






    return (

        <>

            <div className="pb-11">

                < CompactTable
                    columns={COLUMNS} data={data} theme={theme} sort={sort}

                    layout={{
                        custom: true,
                        horizontalScroll: true,
                        fixedHeader: true
                    }}>
                </CompactTable>

                <div className="pt-8"></div>
                <div className="flex justify-between  pt-0  pl-1 pr-1 text-gray-600">
                    <div className="bg-slate-50 px-2 py-4 w-1/5 text-center font-semibold" onClick={filterBrandBarcode}>Итого</div>
                    <div className="bg-slate-50 px-2 py-4 w-1/5"></div>
                    <div className="bg-slate-50 px-2 py-4 w-1/5"></div>
                    <div className="bg-slate-50 px-2 py-4 w-1/5 ml-1 font-semibold">{totalQu}</div>
                    <div className="bg-slate-50 px-2 py-4 w-1/5 ml-1 font-semibold">{totalSum}</div>
                </div>
            </div >

        </>
    )
}

export default MainTable