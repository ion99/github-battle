var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
      username: ""
    }
  },
  handleSubmitUser: function(e){
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ""
    });


    if (this.props.routeParams.playerOne){
      console.log("111", this.context);
      this.context.router.push({
        pathname: "/battle",
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
      //go to battle
    } else {
      console.log("222", this.context);
      this.context.router.push('/playerTwo/' + this.state.username);
      //go to playerTwo
    }
  },
  handleUpdateUser: function(event){
    this.setState({
      username: event.target.value
    })
  },
  render: function(){
    // console.log(this);
    return (
      <Prompt 
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
})

module.exports = PromptContainer;