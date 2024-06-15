import React from 'react';

const Success = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div>
                    <div className='overlay-background' onClick={onClose} />
                    <div className='overlay-container'>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default Success
