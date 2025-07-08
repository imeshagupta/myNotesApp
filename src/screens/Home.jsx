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
      content: `Today, I tried to wake up early and start my day with some exercise. It was a bit difficult at first, but I felt more energetic afterwards. I realized that even small changes in routine can have a big impact on how you feel throughout the day.

I began with some simple stretches and then did a short walk around the block. The fresh air helped clear my mind and boosted my mood. While exercising, I thought about how important it is to take care of our bodies, especially when we spend so much time sitting and working on computers.

After exercise, I had a healthy breakfast and felt ready to face the day. I plan to make this a daily habit and gradually increase my activity level. It might be challenging at first, but I believe consistency is the key.

Overall, today’s experience taught me that even small steps towards a healthier lifestyle are worth the effort. I’m motivated to keep going and see where this journey leads me.`,
      isFav: false,
    },
    {
      id: '2',
      heading: '8 July',
      content: `The weather was very pleasant today, with a gentle breeze and clear skies. I decided to take a walk in the park near my house to enjoy the fresh air and the beauty of nature. As I walked, I noticed the vibrant colors of the flowers blooming everywhere and listened to the melodious chirping of birds perched on the trees. It was a peaceful scene that made me appreciate how important it is to protect and care for our environment.

During my walk, I met a few neighbors and exchanged greetings. It felt nice to connect with people in the community. I also saw some children playing and laughing, which reminded me of the simple joys of childhood. It’s easy to get caught up in daily worries, but moments like these help us slow down and find happiness in small things.

Later, I sat on a bench and reflected on how much nature gives us without asking for anything in return. This made me think about ways I can contribute, like reducing waste, planting trees, and conserving water. I hope to be more mindful in my daily habits.

Overall, today was a wonderful reminder of the beauty around us and the responsibility we have to protect it for future generations.`,
      isFav: false,
    },
    {
      id: '3',
      heading: '9 July',
      content: `Today, I spent some time helping my younger brother with his studies. It was a rewarding experience because teaching someone else helped me understand my own lessons better. Sometimes, explaining concepts out loud makes things clearer.

We focused on his math homework, and I tried to make the problems easier by breaking them down step by step. My brother seemed happy when he solved the problems correctly, which motivated both of us. I hope he does well in his exams.

Besides studies, I also shared some tips on managing time and staying organized. It felt good to support a family member and be helpful. These small moments strengthen our bond.

Helping others is not just about giving; it’s about learning and growing together. I want to continue being a good guide and friend for my brother as he navigates school.`,
      isFav: false,
    },
    {
      id: '4',
      heading: '10 July',
      content: `I spent the day reading my favourite book. It was relaxing and helped me forget about stress. Books open new worlds and teach us many things. I want to read more in the future.`,
      isFav: false,
    },
    {
      id: '5',
      heading: '11 July',
      content: `Today was a peaceful day filled with deep reflection and thoughtful moments that allowed me to understand myself better and plan for the future. I woke up feeling calm, which was a nice change from the usual rush of everyday life.

After a simple breakfast, I settled into my favorite quiet corner with a notebook and pen, ready to jot down my thoughts. I thought about my goals, both short-term and long-term, and the steps I need to take to achieve them. I realized that some challenges I face are not as big as they seem, and with patience and persistence, I can overcome them.

I also reflected on my strengths and areas where I can improve. It’s important to recognize what I do well to build confidence, but also to be honest about what needs work. I made a list of habits I want to develop, such as better time management, staying focused, and maintaining a positive mindset.

The afternoon was spent planning a schedule that balances work, study, rest, and leisure. I know that balance is key to avoiding burnout and staying motivated. I also reminded myself to celebrate small victories and not be too hard on myself when things don’t go as planned.

In the evening, I took a short walk outside and appreciated the sunset, which made me feel grateful for the simple beauties of life. I believe that gratitude can improve mental well-being and help me stay grounded.

Overall, today’s reflection gave me clarity and renewed energy. I am determined to keep moving forward, learning from my experiences, and growing into a better version of myself every day. The journey may not always be easy, but it will be worth it.`,
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
