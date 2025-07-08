import { StyleSheet } from 'react-native';
import NotesList from './NotesList';

const FavNotes = ({ favData, navigation, data, setdata }) => {
  const handlePressHandler = note => {
    navigation.navigate('ViewNotes', {
      note,
      data,
      setdata,
    });
  };

  const favNoteHandler = id =>
    setdata(
      data.map(note =>
        note.id === id ? { ...note, isFav: !note.isFav } : note,
      ),
    );

  const editNoteHandler = note => {
    navigation.navigate('ViewNotes', {
      note,
      data,
      setdata,
    });
  };

  const deleteNoteHandler = id => {
    setdata(data.filter(note => note.id !== id));
  };

  return (
    <NotesList
      data={favData}
      onHandlePress={handlePressHandler}
      onEditToggle={editNoteHandler}
      onFavToggle={favNoteHandler}
      onDelete={deleteNoteHandler}
      emptyMessage="No favorite notes yet."
    />
  );
};

export default FavNotes;

const styles = StyleSheet.create({});
