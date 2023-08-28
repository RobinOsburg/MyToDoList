import React, { Component } from 'react'


class Header extends Component {
    state = {}
    render() {
        return (
            <div className='header'>
                <h1>ToDoList</h1>
                <form action="">
                    <input className='headerInput' type="text" placeholder='Search' />
                </form>
            </div>
        );
    }
}

export default Header;