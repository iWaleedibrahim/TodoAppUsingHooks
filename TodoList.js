import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default function TodoList(props) {
  return (
    <View style={styles.listContainer}>
      {/* <Icon name="square" size={30} color="black" style={{ marginLeft: 15 }} /> */}
      <Text style={styles.listItem}>{props.text}</Text>
      <TouchableHighlight onPress={props.deleteTodo} underlayColor={'red'}>
        <Image
          source={deleteImage}
          size={30}
          color="black"
          style={{ marginLeft: 15 }}
          style={{ marginLeft: 'auto' }}
        />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#aaaaaa',
    borderBottomWidth: 1.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  listItem: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: 'green',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
