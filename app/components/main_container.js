import { connect } from 'react-redux';
import Main from './main';

import { addTodo } from '../actions/todos';

const mapStateToProps = (state, ownProps) => ({
 todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => (dispatch(addTodo(todo))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);