import React from "react"
import GitHubLogin from 'react-github-login'
import styled from "styled-components"
import $ from 'jquery'

class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	getRepo() {
		const token = this.state['gitToken'];
		console.log(token);
		$.ajax({
			type: "GET",
			url: 'https://api.github.com/repos/aryavohra/questo-backend/issues',
			dataType: 'json',
			headers: {
				"Authorization": "token " + token
			},
			success: function (data){
				return data
			}
		});
	}

	getToken = (response) => {
		$.getJSON('http://localhost:9999/authenticate/'+response.code, function(data) {
			this.setState({'gitToken': data.token});
		}.bind(this));
	}

	render() {
		return(
			<div className="App" align="center">
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

				<RepoLists
					repos=['aryavohra/questo-backend', 'taixhi/questo.ai', 'taixhi/questo-ios', 'khushjammu/questo-appengine']

				/>

				<br />
				<br />

			</div>
		)
	}
}

export default () => (
	<App/>
)
