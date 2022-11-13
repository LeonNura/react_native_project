import React from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import data from '../data/data.json';
import ItemData from '../components/ItemData';

class Samsung extends React.Component{
  constructor(){
    super();
    this.state = {
        phone: [],
    }
  }

  componentDidMount(){
      this.setState({
          phone: data
      })
  }
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, , quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
            <View style={styles.listContainer}>
                  <FlatList  data={this.state.phone.Samsung} renderItem={({item}) => (
                    <ItemData name={item.name} categoryOfProduct={item.category} price={item.price}
                          img={item.image} desc={item.description}/>
                  )}/>
            </View>
        </View>
      </ScrollView>
    ); 
  }
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    listContainer: {
      marginVertical: 16,
    },
});
  
export default Samsung;
