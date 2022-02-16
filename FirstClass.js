const helloUser = React.createElement;

class FirstClass extends React.Component {
  render() {
    return helloUser("h1", null, `Hello world, ${this.props.username}`);
  }
}

const domContainer = document.querySelector("#root");
ReactDOM.render(helloUser(FirstClass, { username: "Nastya" }), domContainer);
