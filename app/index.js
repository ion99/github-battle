var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div> React JS program </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);