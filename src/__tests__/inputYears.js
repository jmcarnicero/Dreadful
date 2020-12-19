
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'


import InputYears from './../components/Filter/InputYears'

test('InputYears', () => {
    const history = createMemoryHistory()
    const route = '/Series'
    history.push(route)

    render(
        <Router history={history}>
            <InputYears setYear={() => { }} />
        </Router>
    )

    const leftClick = { button: 0 }

    userEvent.click(screen.getByRole('textbox'), leftClick)
    expect(screen.getAllByRole('button')).toHaveLength(15)

    userEvent.click(screen.getByText('2012'), leftClick)
    expect(screen.getByRole('textbox')).toHaveValue('2012')

    userEvent.click(screen.getByRole('textbox'), leftClick)
    userEvent.click(screen.getByRole('button' , { name : '>' }), leftClick)
    expect(screen.getByRole('textbox')).toHaveValue('2013')

    userEvent.click(screen.getByRole('textbox'), leftClick)
    userEvent.click(screen.getByRole('button' , { name : '<' }), leftClick)
    expect(screen.getByRole('textbox')).toHaveValue('2012')

    userEvent.click(screen.getByRole('textbox'), leftClick)
    userEvent.click(screen.getByRole('button' , { name : 'X' }), leftClick)
    expect(screen.getByRole('textbox')).toHaveValue('')


})