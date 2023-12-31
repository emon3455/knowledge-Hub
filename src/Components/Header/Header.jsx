import React from 'react';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='font-semibold'><a>Home</a></li>
                        <li tabIndex={0}>
                        <a className="justify-between font-semibold">
                            Blogs
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                        </li>
                        <li className='font-semibold'><a>Contact</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Knowledge Hub</a>
                </div>
                
                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        <li className='font-semibold'><a>Home</a></li>
                        <li className='font-semibold' tabIndex={0}>
                            <a>
                            Blogs
                            </a>
                            
                        </li>
                        <li className='font-semibold'><a>Contact</a></li>
                        </ul>
                    </div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <img src="https://github.com/emon3455/demo-picture/blob/main/picture/Logo/img4.png?raw=true" />
                        </div>
                    </label>
                </div>
            </div>

            <hr />

        </>
    );
};

export default Header;