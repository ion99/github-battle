var React = require("react");
var transparentBg = require("../styles").transparentBg;
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;


function Home(){
  return (
    <div className="jambotron col-sm-12 text-center" style={transparentBg}>
      <h1>Github Battle</h1>
      <p className="lead">some fancy motto</p>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-success">Get Started</button>
      </Link>
    </div>
  )
}


module.exports = Home;

