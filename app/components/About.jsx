var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });
// stateless functional components\
// only do render method

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application built on React.</p>
      <p>
        Here are some of the tools I have used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Thus was the
            Javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open
            Weather Map to serach for weather data by city name.
        </li>
      </ul>
    </div>

  );
}
module.exports = About;
