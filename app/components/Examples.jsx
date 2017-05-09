var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Peregian Beach'>Peregian Beach, QLD</Link>
        </li>
        <li>
          <Link to='/?location=Mclaren Flat'>Mclaren Flat, SA</Link>
        </li>
      </ol>
    </div>

  );
};

module.exports = Examples;
