var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var location = this.props.location;
//     var temp = this.props.temp;
//     return (
//       <p>The Temperature in {location} is {temp}</p>
//     );
//   }
// });

//var WeatherMessage = (props) => {
  // var {temp, location} = props;

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">The Temperature in {location} is {temp}</h3>
  );
};

module.exports = WeatherMessage;
