import React, { useState } from "react";
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";


import data from './data/data'

import LandingPage from "./content/LandingPage/LandingPage";
import GridCards from './content/GridCards/GridCards'

import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Footer from './components/Footer/Footer'


export default function Router() {
    const filter = (data, type) => data.filter(item => item.programType === type)

    const [showFilter, setShowFilter] = useState(false)
    const [filteredDataSeries, setfilteredDataSeries] = useState(filter(data.entries, 'series'))
    const [filteredDataMovies, setfilteredDataMovies] = useState(filter(data.entries, 'movie'))


    const dataMovies = filter(data.entries, 'movie')
    const dataSeries = filter(data.entries, 'series')


    const handleFilterVisibility = isVisible => {
        setShowFilter(isVisible)
    }

    const handleFilteredDataMovies = filteredData => {
        setfilteredDataMovies(filteredData)
    }

    const handleFilteredDataSeries = filteredData => {
        setfilteredDataSeries(filteredData)
    }


    return (
        <BrowserRouter>
            <Header filterVisibility={handleFilterVisibility} ></Header>

            <Switch>
                <Route path="/movies">
                    {showFilter && <Filter data={dataMovies} setFilteredData={handleFilteredDataMovies} ></Filter>}
                    <GridCards title="Movies" data={filteredDataMovies} />
                </Route>

                <Route path="/Series">
                    {showFilter && <Filter data={dataSeries} setFilteredData={handleFilteredDataSeries} ></Filter>}
                    <GridCards title="Series" data={filteredDataSeries} />
                </Route>

                <Route path="/">
                    <LandingPage />
                </Route>

            </Switch>
            <Footer ></Footer>
        </BrowserRouter>
    );
}
