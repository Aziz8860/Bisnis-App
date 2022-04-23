import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IconArrowBack} from '../../../assets';

const HeaderGroup = ({chat, image, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={IconArrowBack} style={styles.back} />
        </TouchableOpacity>
        <Image source={image} style={styles.groupImage} />
        <Text style={styles.title}>{chat.title}</Text>
      </View>
    </View>
  );
};

export default HeaderGroup;

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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 18,
  },
  back: {
    height: 18.77,
    width: 10.74,
  },
  groupImage: {
    marginLeft: 24,
    width: 42,
    height: 42,
    marginRight: 12,
  },
  title: {
    fontFamily: fonts.primary.semiBold,
    fontSize: 16,
    color: colors.black
  }
});
