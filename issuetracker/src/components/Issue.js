import React from 'React'
import styled from 'styled-components'

class Issue extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	
	render() {
		return(
			<div>
				<p>{this.props.issue.url}</p> 
			</div>
		)
	}
}