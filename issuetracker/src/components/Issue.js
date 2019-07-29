import React from 'React'
import styled from "styled-components"
import TimeAgo from 'timeago-react';

const Wrapper = styled.div`
	border-bottom: 1px solid #e1e4e8;
	padding: 0.5em;
`

const aNoDeco = styled.a`
	text-decoration: none;
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
`

const Title = styled.h2`
	font-size: 1em;
	font-weight: 600;
	text-align: left;
	margin-right: 0.5em;
`

const IssueNumber = styled.p`
	font-color: #333333;
	font-size: 0.75em;
	margin: 0;
`

class Issue extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return(
			<aNoDeco href={this.props.issue.url}><Wrapper>
				<Row>
					<Title>{this.props.issue.title}</Title>
					{this.props.issue.labels.map(function(label, i) {
						return <p key={i} style={{"background-color": `#${label.color}`, "color": "white", "border-radius": "2px", "font-size": "1em"}}>{label.name}</p>
					})}
				</Row>
				<Row>
					<IssueNumber>#{this.props.issue.number} opened <TimeAgo datetime={this.props.issue.created_at}/> by {this.props.issue.user.login}</IssueNumber>
				</Row>
			</Wrapper></aNoDeco>
		)
	}
}

export default Issue;