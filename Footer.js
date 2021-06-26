import React from 'react'

export const Footer = () => {
    let FooterStyle={
        minheight:"70vh",
        top:"100vh",
        width:"100%"
    }
    return (
        <footer className="bg-dark text-light my-3" style={FooterStyle}>
            <p className="text-center">
                Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
