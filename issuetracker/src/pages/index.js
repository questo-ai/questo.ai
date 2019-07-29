import React from "react"
import GitHubLogin from 'react-github-login'
import $ from 'jquery'
import RepoLists from '../components/RepoLists.js'

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {'repos': ['aryavohra/questo-backend', 'taixhi/questo-ios'],
					'showList': false,
					'repoIssues': []};
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
			this.getIssues(data.token);
		}.bind(this));
	}

	render() {
		return(
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
						redirectUri="http://localhost:8000/"
					/>
				</div>
				<RepoLists repoIssues={this.state.repoIssues}/>
			</div>
		)
	}
}

export default () => (
	<App/>
)
