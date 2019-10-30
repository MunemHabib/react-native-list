import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fourth ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Fifth ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sixth ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Seventh ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Eighth ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'ninth ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tenth ',
  },
];

function Item({id, title, selected, onSelect}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onSelect(id)}
        style={[
          styles.item,
          {backgroundColor: selected ? '#6e3b6e' : '#f9c2ff'},
        ]}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Flattsil() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={query => {
          this.setState({firstQuery: query});
        }}
        value={this}
      />
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
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
