import React from "react";
// a functional component is a component
// that is just a written as a function
// below is a class component
// state is initalized in a component using a constuctor component
// a controlled field is a form element that is set by the state


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {term: " "};
  }
  render(){
    return(
      <div className="search-bar">
        <input value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);

  }
}
export default SearchBar;
