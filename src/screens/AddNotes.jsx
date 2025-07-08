import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

const AddNotes = ({ data, setdata }) => {
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');

  const addItemHandler = () => {
    const newItem = {
      id: Date.now().toString(),
      heading: title,
      content: content,
      isFav: false,
    };

    setdata([...data, newItem]);
    settitle('');
    setcontent('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={settitle}
        placeholder="Enter title"
      />

      <Text style={styles.label}>Content:</Text>
      <TextInput
        style={styles.contentInput}
        value={content}
        onChangeText={setcontent}
        placeholder="Enter content"
        multiline
      />

      <Pressable style={styles.addButton} onPress={addItemHandler}>
        <Text style={styles.addButtonText}>+ Add</Text>
      </Pressable>
    </ScrollView>
  );
};

export default AddNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFECE',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
    color: '#2D4F2B',
  },
  titleInput: {
    borderWidth: 1,
    borderColor: '#A59BE1',
    borderRadius: 10,
    fontSize: 16,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  contentInput: {
    borderWidth: 1,
    borderColor: '#A59BE1',
    borderRadius: 10,
    fontSize: 16,
    padding: 10,
    height: 150,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  addButton: {
    width: 100,
    marginTop: 20,
    backgroundColor: '#AEEA94',
    paddingVertical: 12,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    color: '#2D4F2B',
    fontWeight: 'bold',
  },
});
