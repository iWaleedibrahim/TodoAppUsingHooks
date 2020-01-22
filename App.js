import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import TodoList from './TodoList';

const addImage = require('./assets/Images/plus.png');

export default function App() {
  const [singleTodo, setSingleTodo] = useState('');
  const [todos, insertIntoTodos] = useState([]);
  addNewTodo = () => {
    if (singleTodo.length > 0) {
      insertIntoTodos([
        ...todos,
        { text: singleTodo, key: Date.now().toString(), checked: false },
      ]);
      setSingleTodo('');
      Alert.alert('done!', 'todo was added');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'Todo List'}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="What do you want to do today?"
          placeholderTextColor="#abbabb"
          value={singleTodo}
        />
        <TouchableHighlight
          onPress={() => Alert.alert('done!', 'todo was deleted')}
          underlayColor={'transpatent'}>
          <Image source={addImage} style={styles.trash} />
        </TouchableHighlight>
      </View>
      <ScrollView style={{ width: '100%' }}>
        {todos.map(item => (
          <TodoList text={item.text} key={item.key} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    marginTop: '15%',
    fontSize: 20,
    color: '#51008f',
    paddingBottom: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 5,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
    minHeight: '3%',
  },
  trash: {
    height: 35,
    width: 35,
  },
});
