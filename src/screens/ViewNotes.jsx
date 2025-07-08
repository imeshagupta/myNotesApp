import {
  StyleSheet,
  TextInput,
  ScrollView,
  View,
  Pressable,
  Alert,
} from 'react-native';
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';

const ViewNotes = ({ route, navigation }) => {
  const { note, data, setdata } = route.params;

  const [heading, setHeading] = useState(note.heading);
  const [content, setContent] = useState(note.content);
  const [isEditing, setIsEditing] = useState(false);

  const saveHandler = () => {
    const updatedData = data.map(n =>
      n.id === note.id ? { ...n, heading, content } : n,
    );
    setdata(updatedData);
    setIsEditing(false);
    Alert.alert('Saved', 'Note updated successfully');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.iconRow}>
        <Pressable onPress={() => setIsEditing(!isEditing)} style={styles.icon}>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={28}
            color="#2D4F2B"
          />
        </Pressable>

        {isEditing && (
          <Pressable onPress={saveHandler} style={styles.icon}>
            <Icon name="check" size={28} color="#2D4F2B" />
          </Pressable>
        )}
      </View>

      <TextInput
        style={styles.heading}
        value={heading}
        onChangeText={setHeading}
        placeholder="Enter Title"
        multiline
        editable={isEditing}
      />
      <TextInput
        style={styles.content}
        value={content}
        onChangeText={setContent}
        placeholder="Enter Note Content"
        multiline
        editable={isEditing}
      />
    </ScrollView>
  );
};

export default ViewNotes;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFECE',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 5,
    marginBottom: 10,
  },
  icon: {
    padding: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2D4F2B',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E0D9FB',
    borderWidth: 1,
    borderColor: '#A59BE1',
  },
  content: {
    fontSize: 18,
    color: '#2D4F2B',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E0D9FB',
    borderWidth: 1,
    borderColor: '#A59BE1',
    textAlignVertical: 'top',
    minHeight: 400,
    marginBottom: 40,
  },
});
