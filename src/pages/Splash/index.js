import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {Logo} from '../../assets';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';

export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('MainApp');
    }, 1500); // set to 3000
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo}/>
        <Text style={styles.textBisnis}>Bisnis</Text>
        <Text style={styles.textKita}>Kita</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: responsiveHeight(72),
    width: responsiveHeight(72),
  },
  textBisnis: {
    marginLeft: responsiveWidth(7),
    color: colors.black,
    fontFamily: fonts.secondary.black,
    fontSize: 36,
  },
  textKita: {
    color: colors.blueLogo,
    fontFamily: fonts.secondary.black,
    fontSize: 36,
  },
});
