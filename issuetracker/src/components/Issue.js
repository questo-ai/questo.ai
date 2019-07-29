import React from 'React'
import styled from "styled-components"

const Wrapper = styled.div`
	border-radius: 2px;
	-webkit-box-shadow: 0px 4px 8px 0 rgba(0,0,0,0.3);
	-moz-box-shadow: 0px 4px 8px 0 rgba(0,0,0,0.3);
	box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.3);
	margin: 1em;
`

const Title = styled.h2`
	font-size: 1em;
	margin: 0.5em;
`

const Number = styled.p`
	font-color: #333333;
`

class Issue extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return(
			<Wrapper>
				<Title>{this.props.issue.title}</Title>
				<Number>{this.props.issue.number}</Number>
				
			</Wrapper>
		)
	}
}

export default Issue;