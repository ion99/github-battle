var React = require('react');
var PropTypes = react.propTypes;
var slyles = require('../styles');

function puke(object){
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle(props){
  return props.isLoading === true 
    ? <p> Loading! </p> 
    : <div className="jambotron col-sm-12 text-center" style={styles.transparentBg}>
        <h1>Confirm Players</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-6">
            <p className="lead">Player 1</p>
            {puke(props.playersInfo[0])}
          </div>
          <div className="col-sm-6">
            <p className="lead">Player 2</p>
            {puke(props.playersInfo[1])}
          </div>
        </div>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="col-sm-12" style={styles.space}>
            INITIATE BUTTLE BUTTON
          </div>
          <div className="col-sm-12" style={styles.space}>
            LINK TO /PLAYERONE
          </div>
        </div>
      </div>  
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;