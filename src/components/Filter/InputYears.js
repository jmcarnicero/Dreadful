import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Button } from "carbon-components-react";
import './InputYears.scss'


export default function InputYears({ setYear }) {

    const location = useLocation();
    const [selectedYear, setSelectedYear] = useState('')
    const years = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019]


    useEffect(() => {
        setSelectedYear('')
        setYear(false)
    }, [location.pathname , setYear])

    const handleSelectYear = (e, year) => {
        e.preventDefault();
        setSelectedYear(year)
        setYear(year)
        setShow('')
    }

    const nextYear = (e) => {
        e.preventDefault();
        if (years.indexOf(selectedYear + 1) >= 0) {
            setSelectedYear(years[years.indexOf(selectedYear + 1)])
            setYear(years[years.indexOf(selectedYear + 1)])
        }
    }


    const previousYear = (e) => {
        e.preventDefault();
        if (years.indexOf(selectedYear - 1) >= 0) {
            setSelectedYear(years[years.indexOf(selectedYear - 1)])
            setYear(years[years.indexOf(selectedYear - 1)])
        }
    }

    const renderYears = () => {
        return years.map((item , i ) => {
            if (item === selectedYear) {
                return <Button key={i} className=" Inputyears-year-selected" onClick={e => handleSelectYear(e, item)} >{item}</Button>
            }
            return <Button key={i} className=" Inputyears-year" onClick={e => handleSelectYear(e, item)} >{item}</Button>
        })
    }

    const [show, setShow] = useState(false)

    const handleOnMouseOver = () => {
        setShow(true)
    }

    const handleOnMouseLeave = () => {
        setShow(false)
    }

    const cleanYearSelected = () => {
        setSelectedYear('')
        setYear(false)
    }

    return (
        <div className="Inputyears">
            <div className="Inputyears-container-clear">
                <input className="Inputyears-input" type="text" value={selectedYear} onMouseOver={handleOnMouseOver} readOnly ></input>
                <Button className="Inputyears-clear" onClick={cleanYearSelected} >{"X"}</Button>
            </div>
            {show &&

                <div className="Inputyears-container" onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
                    <span className="Inputyears-container-nav">
                        <Button name="prev" className="Inputyears-prev Inputyears-year-selected" onClick={previousYear} >{"<"}</Button>
                        {selectedYear && selectedYear}
                        <Button name="next" className="Inputyears-next Inputyears-year-selected" onClick={nextYear} >{">"}</Button>
                    </span>
                    <span className="Inputyears-container-btn">
                        {renderYears()}
                    </span>
                </div>}
        </div>


    )
}