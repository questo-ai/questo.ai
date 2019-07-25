import React from "react"
import Issue from './Issue.js'

class RepoLists extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		console.log(this.props.issues);
		return(
			<div>
				{this.props.issues.map(function(issue, i){
					return <Issue key={i} issue={issue}/>
				})}
			</div>
		)
	}
}

export default RepoLists;