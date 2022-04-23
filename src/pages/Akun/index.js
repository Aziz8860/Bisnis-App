import {
  Modal,
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {
  ProfilePicture,
  IconDataPribadi,
  IconPengaturan,
  IconRekening,
  IconPusatBantuan,
  IconSyaratKetentuan,
  IconTentangAplikasi,
  IconNext,
  Bronze,
  Silver,
  Gold,
  Platinum,
  Juragan,
} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';

export default class Akun extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = visible => {
    this.setState({
      modalVisible: visible,
    });
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(true);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.badges}>Badges</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={Juragan} style={styles.badgeImage} />
                <Text style={styles.badgeText}>
                  - Menyelesaikan 4 transaksi
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={Platinum} style={styles.badgeImage} />
                <Text style={styles.badgeText}>
                  - Menyelesaikan 3 transaksi
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={Gold} style={styles.badgeImage} />
                <Text style={styles.badgeText}>
                  - Menyelesaikan 2 transaksi
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={Silver} style={styles.badgeImage} />
                <Text style={styles.badgeText}>
                  - Menyelesaikan 1 transaksi
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={Bronze} style={styles.badgeImage} />
                <Text style={styles.badgeText}>
                - Menyelesaikan 0 transaksi
                </Text>
              </View>

              <Pressable
                style={styles.buttonModal}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styles.hideModalText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={styles.contentProfile}>
          <Image source={ProfilePicture} style={styles.profpic} />
          <View style={{marginLeft: responsiveWidth(20)}}>
            <Text style={styles.name}>Adi Kusumo</Text>
            <TouchableOpacity
              onPress={() => this.setModalVisible(!modalVisible)}>
              <Image source={Gold} style={styles.gold} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentRow}>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconDataPribadi />
              <Text style={styles.textMenu}>Data Pribadi</Text>
            </View>
            <TouchableOpacity>
              <IconNext />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconPengaturan />
              <Text style={styles.textMenu}>Pengaturan</Text>
            </View>
            <TouchableOpacity>
              <IconNext />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconRekening />
              <Text style={styles.textMenu}>Rekening Penarikan</Text>
            </View>
            <TouchableOpacity>
              <IconNext />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentRow}>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconPusatBantuan />
              <Text style={styles.textMenu}>Pusat Bantuan</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.lihatButton}>Lihat di sini</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconSyaratKetentuan />
              <Text style={styles.textMenu}>Syarat Ketentuan</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.lihatButton}>Lihat di sini</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <View style={{flexDirection: 'row'}}>
              <IconTentangAplikasi />
              <Text style={styles.textMenu}>Tentang Aplikasi</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.lihatButton}>Lihat di sini</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bagianBawah}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.logoutText}>Keluar</Text>
          </TouchableOpacity>
          <Text style={styles.versionText}>BisnisKita App Version 1.0</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F8'
  },
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.45)'
  },
  badges: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(14),
    color: colors.black,
  },
  badgeImage: {
    height: responsiveHeight(18),
    width: responsiveWidth(64),
  },
  badgeText: {
    marginLeft: responsiveWidth(4),
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.black,
  },
  modalView: {
    margin: 5,
    width: responsiveWidth(320),
    height: responsiveHeight(260),
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: responsiveHeight(12),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonModal: {
    backgroundColor: colors.blue600,
    height: responsiveHeight(40),
    width: responsiveWidth(60),
    marginTop: responsiveHeight(20),
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hideModalText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(12),
    color: colors.white,
  },
  contentProfile: {
    height: responsiveHeight(96),
    marginTop: responsiveHeight(6),
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(20),
    alignItems: 'center',
  },
  profpic: {
    height: responsiveHeight(64),
    width: responsiveHeight(64),
  },
  name: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(16),
    color: colors.black,
  },
  gold: {
    height: 23,
    width: 85,
  },
  contentRow: {
    height: responsiveHeight(180),
    marginTop: responsiveHeight(12),
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    height: responsiveHeight(62),
    borderBottomWidth: 1,
    borderColor: '#F5F6F8',
    alignSelf: 'stretch',
    paddingHorizontal: responsiveWidth(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textMenu: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(14),
    color: colors.black,
    marginLeft: responsiveWidth(8),
  },
  lihatButton: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(12),
    color: colors.blue600,
  },
  bagianBawah: {
    flex: 1,
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.blue600,
    height: responsiveHeight(58),
    width: responsiveWidth(340),
    marginTop: responsiveHeight(72),
    borderRadius: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.white,
  },
  versionText: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(12),
    color: colors.grayLight,
    textAlign: 'center',
    marginTop: responsiveHeight(32),
  },
});
