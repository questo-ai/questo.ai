import React from "react"
import GitHubLogin from 'react-github-login'
import $ from 'jquery'
import RepoLists from '../components/RepoLists.js'
import styled from "styled-components"

const ButtonRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 0 auto;
	width: 5em;
	padding: 6px;
	border: 2px solid #000;
	border-radius: 3px;
`

const GitLogo = styled.img`
	height: 1em;
	width: 1em;
	margin-right: 2px;
    align-self: center;
`

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {'repos': ['aryavohra/questo-backend', 'taixhi/questo-ios', 'khushjammu/questo-appengine'],
					'repoIssues': [],
					'needLogIn': true};
	}

	getIssues(token) {
		var repoIssues = [];
		for (var i in this.state.repos) {
			const repo = this.state.repos[i];
			$.ajax({
				type: "GET",
				url: `https://api.github.com/repos/${repo}/issues`,
				dataType: 'json',
				headers: {
					"Authorization": "token " + token
				},
				success: function (data){
					this.setState({'repoIssues': this.state.repoIssues.concat([{'repo': repo, 'issues': data}])})
				}.bind(this)
			});
		}
	}

	getToken = (response) => {
		$.getJSON('http://localhost:9999/authenticate/'+response.code, function(data) {
			this.setState({'needLogIn': false})
			this.getIssues(data.token);
		}.bind(this));
	}

	render() {
		return(
			<div className="App" align='center'>
				<h1>lads, solve issues.</h1>				
				{this.state.needLogIn && <ButtonRow>
					<GitLogo src='GitHub-Mark-64px.png'></GitLogo>
					<GitHubLogin
					className='githubLogin'
					clientId="72ad220b0082a2bda5d8"
					onSuccess={(resp) => this.getToken(resp)}
					buttonText="Login"
					valid={true}
					scope='repo'
					redirectUri="http://localhost:8000"/>
				</ButtonRow>}
				<RepoLists repoIssues={this.state.repoIssues}/>
			</div>
		)
	}
}

export default () => (
	<App/>
)
