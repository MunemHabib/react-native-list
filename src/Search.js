import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-elements';

const DATA = [
  {
    id: '1',
    title: 'First',
  },
  {
    id: '2',
    title: 'Second ',
  },
  {
    id: '3',
    title: 'Third ',
  },
  {
    id: '4',
    title: 'Fourth ',
  },
  {
    id: '5',
    title: 'Fifth ',
  },
  {
    id: '6',
    title: 'Sixth ',
  },
  {
    id: '7',
    title: 'Seventh ',
  },
  {
    id: '8',
    title: 'Eighth ',
  },
  {
    id: '9',
    title: 'ninth ',
  },
  {
    id: '10',
    title: 'Tenth ',
  },
];

function Item({title}) {
  return (
    <View>
      <TouchableOpacity style={[styles.item, {backgroundColor: '#f9c2ff'}]}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = {
      search: '',
      filteredData: [],
      data: [],
    };
  }

  componentDidMount() {
    this.setState({filteredData: DATA, data: DATA});
  }
  clear = () => {
    this.setState({
      filteredData: this.state.data,
      search: '',
    });
  };
  SearchFilterFunction(text) {
    const {filteredData, data} = this.state;
    //passing the inserted text in textinput
    let newData = [...data];
    if (text.trim() !== '') {
      newData = filteredData.filter(function(item) {
        //applying filter for the inserted text in search bar
        const itemData = item.title ? item.title.toUpperCase() : '';
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
    }

    this.setState({
      filteredData: newData,
      search: text,
    });
  }

  render() {
    const {filteredData, search} = this.state;
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
          round
          searchIcon={{size: 24}}
          onChangeText={item => this.SearchFilterFunction(item)}
          onClear={item => this.clear(item)}
          placeholder="Type Here..."
          value={search}
        />

        <FlatList
          data={filteredData}
          renderItem={({item}) => <Item id={item.id} title={item.title} />}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS == 'ios' ? 30 : 0,
  },
  textStyle: {
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
