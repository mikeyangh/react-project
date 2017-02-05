//var USER_DATA = {
//	name: 'Mike Yang',
//	username: 'mikeyangh',
//	image: 'https://avatars3.githubusercontent.com/u/7292817?v=3&u=83fa9b1ed389cd5803b78f007671d16af46eba45&s=400'
//}


var React = require('react');
var ReactDom = require('react-dom');

//var ProfilePic = React.createClass({
//	render: function() {
//		return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
//	}
//});
//
//var Link = React.createClass({
//	changeURL: function() {
//		window.location.replace(this.props.href)
//	},
//	
//	render: function() {
//		return (
//			<span 
//			style={{color: 'blue', cursor: 'pointer'}} 
//			onClick={this.changeURL}>
//				{this.props.children}
//			</span>
//		)
//	}
//});
//
//var ProfileLink = React.createClass({
//	render: function() {
//		return (
//			<div>
//				<Link href={'https://www.github.com/' + this.props.username}>
//					{this.props.username}
//				</Link>
//			</div>
//		);
//	}
//});
//
//var ProfileName = React.createClass({
//	render: function() {
//		return (
//			<div>{this.props.name}</div>
//		);
//	}
//});
//
//var Avatar = React.createClass({
//	render: function() {
//		return (
//			<div>
//				<ProfilePic imageUrl={this.props.user.image} />
//				<ProfileName name={this.props.user.name} />
//				<ProfileLink username={this.props.user.username} />
//			</div>
//		);
//	}
//})

//var HelloWorld = React.createClass({
//	render: function() {
//		console.log(this.props);
//		return (
//			<div> Hello {this.props.name} </div>
//		)
//	}
//});

//ReactDom.render(
//	<Avatar user={USER_DATA} />,
//	document.getElementById('app')
//);

var routes = require('./config/routes');

ReactDom.render(
	routes,
	document.getElementById('app')
);