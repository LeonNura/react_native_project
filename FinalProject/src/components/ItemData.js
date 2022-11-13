import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ItemData = (props) => {
    return(
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image source={{uri:`${props.img}`}} style={styles.img} resizeMode="cover"/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.cat}>{props.categoryOfProduct}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 130,
        flexDirection: 'row',
        borderRadius: 8,
        marginRight: 10,
        backgroundColor: '#DCDCDC',
        marginBottom: 16

    },
    img: {
        width: 100,
        height: '100%',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },

    textContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    cat: {
        fontSize: 12
    }, 
    desc: {
        width: '90%',
        paddingVertical: 10
    },
    price: {
        fontWeight: 'bold'
    }
});

export default ItemData;

