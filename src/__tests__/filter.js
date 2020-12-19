
import { render, screen , cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import data from './../data/data'
import App from './../App'
import Filter from './../components/Filter/Filter'
 

test('Filter', () => {
    const history = createMemoryHistory()
    const route = '/Series'
    history.push(route)

    const filter = (data, type) => data.filter(item => item.programType === type)

    render(
        <Router history={history}>
            <Filter data={filter(data.entries, 'movies')} setFilteredData={() => { }} />
        </Router>
    )

    userEvent.type(screen.queryAllByRole('textbox')[0], 'wolf')
    expect(screen.queryAllByRole('textbox')[0]).toHaveValue('wolf')


    const leftClick = { button: 0 }
    userEvent.click(screen.queryAllByRole('textbox')[1], leftClick)


    userEvent.click(screen.getByText('2012'), leftClick)
    expect(screen.queryAllByRole('textbox')[1]).toHaveValue('2012')

})



test('Filter return correct value STRING', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <App />
        </Router>
    )

    expect(screen.getByText(/Dreadful Tomato/i)).toBeInTheDocument()
    const leftClick = { button: 0 }
    userEvent.click(screen.getByText(/Series/i), leftClick)
    expect(screen.getByRole('heading')).toHaveTextContent('Series')


    userEvent.click(screen.getByRole('button', { name: 'Filters' }), leftClick)
    userEvent.type(screen.queryAllByRole('textbox')[0], 'wolf')


    expect(screen.getAllByRole('img')).toHaveLength(2)
 
})


test('Filter return correct value YEAR', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <App />
        </Router>
    )

    expect(screen.getByText(/Dreadful Tomato/i)).toBeInTheDocument()

    const leftClick = { button: 0 }
    userEvent.click(screen.getAllByText(/X/i)[0], leftClick)
    expect(screen.getAllByRole('img')).toHaveLength(13)

    userEvent.click(screen.getByRole('button', { name: 'Filters' }), leftClick)
    userEvent.click(screen.queryAllByRole('textbox')[1] , leftClick )
    userEvent.click(screen.getByText('2012'), leftClick)
    expect(screen.getAllByRole('img')).toHaveLength(3)


    userEvent.click(screen.getAllByText(/X/i)[1], leftClick)
    expect(screen.queryAllByRole('textbox')[1]).toHaveValue('')

})


