import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class UrlForm extends React.Component{
	render(){
		return(
			<div id="parent">
				<div id="topText">
					<h1> Enter a URL to have it shortened! </h1>
				</div>

				<div class="form">
					<form>
						<input type="text" id="textField" placeholder="Enter URL" />
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