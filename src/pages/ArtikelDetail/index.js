import {Text, Image, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

export default class ArtikelDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artikel: this.props.route.params.artikel,
      image: this.props.route.params.artikel.image,
    };
  }

  render() {
    const {artikel, image} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{artikel.title}</Text>
          <Image source={image} style={styles.image} />
          <Text style={styles.paragraph}>{artikel.desc}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: responsiveHeight(32),
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.black,
  },
  image: {
    width: responsiveWidth(200),
    height: responsiveHeight(230),
    alignSelf: 'center',
    marginTop: responsiveHeight(24),
    borderRadius: 6
  },
  paragraph: {
    textAlign: 'justify',
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(14),
    color: colors.black,
  }
});
