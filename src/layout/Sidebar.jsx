import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <h1>Sidebar</h1>
            <div className={`w-[260px] fixed bg-[#e6e7fc] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5% transition-all)]`}>
                <div className='h-[70px] flex justify-center items-center'>
                    <Link to='/' className='w-[180px] h-[50px]'>
                        <img
                            className='w-full h-full'
                            src="/images/HappyTail.png"
                            alt="icon admin shop"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;