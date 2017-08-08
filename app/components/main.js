import  React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';


class TodoItem extends React.Component {
  render() {
    return (
      <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: ''
    };
    this.addNewTodo = this.addNewTodo.bind(this);
  }
  
  addNewTodo() {
    const {newTodoText} = this.state;
    if (newTodoText && newTodoText !== "") {
      this.props.addTodo(this.state.newTodoText);
      this.setState({
        newTodoText: ""
      });
    }
  }
  
  render() {
    const { todos } = this.props;
    const renderTodos = () => {
      return todos.map((todo) => {
        return (
          <TouchableOpacity>
            <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
          </TouchableOpacity>
        );
      });
    };
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.topBar}>
          <Text style={styles.title}>
            To-Do List
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChange={(e) => {
              this.setState({
                newTodoText: e.nativeEvent.text
              });
            }}
            value={this.state.newTodoText}
            returnKeyType="done"
            placeholder="New Todo"
            onSubmitEditing={this.addNewTodo}
            style={styles.input}/>
        </View>
        <ScrollView
          automaticallyAdjustContentInsets={false}>
          {renderTodos()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  topBar: {
    padding: 16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71'
  },
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  },
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoText: {

  }
});

export default Main;