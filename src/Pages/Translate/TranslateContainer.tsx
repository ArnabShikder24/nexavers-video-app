import React from 'react';

const headerHeight = 65;

const TranslateContainer = () => {
    return (
        <div className='flex w-full' style={{ height: `calc(100vh - ${headerHeight}px)` }}>
            <div className='w-[70%] border-r px-4 py-3'>
                a
                
            </div>
            <div className='w-[30%] px-4 py-3'>
                b   
            </div>
        </div>
    );
};

export default TranslateContainer;