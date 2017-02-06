var React = require('react');
var PropTypes = React.PropTypes;

function ErrorMessage(props) {
	var style = {
		color: props.color,
		textAlign: 'center',
		position: 'absolute',
		width: '100%',
		marginTop: '30px',
		fontSize: '35px'
	}
	return (
		<div><p style={style}>{props.text}</p></div>
	)
}

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

module.exports = ErrorMessage;

