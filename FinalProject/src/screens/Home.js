import React from "react";
import { Text, StyleSheet, View, Button, Image, FlatList, ScrollView, TouchableOpacity} from "react-native";
import Swiper from 'react-native-swiper';
import IconData from '../components/IconData';
import ItemData from '../components/ItemData';
import data from '../data/data.json';

class Home extends React.Component{
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
        <View style={styles.sliderContainer}>
          <Swiper autoplay 
            horizontal={false}
            activeDotColor="#0984e3"
            autoplayTimeout={5}
          >
            <View style={styles.slide}>
              <Image source={require('../../assets/banner-1.jpg')}
                resizeMode="cover"
                style={styles.imgSlider}
              />
            </View>
            <View style={styles.slide}>
              <Image source={require('../../assets/banner-2.jpg')}
                resizeMode="cover"
                style={styles.imgSlider}
              />
            </View>
            <View style={styles.slide}>
              <Image source={require('../../assets/banner-3.jpg')}
                resizeMode="cover"
                style={styles.imgSlider}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.iconsContainer}>
          <IconData iconName="laptop" iconText="Computers"/>

            <TouchableOpacity 
                onPress = {() => this.props.navigation.navigate('Samsung')}>
                <IconData iconName="mobile-phone" iconText="Phones"/>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress = {() => this.props.navigation.navigate('Apple')}>
              <IconData iconName="tv" iconText="TV"/>
           </TouchableOpacity>
           
        </View>

        <View style={styles.listContainer}>
            <Text style={styles.heading}>Recently Viewed</Text>
            <FlatList horizontal={false} showsHorizontalScrollIndicator={false} data={this.state.phone.popularphone} renderItem={({item}) => (
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
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 8,
    },

    sliderContainer: {
      height: 200,
      width: '90%',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
      marginTop: 10
    }, 
    
    imgSlider: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      borderRadius: 8
    }, 
    
    slide: {
      flex: 1,
      justifyContent: 'center',
      borderRadius: 8
    },

    iconsContainer: {
      width: '100%',
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 10
    },

    listContainer: {
      marginVertical: 10,
      marginHorizontal: 25
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16
    }
});
  
export default Home;