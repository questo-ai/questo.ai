import React from "react"
import GitHubLogin from 'react-github-login'
import styled from "styled-components"
import $ from 'jquery'
import RepoLists from '../components/RepoLists.js'
import {
	Route,
	NavLink,
	BrowserRouter
} from "react-router";

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {'repos': ['aryavohra/questo-backend', 'taixhi/questo-ios'], 'showList': false};
	}

	// getIssues(token) {
	// 	var repoIssues = [];
	// 	for (var i in this.state.repos) {
	// 		var issues = [];
	// 		$.ajax({
	// 			type: "GET",
	// 			url: `https://api.github.com/repos/${this.state.repos[i]}/issues`,
	// 			dataType: 'json',
	// 			headers: {
	// 				"Authorization": "token " + token
	// 			},
	// 			success: function (data){
	// 				issues.push(data);
	// 			}
	// 		});
	// 		repoIssues.push({'repo': this.state.repos[i], 'issues':issues})
	// 	}
	// 	this.setState({'repoIssues': repoIssues});
	// 	this.setState({'showList': true});
	// }

	// getToken = (response) => {
	// 	$.getJSON('http://localhost:9999/authenticate/'+response.code, function(data) {
	// 		// this.getIssues(data.token);
	// 	}.bind(this));
	// }

	render() {
		return(
			<BrowserRouter>
				<div className="App" align='center'>
					<h1>lads, solve issues.</h1>
					<div className="githubButton">
						<img
							className='gitLogo'
							src='GitHub-Mark-64px.png'
						/>
						<GitHubLogin
							clientId="72ad220b0082a2bda5d8"
							onSuccess={(resp) => this.getToken(resp)}
							buttonText="Login with GitHub"
							className="githubButton gitLink"
							valid={true}
							scope='repo'
							redirectUri="http://localhost:8000"
						/>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

export default () => (
	<App/>
)
