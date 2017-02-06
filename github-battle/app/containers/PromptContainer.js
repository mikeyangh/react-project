var React = require('react');
var transparentBg = require('../styles').transparentBg;
var Prompt = require('../components/Prompt');
var githubHelpers = require('../utils/githubHelpers');
var ErrorMessage = require('../components/ErrorMessage');

var PromptContainer = React.createClass({
	contextTypes: {
    router: React.PropTypes.object.isRequired
  },
	
	getInitialState: function() {
		return {
			username: '',
			hasError: false,
			errorText: ''
		}
	},
	
	handleUpdateUser: function(e) {
		this.setState({
			username: e.target.value
		})
	},
	
	handleSubmitUser: function(e) {
		e.preventDefault();
		var username = this.state.username;
		if (username.length == 0) {
			this.setState({
				hasError: true,
				errorText: 'Username should not be empty!!!'
			});
			return;
		}
		
		this.setState({
			username: '',
			hasError: false,
			errorText: ''
		});
		
		var that = this;
		githubHelpers.validate(username)
			.then(function(login) {
			console.log(login);
			
			if (that.props.routeParams.playerOne) {
				if (username == that.props.routeParams.playerOne) {
					that.setState({
						hasError: true,
						errorText: 'Same username as player one!!!'
					})
					return;
				}
				
				that.context.router.push({
					pathname: '/battle',
					query: {
						playerOne: that.props.routeParams.playerOne,
						playerTwo: username
					}
				});
			} else {
				console.log(that);
				that.context.router.push('/playerTwo/' + username);
			}
		}).catch(function (err) {
			console.log(err);
			console.log('Username validation fails');
			that.setState({
				hasError: true,
				errorText: 'Fail to find username "' + username + '" !!!'
			})
		})
	
	},
	
	render: function() {
		return (
			<div>
				<Prompt 
				onSubmitUser={this.handleSubmitUser} 
				onUpdateUser={this.handleUpdateUser}
				header={this.props.route.header}
				username={this.state.username}
				/>
				{this.state.hasError && <ErrorMessage text={this.state.errorText} color='red' />}
			</div>
		)
		
	}
});

module.exports = PromptContainer;