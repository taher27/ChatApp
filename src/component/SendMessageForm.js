import React, { Component } from 'react'

export default class SendMessageForm extends Component {

  state = {
    text: ''
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onSend(this.state.text)
    this.setState({ text: '' })
  }

  onChange = e => {
    this.setState({ text: e.target.value});
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    return (
      <form className="send-message-form" onSubmit={this.onSubmit}>
        <input
          disabled={this.props.disabled}
          onChange={this.onChange}
          value={this.state.text}
          placeholder="Type your message and hit ENTER"
          type="text" />
        </form>
    )
  }
}

// import React from 'react'

// class SendMessageForm extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             message: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e){
//         this.setState({
//             message: e.target.value
//         })
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.onSend(this.state.message)
//     }

//     render() {
//         console.log(this.state.mesage);
//         return(
//             <form 
//             onSubmit={this.handleSubmit}
//             className="send-message-form">
//                 <input
//                     disabled={this.props.disabled}
//                     onChange={this.handleChange}
//                     value={this.state.message}
//                     placeholder="Type your message and hit ENTER"
//                     type="text" />
//             </form>
//         )
//     }
// }

// export default SendMessageForm