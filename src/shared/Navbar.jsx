import { Link } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";

const Navbar = () => {

    return (
        <header className="bg-opacity-60 bg-sky-100 bg-blend-multiply fixed top-0 z-30 w-full">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content space-y-2 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="text-lg font-semibold"><ActiveLink to="/">Home</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/subjects">Subjects</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/Login">Login</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/register">Register</ActiveLink></li>
                                {/* <div className="">
                                    <button className='btn-error ml-2 p-2 rounded-lg font-semibold'>Log Out</button>
                                </div> */}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost btn-active normal-case text-lg md:text-2xl font-bold" >
                            Edu-Consultant
                        </Link>
                    </div>

                    <div className="navbar-end space-x-2">

                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 space-x-2">
                                <li className="text-lg font-semibold"><ActiveLink to="/">Home</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/blogs">Blogs</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/subjects">Subjects</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/Login">Login</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/register">Register</ActiveLink></li>
                                {/* <div className="">
                                    <button className='btn-error ml-2 p-2 rounded-lg text-lg font-semibold'>Log Out</button>
                                </div> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;