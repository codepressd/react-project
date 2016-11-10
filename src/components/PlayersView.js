import React from 'react';
import CompList from './CompList';
import { Link } from 'react-router';


class PlayersView extends React.Component {

	render() {
		
		return (
			
			<div className="the-grid">
				
				{Object.keys(this.props.team.teams).map( (team, index) => 
					<CompList {...this.props} key={index} index={index} teamInfo={this.props.team.teams[index]} />)}

			</div>
				
			
		)
	}
}
 
export default PlayersView;