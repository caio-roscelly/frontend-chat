import React, { Component } from 'react'
import '../styles/components/chat.scss';
import Ballon from './Ballon';
import {messageAssistant} from '../providers/api';

export default class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            conversation: [],
            textUser: '',
            session_id: null
        }
    }

    componentDidMount(){
        this.sendMessage();
    }

    biddingMessage = () => {
        let conversation = this.state.conversation;

        if (this.state.textUser.trim() !== '') {
            conversation.push({
                type: 'user',
                text: this.state.textUser,
            });

            this.setState({conversation})

            this.sendMessage();

        }

    }

    sendMessage(){
        const objAssistant = {
            input: this.state.textUser
        }
        this.setState({ textUser: '' })

        if(this.state.session_id) objAssistant.session_id = this.state.session_id;
        messageAssistant(objAssistant).then(response=>{
            const result = response.data;

            const session_id = result.session_id;
            let conversation = this.state.conversation;
            conversation.push({
                type: 'bot',
                text: result.output.generic
            });

            this.setState({
                session_id,
                conversation
            }) 
        })
    }


    _handleInput = (e) => {
        const textUser = (e.target.value);
        this.setState({ textUser });
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.biddingMessage();
        } 
    }

    render() {
        return (
            <div className="chat">
                <div className="messages">
                    {this.state.conversation.map((e,i) => (
                        <Ballon key={i} data={e} />
                    ))}
                </div>
                <div className="typing">
                    <input value={this.state.textUser} onKeyDown={this._handleKeyDown} onChange={this._handleInput} placeholder="Converse com o Bot" type="text" />
                    <button onClick={this.biddingMessage} >Enviar</button>
                </div>
            </div>
        )
    }
}
