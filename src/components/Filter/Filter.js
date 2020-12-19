import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from 'react-router-dom';
import { Grid, Row, Column, Button } from "carbon-components-react";
import InputYears from './InputYears'
import './Filter.scss'

export default function Filter({ data, setFilteredData: setFilteredDataProp }) {

    const location = useLocation();

    useEffect(() => {
        setFilterString('')
        setFilteredDataProp(data)
    }, [location.pathname])


    const [filterString, setFilterString] = useState('')
    const [filterYear, setFilterYear] = useState(false)


    const filterValues = (data, filterString, filterYear) => {

        if (filterString === '' && !filterYear) {
            return data
        }

        return data.filter(item => {
            if (!filterYear) {
                if (item.title.toLowerCase().includes(filterString.toLowerCase())) {
                    return item
                }
            }

            else if (filterString === '') {
                if (item.releaseYear === filterYear) {
                    return item
                }
            }

            else if (item.releaseYear === filterYear) {
                if (item.title.toLowerCase().includes(filterString.toLowerCase())) {
                    return item
                }
            }

            return false
        })
    }

    useEffect(() => {
        setFilteredDataProp(filterValues(data, filterString, filterYear))
    }, [filterString, filterYear])

    const cleanYearSelected = () => {
        setFilterString('')
    }

    const handleOnchange = e => {
        setFilterString(e.target.value)
    }

    const handleSetYear = useCallback(year => {
        setFilterYear(year)
    }, [])

    return (
        <div className="Filter" >
            <Grid >
                <Row>
                    <Column className=" " sm={4} md={6} lg={10} xlg={10} >
                        <div className="Filter-container-clear">
                            <input id="filterText" name="filterText" type="text" onChange={e => handleOnchange(e)} value={filterString} ></input>
                            <Button className="Filter-clear" onClick={cleanYearSelected} >{"X"}</Button>
                        </div>
                    </Column>
                    <Column className=" " sm={4} md={2} lg={2} xlg={2} >
                        <InputYears id="filterYears" setYear={handleSetYear} ></InputYears>
                    </Column>
                </Row>
            </Grid>

        </div>
    )
}