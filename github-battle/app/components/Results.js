var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var Link = require('react-router').Link;
var Loading = require('./Loading');

function puke(obj) {
	return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function StartAgain() {
	return (
		<div className='col-sm-12' style={styles.space}>
			<Link to='/playerOne'>
				<button type='button' className='btn btn-lg btn-danger'>Start Again</button>
			</Link>
		</div>
	)
}

function Results(props) {
	if (props.isLoading === true) {
		return (
			<Loading text='One Moment' speed={100} />
		)
	}
	
	if (props.scores[0] == props.scores[1]) {
		return (
			<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
				<h1> It's a tie!</h1>
				<StartAgain />
			</div>
		)
	}
	
	var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
	var losingIndex = winningIndex === 1 ? 0 : 1;
	return (
		<div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
			<h1>Results</h1>
			<div className='col-sm-8 col-sm-offset-2'>
				<UserDetailsWrapper header='Winner'>
					<UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
				</UserDetailsWrapper>
				<UserDetailsWrapper header='Loser'>
					<UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
				</UserDetailsWrapper>
			</div>
			<StartAgain />
		</div>
	)
}

Results.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	playersInfo: PropTypes.array.isRequired,
	scores: PropTypes.array.isRequired
}

module.exports = Results;