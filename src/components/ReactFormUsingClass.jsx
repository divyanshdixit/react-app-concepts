import React, {Component} from 'react';

class ReactFormUsingClass extends Component{
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
      }
      
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref={this.input}/>
            <button type="submit"> Submit</button>
          </form>
        );
    }
}
export default ReactForm