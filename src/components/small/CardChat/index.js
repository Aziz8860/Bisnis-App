import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../../utils';
import {RFValue} from 'react-native-responsive-fontsize';

const CardChat = ({chat, navigation}) => {
  return (
    <>
      <TouchableOpacity style={styles.groupContainer} onPress={() => navigation.navigate('Komunitas Detail', {chat})}>
        <Image source={chat.image} style={styles.groupImage} />
        <View style={styles.chatContainer}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={styles.groupTitle}>{chat.title}</Text>
            <Text style={styles.time}>{chat.time}</Text>
          </View>
          <Text style={styles.message}>{chat.chat}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.grayLine} />
    </>
  );
};

export default CardChat;

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: 'row',
    height: responsiveHeight(90),
    marginTop: responsiveHeight(12),
    alignItems: 'center',
  },
  groupImage: {
    height: responsiveHeight(70),
    width: responsiveHeight(70),
  },
  chatContainer: {
    borderColor: colors.blue500,
    width: responsiveWidth(300),
    marginLeft: responsiveWidth(12),
  },
  groupTitle: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(14),
    color: colors.black,
  },
  time: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.blue500,
  },
  message: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.black,
  },
  grayLine: {
    borderWidth: 0.4,
    borderColor: colors.grayLight,
    marginTop: responsiveHeight(12),
  },
});
