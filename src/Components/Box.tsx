import React from 'react'

type BoxProps = {
    children: React.ReactNode;
    onClick?: () => void;
    highlight: boolean; // whether the box is highlighted or not 
}

const Box: React.FC<BoxProps> = ({ children, onClick, highlight }) => {
    return (
        <div className={`box ${highlight ? 'active' : ''}`} onClick={onClick}>
            {children}
        </div>
    )
}

Box.defaultProps = {
    highlight: false
}

export default Box