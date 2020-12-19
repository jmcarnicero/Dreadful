
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import App from './../App'

test('Footer navigate correctly', () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <App />
        </Router>
    )

    expect(screen.getByText(/Dreadful Tomato/i)).toBeInTheDocument()

    const leftClick = { button: 0 }
    userEvent.click(screen.getAllByText(/Movies/i)[0], leftClick)

    userEvent.click(screen.getAllByText(/Home/i)[0], leftClick)
    expect(screen.getAllByRole('button', { name: 'Series' })).toHaveLength(1)
})


