import  React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={logMessage}>
          <Text>Hai!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function logMessage(e) {
  e.preventDefault();
  console.log('Helloooo: ', e);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;