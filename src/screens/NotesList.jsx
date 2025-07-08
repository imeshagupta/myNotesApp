import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NotesList = ({
  data,
  onDelete,
  onFavToggle,
  onEditToggle,
  onHandlePress,
  emptyMessage,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => onHandlePress(item)}
          >
            <View>
              <Text style={styles.itemText}>{item.heading}</Text>
            </View>
            <View style={styles.iconRow}>
              {onEditToggle && (
                <Pressable onPress={() => onEditToggle(item)}>
                  <MaterialCommunityIcons
                    name="pencil-outline"
                    size={24}
                    color="#2D4F2B"
                  />
                </Pressable>
              )}
              {onFavToggle && (
                <Pressable onPress={() => onFavToggle(item.id)}>
                  <Ionicons
                    name={item.isFav ? 'star' : 'star-outline'}
                    size={24}
                    color="#2D4F2B"
                  />
                </Pressable>
              )}
              {onDelete && (
                <Pressable onPress={() => onDelete(item.id)}>
                  <MaterialIcons name="delete" size={24} color="#2D4F2B" />
                </Pressable>
              )}
            </View>
          </Pressable>
        )}
        ListEmptyComponent={<Text style={styles.itemText}>{emptyMessage}</Text>}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E0D9FB',
    borderWidth: 1,
    borderColor: '#A59BE1',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 18,
    color: '#2D4F2B',
  },
  iconRow: {
    flexDirection: 'row',
    gap: 10,
  },
});
