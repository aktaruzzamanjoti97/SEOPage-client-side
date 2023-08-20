import React from 'react';

const UtilComp = ({ icon, num, condition = '', setModalShow='' }) => {
    return (
        <>
            {
                condition === 'fileCount' ? (
                    <div className='mx-1' onClick={() => setModalShow(true)}>
                        <i class={icon}></i>
                        <span className='shortFont'>{num}</span>
                    </div>
                ) : (
                    <div className='mx-1'>
                        <i class={icon}></i>
                        <span className='shortFont'>{num}</span>
                    </div>
                )
            }
        </>

    );
};

export default UtilComp;