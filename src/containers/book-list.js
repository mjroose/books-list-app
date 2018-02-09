import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from './../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// use this function to create a piece of state
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// anything returned from this function will end up as props
// on the BookList container
// use this to modify an existing state
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// makes our container, BookList, aware of the new dispatch method, selectBook()
// and makes selectBook available as a prop of BookList
export default connect(mapStateToProps, mapDispatchToProps)(BookList);