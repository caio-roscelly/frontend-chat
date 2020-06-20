import React, { Component } from 'react'
import '../styles/main.scss';
import Header from '../components/Header';
import Chat from '../components/Chat';

export default class Main extends Component {
    render() {
        return (
            <div className='container'>
                <Header/>
                <Chat />
            </div>
        )
    }
}
