"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useMemo, useRef, useState} from "react";
import {useSortBy, useTable} from "react-table";
import axios from 'axios';
import RazorPay from '../components/razorpay';
import Header from '../components/header';
import initTranslations from '../i18n';
import TranslationsProvider from '../components/TranslationProvider';
import { useTranslation } from 'react-i18next';
import LanguageChanger from '../components/LanguageChanger';
const i18nNamespaces = ['default'];

export default   function Search({ params: { locale } }) {

    const [visibleData, setVisibleData] = useState([]); // Data currently visible in the table
    const [searchQuery, setSearchQuery] = useState('');
    const [count, setCount] = useState(0);
  
    const { t } = useTranslation();
  
    // const columns = useMemo(
       
    //     () => [
           
    //         {
               
    //             Header: 'title',
    //             accessor: "title",
    //         },
    //         {
    //             Header: "ISBN",
    //             accessor: "isbn",
    //         },
    //         {
    //             Header: "Language",
    //             accessor: "language",
    //         },

    //         {
    //             Header: "Publisher",
    //             accessor: "publisher",
    //         },
    //         {
    //             Header: "Author/Editor",
    //             accessor: "author_editor",
    //         },
    //         {
    //             Header: "Date",
    //             accessor: (row) => {
    //                 const fullDate = row.Date;
    //                 if (fullDate) {

    //                     const year = new Date(fullDate).getFullYear();
    //                     return year;
    //                 }
    //                 return "";
    //             }
    //         },

    //     ],
    //     []
    // );
    const tableHeaderNames = [
        { Header: t('title'), accessor: 'title' },
        { Header: t('theader.isbn'), accessor: 'isbn' },
        { Header: t('theader.language'), accessor: 'language' },
        { Header: t('theader.publisher'), accessor: 'publisher' },
        { Header: t('theader.author'), accessor: 'author_editor' },
        {
            Header: t('theader.date'),
            accessor: (row) => {
                const fullDate = row.Date;
                if (fullDate) {
                    const year = new Date(fullDate).getFullYear();
                    return year;
                }
                return '';
            },
        },
    ];
    
    // Use the table header names
    const columns = useMemo(() => tableHeaderNames, [t]);


  

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {columns, data: visibleData},
        useSortBy
    );
 

    const handleSearchClick = () => {
        axios.get(`https://isbnapi.sanchaya.net/books/find/${searchQuery}`)
                .then(response => {
                console.log(response.data);
                const fetchedData = response.data;
                setVisibleData(fetchedData ? [fetchedData] : []);
                // setFilterData(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        
    };



    const totalbooks = async()=>{
        try{

            const response = await fetch('https://isbnapi.sanchaya.net/books/count');
            if (!response.ok) {
                console.error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setCount(data);
            console.log(data);
        }
        catch(error){
            console.error("Error fetching Data",error);    
        }
    }

    useEffect(()=>{
        totalbooks();
    },[])


 

    useEffect(() => {
        // Check if the search query is empty
        if (searchQuery === '') {
            setVisibleData([]); // Clear the search result
        }
    }, [searchQuery]);

    return (
        <>
            <Header/>
            <LanguageChanger/>
            <div className='flex justify-center mt-5'><RazorPay/></div>
            <div style={{marginTop: "40px"}} >
               
                <div className="container mx-auto">
                    
                    <div className="mb-4 w-50 mx-auto input-group">
    <TranslationsProvider
    namespaces={i18nNamespaces}
    locale={locale}
   
    >

</TranslationsProvider>
                        <input
                            type="text"
                            placeholder="Enter ISBN"
                            className="form-control mx-auto w-50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearchClick(); // Call the search function
                                }
                            }}
                        />
                   
                    </div>

                    <div className="justify-center table-responsive" style={{ overflowX: 'auto' }}>
                        <table
                            {...getTableProps()}
                            className="table table-striped "
                            style={{maxWidth: "100%"}}
                           

                        >
                            <thead >
                            {headerGroups.map((headerGroup, index) => (
                                <tr key={index} {...headerGroup.getHeaderGroupProps()} >
                                    {headerGroup.headers.map((column, index) => (
                                        <th
                                            key={index}
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps()
                                            )}
                                            className=" py-1 font-sm text-sm sm:text-base  text-black"
                                          
                                        >
                                            {column.render("Header")}
                                           
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody {...getTableBodyProps()} >
                            {rows.map((row, rowIndex) => {
                                prepareRow(row);
                                return (
                                    <tr key={rowIndex} {...row.getRowProps()}  >
                                        {row.cells.map((cell, index) => {
                                            return (
                                                <td
                                                    key={index}
                                                    {...cell.getCellProps()}
                                                    className=" py-1 font-sm text-sm sm:text-base"
                                                >
                                                    
                                                    {cell.render("Cell")}
                                                
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                            </tbody>

                        </table>
                    </div>
                

                    <div
                    className='fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black font-semibold rounded-full py-2 px-4 shadow-lg'
                    >
                        {t('total')}: {count}
                    </div>
                </div>


            </div>
        </>
    )
}
                            
