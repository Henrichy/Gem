import React from 'react'

const Failed = ({ isOpen, onClose, children }) => {
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

export default Failed
