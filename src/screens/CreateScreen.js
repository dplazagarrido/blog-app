import React, {useContext, useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setConent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
      <Text style={styles.label}>Enter Content</Text>
      <TextInput style={styles.input}  value={content} onChangeText={(text) => setConent(text)}/>
      <Button title='Add Blog Post' onPress={() => {
        addBlogPost(title, content, () => { 
          navigation.navigate('Index')
          });
        }}/>
    </View>
  )
}

const styles = StyleSheet.create ({
  input:{
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginLeft:10,
    marginRight: 10,
    marginBottom: 15
  },
  label: {
    marginLeft: 10,
    fontSize: 20,
    marginBottom: 5
  }
});

export default CreateScreen;