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
  render() {
    const temporaryTodos = [
      {
        id: "13984719283741234",
        text: "Hello!"
      },
      {
        id: "193847917234123asdfas84",
        text: "Hello again!"
      },
    ];
    const renderTodos = () => {
      return temporaryTodos.map((todo) => {
        return (
          <TodoItem text={todo.text} key={todo.id} id={todo.id}/>
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
          <TextInput style={styles.input}/>
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