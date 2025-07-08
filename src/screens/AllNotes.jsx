import { StyleSheet } from 'react-native';
import NotesList from './NotesList';

const AllNotes = ({ data, setdata, navigation }) => {
  const deleteNoteHandler = id => setdata(data.filter(note => note.id !== id));

  const favNoteHandler = id =>
    setdata(
      data.map(note =>
        note.id === id ? { ...note, isFav: !note.isFav } : note,
      ),
    );
  const handlePressHandler = note => {
    navigation.navigate('ViewNotes', {
      note,
      data,
      setdata,
    });
  };
  const editNoteHandler = note => {
    navigation.navigate('ViewNotes', {
      note,
      data,
      setdata,
    });
  };

  return (
    <NotesList
      data={data}
      onDelete={deleteNoteHandler}
      onFavToggle={favNoteHandler}
      onHandlePress={handlePressHandler}
      onEditToggle={editNoteHandler}
      emptyMessage="You have no saved notes yet."
    />
  );
};

export default AllNotes;

const styles = StyleSheet.create({});
