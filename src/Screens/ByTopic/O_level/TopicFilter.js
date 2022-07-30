import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Modal,
} from 'react-native';
import RangeModal from '../../../components/RangeModal';
import TopicScrollView from '../../../components/TopicScrollView';
import NavigationConstants from '../../../constants/NavigationConstants';
import AppStyle from '../../../styles/AppStyle';

const styles = StyleSheet.create({
  scrollerView: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  generateBtn: {
    paddingVertical: 6,
    marginHorizontal: 15,
    borderRadius: 4,
    fontSize: 20,
    color: '#007ba4',
    textAlign: 'center',
    elevation: 2,
  },
  filter: {
    paddingVertical: 6,
    fontSize: 15,
    margin: 10,
    color: '#007ba4',
    textAlign: 'left',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  headText: {
    fontSize: 30,
    color: '#ed4779',
    marginTop: 50,
  },
  headView: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filterView: {
    flex: 0,
    flexDirection: 'row',
  },
  generateBtnView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

const TopicFilter = ({navigation, route}) => {
  const [topics, setTopics] = useState([
    'Differentiation',
    'Integration',
    'Loci',
    'logarithm',
    'Volume Surface',
  ]);
  const [topicsFiltered, setTopicsFiltered] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const addTopic = value => {
    setTopicsFiltered(arr => [value, ...arr]);
    setTopics(topics.filter(item => item !== value));
  };
  const removeTopic = value => {
    setTopics(arr => [value, ...arr]);
    setTopicsFiltered(topicsFiltered.filter(item => item !== value));
  };
  return (
    <>
      <View style={[styles.container, AppStyle.appScreen]}>
        <View style={styles.headView}>
          <Text style={styles.headText}>{route?.params?.subject}</Text>
        </View>
        <View style={styles.filterView}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.filter}>Change Year</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollerView}>
          <TopicScrollView
            topic={topicsFiltered}
            name={'Remove'}
            press={removeTopic}
          />
          <TopicScrollView
            topic={topics}
            name={'Add'}
            press={addTopic}
            blue={true}
          />
        </View>
        <View style={styles.generateBtnView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(NavigationConstants.CUSTOM_PAPERS)
            }>
            <Text style={[styles.generateBtn, AppStyle.tabBar]}>
              Generate Paper
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <RangeModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default TopicFilter;
