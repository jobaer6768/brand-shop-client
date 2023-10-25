import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthProvider";


const Navbar = () => {

    const { user, signOutUser, loading } = useContext(AuthContext);

    const handleLogOut = () => {
        signOutUser()
            .then()
            .catch()
    }

    const links = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isActive
                    ? "active text-xl text-red-400 font-semibold underline mr-2"
                    : isPending
                        ? "pending"
                        : "mx-2 text-xl"
            }
        >Home
        </NavLink>
        <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
                isActive
                    ? "active text-xl text-red-400 font-semibold underline mr-2"
                    : isPending
                        ? "pending"
                        : "mx-2 text-xl"
            }
        >Cart
        </NavLink>
        <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
                isActive
                    ? "active text-xl text-red-400 font-semibold underline mr-2"
                    : isPending
                        ? "pending"
                        : "mx-2 text-xl"
            }
        >Add Product
        </NavLink>
    </>

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen text-6xl">
            <span className="loading loading-spinner text-primary">
            </span></div>
    }

    return (
        <div className="shadow-lg p-6">
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img className="w-14" src="/logo.png" alt="logo" />
                            <p className="font-bold text-3xl">eMARTech</p>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-4">
                        {
                            user ? <>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <img className="w-10" src={user?.photoURL} alt="" />
                                    </div>
                                    <div className="text-xs">
                                        {user?.displayName}
                                    </div>

                                    <div>
                                        <Link onClick={handleLogOut} to='/login' className="btn btn-outline btn-error">
                                            Log Out
                                        </Link>
                                    </div>
                                </div>
                            </> : <>
                                <Link to='/login' className="btn btn-outline btn-error">
                                    Login
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;