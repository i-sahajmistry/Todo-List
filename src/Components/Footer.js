import React from 'react'

export default function Footer() {
    let footerstyle = {
        position: 'fixed',
        bottom: '0',
        width: '100%'
    }

    let pstyle = {
        margin:'2px'
    }
    return (
        <div className="bg-dark text-light" style={footerstyle}>
            <p className="text-center" style={pstyle}>Copyright &copy; Todo List</p>
        </div>
    )
}
