import React from 'react'

export const SpinnerLoading = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: 550 }}>
            <div className="spinner-border " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
