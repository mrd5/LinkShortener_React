import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class UrlForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		this.setState({value: event.target.value});
	}

	handleSubmit(event){
		//alert("Successfully entered url: " + this.state.value);
		//window.location.replace(this.state.value);
		window.location = this.state.value;
		event.preventDefault();
	}

	render(){
		return(
			<div id="parent">
				<div id="topText">
					<h1> Enter a URL to have it shortened! </h1>
				</div>

				<div class="form" onSubmit={this.handleSubmit}>
					<form>
						<input type="text" id="textField" placeholder="Enter URL" value={this.state.value} onChange={this.handleChange}/>
						<input type="submit" value="Submit" id="submitButton"/>
					</form>
				</div>

				<div id="bottomOfPage">
					<p id="bottomText">Made by Mathew Dorish</p>
				</div>
			</div>
		);
	}
}


ReactDOM.render(
	<UrlForm />,
	document.getElementById('root')
);