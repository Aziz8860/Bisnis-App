import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {HeaderGroup} from '../../components';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {IconAdd, IconSend} from '../../assets';

export default class KomunitasDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: this.props.route.params.chat,
      image: this.props.route.params.chat.image,
      text: '',
    };
  }

  render() {
    const {chat, image} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <HeaderGroup image={image} chat={chat} navigation={navigation} />
        <View style={styles.content}>
          <Text style={styles.tanggal}>{chat.calendar}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.chatBox}>
              <Text style={styles.nama}>{chat.name}</Text>
              <Text style={styles.pesan}>{chat.messageOnly}</Text>
            </View>
            <Text style={styles.time}>{chat.time}</Text>
          </View>
        </View>
        <View style={styles.textInputSquare}>
          <TextInput
            style={styles.input}
            placeholder="Tulis pesan ..."
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
          <TouchableOpacity>
            <IconAdd />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSend />
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
    flex: 1,
    backgroundColor: colors.grayCard,
  },
  tanggal: {
    backgroundColor: colors.grayLight,
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.white,
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 8,
    marginTop: responsiveHeight(24),
  },
  chatBox: {
    height: responsiveHeight(90),
    width: responsiveWidth(224),
    marginTop: responsiveHeight(44),
    marginLeft: responsiveWidth(20),
    backgroundColor: colors.white,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    paddingTop: responsiveHeight(10),
    paddingLeft: responsiveWidth(10),
  },
  nama: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(12),
    color: colors.blue500,
  },
  pesan: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.black,
    marginTop: responsiveWidth(2),
  },
  time: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.grayBold,
    marginLeft: responsiveWidth(8),
    alignSelf: 'flex-end',
  },
  textInputSquare: {
    height: responsiveHeight(90),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(20),
  },
  input: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 4,
    borderColor: colors.grayLight,
    width: responsiveWidth(310),
    alignSelf: 'center',
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
  },
});
