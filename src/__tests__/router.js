import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import React from 'react'
import { Router } from 'react-router-dom'

import '@testing-library/jest-dom/extend-expect'

import App from './../App'

test('full app rendering/navigating', () => {
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
})

