import { StyleSheet, Text, View, Pressable } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useState } from 'react';
import AllNotes from './AllNotes';
import FavNotes from './FavNotes';
import AddNotes from './AddNotes';

const Home = ({ navigation }) => {
  const [view, setview] = useState(0);
  const [data, setdata] = useState([
    {
      id: '1',
      heading: '7 July',
      content:
        'Today I officially began the development of my personal notes application using React Native. First, I created the project using the CLI and set up the folder structure. I decided not to use any external database for now, so I’ll manage the state locally using useState. I also created a simple data array to simulate stored notes. Overall, the basic layout is done and the app is rendering properly without errors.',
      isFav: false,
    },
    {
      id: '2',
      heading: '8 July',
      content:
        'Spent most of the day integrating navigation between different screens using React Navigation. Installed `@react-navigation/native` and `@react-navigation/native-stack`, and created two main screens: one to list all notes, and another to view an individual note. I also passed data using the `route.params` object and confirmed that note details are being received properly on the View screen. Still need to work on editing notes though.',
      isFav: false,
    },
    {
      id: '3',
      heading: '9 July',
      content:
        'The UI needed improvement, so I dedicated today to styling the note cards and detail views. Added background colors, padding, border radius, and shadows for a clean, minimal feel. I also added a "favorite" feature — each note now has a star icon that toggles a boolean value in state. Used conditional rendering and icons from `react-native-vector-icons`. The delete functionality was also implemented using `filter` to remove the selected note.',
      isFav: false,
    },
    {
      id: '4',
      heading: '10 July',
      content:
        'Today was focused on making individual notes editable. I replaced static Text components with multiline TextInputs and added a pencil icon to toggle edit mode. Once in edit mode, users can update the title and content. A "check" icon is shown to save changes. On save, I update the state using `setdata()` and map over the existing data to find the right note by ID. Added feedback via Alert for successful save. This made the app feel much more complete.',
      isFav: false,
    },
    {
      id: '5',
      heading: '11 July',
      content:
        'This was the final day of core functionality. I reviewed the entire codebase for improvements, fixed minor layout bugs, and ensured that all features (edit, delete, favorite) work smoothly. Planning to add persistent storage using AsyncStorage soon. I also took a screen recording to demonstrate how the app works, and started writing a README file for GitHub. This app has been a great hands-on learning experience for building functional, state-driven React Native apps.',
      isFav: false,
    },
  ]);

  return (
    <View style={styles.scrollInner}>
      <View style={styles.header}>
        <Text style={styles.heading}>MyNotesApp</Text>
      </View>

      <View style={styles.subHeader}>
        <View style={styles.choices}>
          <Pressable
            style={[styles.btn, view === 0 && { backgroundColor: '#AEEA94' }]}
            onPress={() => setview(0)}
          >
            <Text
              style={[styles.subHeading, view === 0 && { color: '#2D4F2B' }]}
            >
              All
            </Text>
          </Pressable>

          <Text style={{ fontSize: 30, color: '#2D4F2B' }}>|</Text>

          <Pressable
            style={[styles.btn, view === 1 && { backgroundColor: '#AEEA94' }]}
            onPress={() => setview(1)}
          >
            <Text
              style={[styles.subHeading, view === 1 && { color: '#2D4F2B' }]}
            >
              Favorite
            </Text>
          </Pressable>
        </View>

        <View style={styles.editIcon}>
          <Pressable
            style={[
              styles.addBtn,
              view === 2 && { backgroundColor: '#AEEA94' },
            ]}
            onPress={() => setview(2)}
          >
            <FontAwesome6 name="plus" size={30} color="#2D4F2B" />
          </Pressable>
        </View>
      </View>

      {view === 0 && (
        <AllNotes data={data} setdata={setdata} navigation={navigation} />
      )}
      {view === 1 && (
        <FavNotes
          favData={data.filter(n => n.isFav)}
          data={data}
          setdata={setdata}
          navigation={navigation}
        />
      )}
      {view === 2 && <AddNotes data={data} setdata={setdata} />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollInner: {
    backgroundColor: '#FFFECE',
    width: '100%',
    flex: 1,
  },
  header: {
    backgroundColor: '#AEEA94',
    paddingTop: 25,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2D4F2B',
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  choices: {
    flexDirection: 'row',
    gap: 10,
  },
  btn: {
    paddingVertical: '1.5%',
    paddingHorizontal: '4%',
    borderRadius: 25,
    borderWidth: 0.8,
    borderColor: '#72C37AFF',
  },
  addBtn: {
    paddingVertical: '2',
    paddingHorizontal: '6',
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: '#72C37AFF',
  },
  subHeading: {
    fontWeight: '500',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  editIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
});
