import React from 'react';

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
            <span className='text-6xl flex gap-5'>
                <span>L</span>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-emerald-600"></div>
                <span>ADING</span>
            </span>
        </div>
    );
};

export default Loader;