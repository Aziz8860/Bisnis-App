import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {CardChat, Header} from '../../components';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {chatHistory} from '../../data';
import {RFValue} from 'react-native-responsive-fontsize';
import {IconAddCircleLarge} from '../../assets';

export default class Komunitas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: chatHistory,
    };
  }

  render() {
    const {chats, index} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.riwayatText}>Komunitas BisnisKita</Text>
          {chats.map(chat => {
            return (
              <CardChat chat={chat} key={chat.id} navigation={navigation} />
            );
          })}
          <TouchableOpacity style={styles.buttonAdd}>
            <IconAddCircleLarge />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: responsiveHeight(28),
    paddingHorizontal: responsiveWidth(24),
  },
  riwayatText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.black,
  },
  buttonAdd: {
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(-8),
    marginTop: responsiveHeight(310)
  }
});
