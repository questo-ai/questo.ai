import React from "react"
import Issue from './Issue.js'
import styled from "styled-components"

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 90%;
`

const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	margin: 1em;
	-webkit-box-shadow: 0px 4px 8px 0 rgba(0,0,0,0.3);
	-moz-box-shadow: 0px 4px 8px 0 rgba(0,0,0,0.3);
	box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.3);
`

class RepoLists extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	repoColumn(issues) {
		return issues.map(function(issue, i) {
			return <Issue key={i} issue={issue}/>
		})
	}

	render() {
		return(
			<div>
				<Row>
					{this.props.repoIssues.map(function(repo, i){
						return <Column key={i}>
							{this.repoColumn(repo["issues"])}
						</Column>
					}.bind(this))}
				</Row>
			</div>
		)
	}
}

export default RepoLists;