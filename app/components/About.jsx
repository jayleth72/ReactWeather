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
      <h3>About</h3>
      <p>Welcome to the About Page</p>
    </div>

  );
}
module.exports = About;
