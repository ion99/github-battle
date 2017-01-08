var React = require('react');
var Proptypes = React.PropTypes;

function UserDetailsWrapper(props){
  return (
    <div className='col-sm-6'>
      <p className='lead'>{props.header}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  header: Proptypes.string.isRequired
}

module.exports = UserDetailsWrapper;