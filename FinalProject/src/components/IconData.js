import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const IconData = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={props.iconName} size={25} color="#0984e3" />
            </View>
            <Text style={styles.text}>{props.iconText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: '#74b9ff',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }

});


export default IconData;