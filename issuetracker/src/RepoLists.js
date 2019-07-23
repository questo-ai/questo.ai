import React from "react"

class RepoLists extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.getRepos = this.getRepos.bind(this)
		this.repo_issues = []
	}

	getRepos() {
		const token = this.state['gitToken'];
		for (repo in this.state['repos']) {
			$.ajax({
				type: "GET",
				url: `https://api.github.com/repos/${repo}/issues`,
				dataType: 'json',
				headers: {
					"Authorization": "token " + token
				},
				success: function (data){
					this.repo_issues.push(
					<div>
					</div>
					)
				}
			});
		}
		
	}
}