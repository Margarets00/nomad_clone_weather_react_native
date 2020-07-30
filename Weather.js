import React from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import propTypes from 'prop-types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions={
    Haze: {
        iconName:"weather-fog",
        gradient : ['#E6DADA','#274046'],
        comment:'안개가 껴있어요'
    },
    Rain :{
        iconName:"weather-pouring",
        gradient : ['#E6DADA','#274046'],
        comment:'안개가 껴있어요'
    },
    Clear :{
        iconName:"weather-sunny",
        gradient : ['#36D1DC','#5B86E5'],
        comment:'화창한 날씨'
    },
    Clouds:{
        iconName:"weather-fog",
        gradient : ['#ECE9E6','#FFFFFF'],
        barStyle:"dark-content",
        comment:'구름이 많은날'
    },
    Mist:{
        iconName:"weather-fog",
        gradient : ['#E6DADA','#274046'],
        comment:'안개가 껴있어요'
    },
    Thunderstorm: {
        iconName:'weather-lightning',
        gradient : ['#403B4A','#F09819'],
        comment:'천둥 번개가 칠거에요!'

    },
    Snow:{
        iconName:"weather-fog",
        gradient : ['#E6DADA','#274046'],
        comment:'안개가 껴있어요'

    },
    Dust:{
        iconName:"weather-fog",
        gradient : ['#E6DADA','#274046'],
        comment:'안개가 껴있어요'

    },
    Drizzle:{
        iconName:"weather-fog",
        gradient : ['#E6DADA','#274046'],
        comment:'안개가 껴있어요'

    }
};

export default function Weather({temp=0,condition='Clear'}){
    return (
        <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size = {96} color='white' name={weatherOptions[condition].iconName}/>
                <Text style={styles.temp}>{temp?temp+'C°':'날씨 맞추는중...'}</Text>
            </View>
            <View style={styles.commentContaienr}>
                <Text style={styles.comment}>{weatherOptions[condition].comment}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp:propTypes.number.isRequired, //temp는 숫자며 반드시 넘어와야함 (propTypes 정의)
    condition:propTypes.oneOf(['Thunderstorm','Drizzle','Rain','Snow','Atmosphere','Clear','Clouds','Dust','Mist','Haze']).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent : 'center',
        alignItems:'center'
    },
    temp:{
        fontSize:32,
        color:'white'
    },
    comment:{
        fontSize:21,
        color:'white'
    },
    halfContainer:{
        flex:1,
        justifyContent : 'center',
        alignItems:'center'
    },
    commentContaienr:{
        flex:1,
        justifyContent : 'center',
        alignItems:'center'
    }
});