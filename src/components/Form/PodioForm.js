import React, { Component } from 'react';
import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import TextArea from '../Input/TextArea';
import TextField from '../Input/TextField';

const html = ``;
const PodioForm = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      email: "",

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
    // this.createCORSRequest = this.createCORSRequest.bind(this);
  }

  handleChange(event) {
    const name = event.target.id;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    alert("hello")
    event.preventDefault();
    console.log(event.target)
    const link = "https://podio.com/webforms/22559549/1592076/";
    const method = "POST";

    const formBody = [];
    const values = this.state;
    for(const property in values){
      formBody.push("fields[" + property + "]=" + values[property])
    }
    formBody.join("&");
    console.log(formBody);

    fetch(link, {
      method: method,
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin':'*'},
      formBody: formBody,
      mode: 'cors'
    }).then( e => console.log(e)).catch(e => console.log(e));
  }

  getData(){
    console.log("context");


    return {__html: `
    <script src="https://podio.com/webforms/22559549/1592076.js"></script>
    <script type="text/javascript">
      _podioWebForm.render("1592076")
    </script>
    <noscript>
      <a href="https://podio.com/webforms/22559549/1592076" target="_blank">Please fill out the form</a>
    </noscript>


    `};
  }
  componentDidMount(){
    console.log("hello");
    console.log(this.refs.test.innerHTML)
    this.refs.test.innerHTML = `
    <script src="https://podio.com/webforms/22559549/1592076.js"></script>
    <script type="text/javascript">
      _podioWebForm.render("1592076")
    </script>
    <noscript>
      <a href="https://podio.com/webforms/22559549/1592076" target="_blank">Please fill out the form</a>
    </noscript>
    `;
  }

  render(){
    return (
      <div>Hello
      <script src="https://podio.com/webforms/22559549/1592076.js"></script>
      <script type="text/javascript">
      _podioWebForm.render("1592076")
    </script>
      {/* <div dangerouslySetInnerHTML={this.getData}/> */}
      <div ref="test" contentEditable="true"></div>
      <script src={withPrefix('scripts/podio.js')}></script>

      {/* <iframe class="podio-webform-frame" id="podioWebForm1290503708217" height="680" style="width: 100%; border: none; overflow: scroll !important; height: 938px;" allowtransparency="true" frameborder="0" scrolling="yes" src="https://podio.com/webforms/19169232/1290503?e=true#https%3A%2F%2Fitu-innovators.dk%2Fjoin%2F"></iframe> */}
          {/* // _podioWebForm.render("1592076"); */}
      {/* <noscript> */}
        {/* <a href="https://podio.com/webforms/22559549/1592076" target="_blank">Please fill out the form</a> */}
      {/* </noscript> */}


      {/* <form onSubmit={this.handleSubmit} name="Add Member" data-netlify="true" data-netlify-honeypot="bot-field" > */}
      {/* <form method="POST" action="https://podio.com/webforms/22559549/1592076/" > */}
        {/* <input type="text" id="title" onChange={this.handleChange}/>

        <TextField type="text" placeholder="Full Name" label="Full Name" id="title" update={this.handleChange}/>
        <TextField type="text" placeholder="Email" label="Email" id="email" update={this.handleChange} />
        <TextField type="text" placeholder="What do you study?" label="Studies" id="studies" update={this.handleChange}/>
        <select id="which-team-do-you-want-to-apply-for" onChange={this.handleChange}>
          <option id="1" value="1">Projects and Partnerships Team</option>
          <option id="2" value="2">Member Satisfaction Team</option>
          <option id="3" value="3">Press and communication Team</option>
          <option id="4" value="4">IT Management Team</option>
        </select>
        <TextArea rows={4} cols={50} placeholder="Describe yourself" id="why-would-you-like-to-join" update={this.handleChange}/>
        <TextField type="text" placeholder="What are your awesome skills?" label="Your awesome skills" id="your-awesome-skills" update={this.handleChange}/>
        <input type="submit" value="Submit ME" />
      </form> */}
    </div>
    )
  }

}

// (


//   //method="POST" action="https://podio.com/webforms/22559549/1592076/"


// )


export default PodioForm
