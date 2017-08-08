import TodoItem from './todo_item';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todos';

const mapStateToProps = (state, {id, text}) => ({
  id,
  text
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);