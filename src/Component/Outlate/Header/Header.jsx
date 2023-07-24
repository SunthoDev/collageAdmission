import React, { useContext } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthencationAll/AuthProvider/AuthProvider';

const Header = () => {

    let {user,logOutUser} = useContext(AuthContext)

    

    const item = <>
        <Link to="/"><li className='navLink'><a>Home</a></li></Link>
        <Link to="/collage"><li className='navLink'><a>Collage</a></li></Link>
        <Link to="/admission"><li className='navLink'><a>Admission</a></li></Link>
        <Link to="/myCollage"><li className='navLink'><a>My Collage</a></li></Link>
    </>

    let handleLogout=()=>{
        logOutUser()
        .then(result=>{})
        .catch(error=>{})

    }



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>


                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {item}

                        </ul>


                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Varsity Admission</a>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">

                        {item}
                    </ul>

                </div>
                <div className="navbar-end">

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    {
                        user && user.email ?
                            <button onClick={handleLogout} className="btn">LogOut</button> :
                            <Link to="/login" className="btn">SingIn</Link>
                    }

                </div>
            </div>

        </div>
    );
};

export default Header;