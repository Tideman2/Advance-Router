 //gh GH ||''

import { Outlet, useNavigation } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';

function Root() {
  //  let navigate = useNavigation();


    return (
        <>
        <MainNavigation />
        <div>
            {/* {navigate.state === 'loading' && <p>Loading...</p>} */}
            <Outlet />
        </div>
        </>
    )
}

export default Root

