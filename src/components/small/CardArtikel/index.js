import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import { RFValue } from 'react-native-responsive-fontsize';

const CardArtikel = ({artikel, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Artikel Detail', {artikel})}>
      <View style={{flexDirection: 'row', marginBottom: responsiveHeight(12)}}>
        <Image source={artikel.image} style={styles.gambar} />
        <View style={{flex: 1}}>
            <Text style={styles.judul}>{artikel.title}</Text>
            <Text style={styles.tanggal}>{artikel.date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardArtikel;

const styles = StyleSheet.create({
  gambar: {
    height: responsiveHeight(82),
    width: responsiveWidth(125),
    borderRadius: 4,
    marginRight: responsiveWidth(15)
  },
  judul: {
    color: colors.black,
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
  },
  tanggal: {
    color: colors.grayBold,
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(10),
  }
});
