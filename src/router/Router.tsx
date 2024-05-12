import { FC } from 'react'
import { BrowserRouter, Routes as BrowserRoutes, Route } from 'react-router-dom'
import { Routes } from './Routes'
import { Home, NotFound } from '../pages'

const Router: FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route
                    path={Routes.HOME}
                    element={ <Home /> }
                />
                <Route
                    path={Routes.NOT_FOUND}
                    element={ <NotFound /> }
                />
            </BrowserRoutes>
        </BrowserRouter>
    )
}

export default Router