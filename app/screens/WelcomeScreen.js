import React from 'react';
import {ImageBackground,
    StyleSheet,
    Image,

} from 'react-native';

function WelcomeScreen(props) {
    return (
        <Image 
        style = {styles.imageStartPage}
        source = {require("../assets/startPage2.png")}
        />
    );
}
const styles = StyleSheet.create({
    imageStartPage: {
        position: 'absolute',
        width: 432,
        height: 349,
        left: -33,
        top: 228
    },
})
export default WelcomeScreen;