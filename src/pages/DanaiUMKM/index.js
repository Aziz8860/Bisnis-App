import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {DanaTersedia, IconLocation} from '../../assets';
import {Jarak} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

export default class UMKMDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      umkm: this.props.route.params.umkm,
      modalVisible: false,
      nominal: '0',
      minBunga: '0',
      maxBunga: '0'
    };
  }

  setModalVisible = visible => {
    this.setState({
      modalVisible: visible,
    });
  };

  changeNominal1() {
    this.setState({
      nominal: '100.000',
    });
  }

  changeNominal2() {
    this.setState({
      nominal: '500.000',
    });
  }

  changeNominal3() {
    this.setState({
      nominal: '1.000.000',
    });
  }

  changeMinBunga() {
    this.setState((previousState) => {
      return {
      minBunga: previousState.nominal*0.18*1000,
    }})
  }

  changeMaxBunga() {
    this.setState((previousState) => {
      return {
      maxBunga: previousState.nominal*0.3*1000,
    }})
  }

  changeMinBungaJuta() {
    this.setState((previousState) => {
      return {
      minBunga: 0.18*1000000,
    }})
  }

  changeMaxBungaJuta() {
    this.setState((previousState) => {
      return {
      maxBunga: 0.3*1000000,
    }})
  }

  render() {
    const {modalVisible} = this.state;
    const {umkm} = this.state;
    const {navigation} = this.props;
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
              <Text style={styles.modalText}>
                Terima kasih telah melakukan pendanaan!
              </Text>

              <Pressable
                style={styles.buttonModal}
                onPress={() => this.setModalVisible(!modalVisible)}>
                <Text style={styles.hideModalText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={styles.topBar}>
          <Image source={umkm.avatarImage} style={styles.image} />
          <View style={styles.titles}>
            <Text style={styles.namaUMKM}>{umkm.title}</Text>
            <Text style={styles.namaPemilik}>{umkm.owner}</Text>
            <View style={{flexDirection: 'row'}}>
              <IconLocation />
              <Text style={styles.location}>{umkm.city}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.tipeSertifikat}>Bersertifikat</Text>
              <Text style={styles.tipeExcellent}>Excellent UMKM</Text>
            </View>
          </View>
        </View>
        <ScrollView style={styles.content}>
          <Text style={styles.judul}>Mau Investasi Berapa?</Text>
          <View style={styles.cardInvestasi}>
            <Text style={styles.money}>Rp {this.state.nominal}</Text>
            <View style={styles.options}>
              <TouchableOpacity onPress={() => {this.changeNominal1(), this.changeMinBunga(), this.changeMinBunga(), this.changeMaxBunga()}}>
                <Text style={styles.nominal}>100.000</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.changeNominal2(), this.changeMinBunga(), this.changeMinBunga(), this.changeMaxBunga()}}>
                <Text style={styles.nominal}>500.000</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.changeNominal3(), this.changeMinBunga(), this.changeMinBungaJuta(), this.changeMaxBungaJuta()}}>
                <Text style={styles.nominal}>1.000.000</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.optionDanaiTunggal}>
            <TouchableOpacity>
              <Text style={styles.buttonDanaiTunggal}>O</Text>
            </TouchableOpacity>
            <Text style={styles.optionDanaiTunggalText}>Danai Tunggal</Text>
          </View>

          <Text style={[styles.judul, {marginTop: responsiveHeight(16)}]}>
            Kalkulator Investasi
          </Text>
          <View style={styles.cardKalkulator}>
            <Text style={styles.estimasiText}>
              Estimasi keuntungan per tahun
            </Text>
            <Text style={styles.estimasiNumber}>Rp {this.state.minBunga} - Rp {this.state.maxBunga}</Text>
          </View>
          <View
            style={[styles.cardKalkulator, {marginTop: responsiveHeight(12)}]}>
            <Text style={styles.estimasiText}>Estimasi dividen per tahun</Text>
            <Text style={styles.estimasiNumber}>18% - 30%</Text>
          </View>
          <Text style={[styles.judul, {marginTop: responsiveHeight(16)}]}>
            Bayar
          </Text>
          <Image source={DanaTersedia} style={styles.danaTersediaImage} />
          <TouchableOpacity
            style={styles.buttonDanaiPage}
            onPress={() => this.setModalVisible(!modalVisible)}>
            <Text style={styles.buttonText}>Danai</Text>
          </TouchableOpacity>
          <Jarak height={responsiveHeight(70)} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topBar: {
    borderBottomWidth: 1,
    borderColor: colors.grayLight,
    height: responsiveHeight(146),
    paddingVertical: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(16),
    flexDirection: 'row',
  },
  image: {
    height: responsiveHeight(100),
    width: responsiveHeight(100),
    alignSelf: 'center',
  },
  titles: {
    marginLeft: responsiveWidth(16),
  },
  namaUMKM: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(14),
    color: colors.black,
  },
  namaPemilik: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.grayBold,
  },
  location: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.grayLight,
  },
  tipeSertifikat: {
    marginTop: responsiveHeight(4),
    marginRight: responsiveWidth(4),
    backgroundColor: colors.white,
    color: colors.green,
    borderColor: colors.grayLight,
    borderWidth: 0.5,
    fontSize: RFValue(12),
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 16,
  },
  tipeExcellent: {
    marginTop: responsiveHeight(4),
    backgroundColor: colors.gold,
    color: colors.white,
    fontSize: RFValue(12),
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 16,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: responsiveHeight(22),
    paddingHorizontal: responsiveWidth(22),
  },
  judul: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(16),
    color: colors.black,
  },
  cardInvestasi: {
    height: responsiveHeight(150),
    borderColor: colors.grayLight,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  money: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.black,
    marginBottom: responsiveHeight(8),
  },
  options: {
    flexDirection: 'row',
    borderColor: colors.blue600,
    borderTopWidth: 2,
  },
  nominal: {
    marginTop: responsiveHeight(18),
    backgroundColor: colors.white,
    color: colors.blue500,
    borderColor: colors.grayLight,
    borderWidth: 1,
    textAlign: 'center',
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(14),
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 16,
    marginHorizontal: responsiveWidth(8),
  },
  optionDanaiTunggal: {
    marginTop: responsiveHeight(8),
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  buttonDanaiTunggal: {
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(16),
    color: colors.blue600,
  },
  optionDanaiTunggalText: {
    marginLeft: responsiveWidth(6),
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(12),
    color: colors.black,
  },
  cardKalkulator: {
    height: responsiveHeight(70),
    borderColor: colors.grayLight,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    paddingHorizontal: responsiveWidth(16),
  },
  estimasiText: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(11),
    color: colors.grayBold,
  },
  estimasiNumber: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(14),
    color: colors.black,
  },
  danaTersediaImage: {
    height: 51,
    width: 328,
  },
  buttonDanaiPage: {
    backgroundColor: colors.blue600,
    height: responsiveHeight(58),
    width: '100%',
    marginTop: responsiveHeight(32),
    borderRadius: 4,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.white,
  },
  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  modalText: {
    marginTop: responsiveHeight(16),
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.black,
  },
  modalView: {
    margin: 5,
    width: responsiveWidth(320),
    height: responsiveHeight(150),
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
});
