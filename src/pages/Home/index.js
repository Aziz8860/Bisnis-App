import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {
  IconRefresh,
  IconAddCircle,
  Progress,
  ProgressCompleted,
} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {listUMKM, listArtikel} from '../../data';
import {ListUMKM, Artikel} from '../../components';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UMKMs: listUMKM,
      artikels: listArtikel,
      verified: false,
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState() {
    this.setState({
      verified: true,
    });
  }

  VerificationTitle() {
    return this.state.verified ? 'Selamat, akun Anda telah terverifikasi!' : 'Aktivasi akun Anda supaya bisa mulai pendanaan';
  }

  VerificationImage() {
    return this.state.verified ? <ProgressCompleted /> : <Progress />;
  }

  VerificationText() {
    return this.state.verified ? (
      <Text style={styles.mulaiVerifikasi}>Ubah Data</Text>
    ) : (
      <Text style={styles.mulaiVerifikasi}>Mulai Verifikasi</Text>
    );
  }

  VerificationDestination() {
    return this.state.verified ? 'Verifikasi3' : 'Verifikasi1';
  }

  render() {
    const {UMKMs, artikels, index} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.totalAset}>Total Aset Saya</Text>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={styles.rupiah}>Rp 0</Text>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <IconRefresh />
            </TouchableOpacity>
          </View>
          <Text style={styles.update}>Terakhir update 2 jam lalu</Text>
          <View style={styles.squareDana}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: responsiveWidth(16),
              }}>
              <View style={{marginVertical: responsiveHeight(14)}}>
                <Text style={styles.dana}>Dana Tersedia</Text>
                <Text style={styles.rupiahDana}>Rp 0</Text>
              </View>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <IconAddCircle />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.squareAktivasi}>
            <Text style={styles.textAktivasi}>
              {this.VerificationTitle()}
            </Text>
            {this.VerificationImage()}
            <TouchableOpacity
              style={styles.buttonVerifikasi}
              onPress={() => {
                this.props.navigation.navigate(this.VerificationDestination()),
                  this.changeState();
              }}>
              {this.VerificationText()}
            </TouchableOpacity>
          </View>
          <View style={{width: responsiveWidth(328)}}>
            <View style={styles.rowJudul}>
              <Text style={styles.textJudul}>List UMKM</Text>
              <TouchableOpacity onPress={() => navigation.navigate('UMKM')}>
                <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            <ListUMKM UMKMs={UMKMs} navigation={navigation} />
            <View style={styles.rowJudul}>
              <Text style={styles.textJudul}>Artikel</Text>
              <TouchableOpacity>
                <Text style={styles.buttonLihatSemua}>Lihat Semua</Text>
              </TouchableOpacity>
            </View>
            <Artikel artikels={artikels} navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  totalAset: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    marginTop: responsiveHeight(28),
    color: colors.grayStatusBar,
    opacity: 0.8,
    textAlign: 'center',
  },
  rupiah: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(32),
    marginRight: responsiveWidth(12),
    color: colors.grayStatusBar,
    opacity: 0.8,
    textAlign: 'center',
  },
  update: {
    textAlign: 'center',
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
    color: colors.grayLight,
  },
  squareDana: {
    backgroundColor: 'rgba(0, 140, 160, 0.6)', // blue600
    height: responsiveHeight(100),
    width: responsiveWidth(328),
    borderRadius: 4,
    marginTop: responsiveHeight(8),
    alignSelf: 'center',
  },
  dana: {
    fontFamily: fonts.primary.semiBold,
    color: colors.white,
    fontSize: RFValue(14),
  },
  rupiahDana: {
    fontFamily: fonts.primary.semiBold,
    color: colors.white,
    fontSize: RFValue(20),
  },
  squareAktivasi: {
    borderWidth: 2,
    borderColor: '#F5F6F8',
    height: responsiveHeight(260),
    width: responsiveWidth(328),
    borderRadius: 4,
    marginTop: responsiveHeight(18),
    alignItems: 'center',
    alignSelf: 'center',
  },
  textAktivasi: {
    fontFamily: fonts.primary.regular,
    color: colors.grayStatusBar,
    fontSize: RFValue(14),
    textAlign: 'center',
    marginTop: responsiveHeight(6),
    marginBottom: responsiveHeight(6),
  },
  buttonVerifikasi: {
    height: responsiveHeight(48),
    width: responsiveWidth(269),
    backgroundColor: colors.blue600,
    marginTop: responsiveHeight(16),
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mulaiVerifikasi: {
    color: colors.white,
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(14),
  },
  rowJudul: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(24),
    marginBottom: responsiveHeight(8),
  },
  textJudul: {
    color: colors.black,
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(14),
  },
  buttonLihatSemua: {
    color: colors.blue500,
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(12),
  },
});
