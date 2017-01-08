var React = require('react');
var PropTypes = React.PropTypes;

function way(obj){
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function Results(props){
  return <div>{way(props)}</div>
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;