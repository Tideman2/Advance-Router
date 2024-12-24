 //gh GH ||''

import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';

function Root() {
    return (
        <>
        <MainNavigation />
        <div>
            <Outlet />
        </div>
        </>
    )
}

export default Root

