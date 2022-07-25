import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const styles = StyleSheet.create({
  btn: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    flex: 3,
  },
  touchBtn: {
    flex: 1,
  },
  addBtn: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  btnCover: {
    elevation: 4,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 2,
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  topicColor: {backgroundColor: '#ed4779'},
  selectColor: {backgroundColor: '#007ba4'},
  scroller: {
    maxHeight: Dimensions.get('screen').height / 3,
    minHeight: Dimensions.get('screen').height / 3,
  },
});
const TopicScrollView = ({press, name, topic, blue = null}) => {
  return (
    <View style={[styles.scroller]}>
      <ScrollView>
        {topic.map((topic, index) => {
          return (
            <View
              key={[topic, index]}
              style={[
                styles.btnCover,
                blue ? styles.selectColor : styles.topicColor,
              ]}>
              <Text key={topic} style={styles.btn}>
                {topic}
              </Text>
              <TouchableOpacity
                onPress={() => press(topic)}
                style={styles.touchBtn}
                key={index}>
                <Text style={styles.addBtn}>{name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TopicScrollView;
