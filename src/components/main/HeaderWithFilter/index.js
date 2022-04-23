import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {IconFilter, LogoWithText} from '../../../assets';

const HeaderWithFilter = props => {
  return (
    <View style={styles.container}>
      <View style={styles.logoAndText}>
        <Image source={LogoWithText} style={styles.image} />
        <TouchableOpacity style={styles.button}>
          <IconFilter />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderWithFilter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 64,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  logoAndText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 14,
  },
  image: {
    width: 147,
    height: 42,
  },
  button: {
    marginRight: 12,
  },
});
