import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveWidth, responsiveHeight} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {UploadKTP, UbahFoto} from '../../assets';
import {Jarak} from '../../components';

export default class Verifikasi3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      nomorKTP: '',
      nomorHP: '',
      tanggal: '',
      alamat: '',
      kelurahan: '',
      kecamatan: '',
      kota: '',
      provinsi: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.judul}>Foto KTP</Text>
          <View style={styles.squareFoto}>
            <Image source={UploadKTP} style={styles.image} />
            <TouchableOpacity>
              <Image source={UbahFoto} style={styles.buttonFoto} />
            </TouchableOpacity>
          </View>
          <Text style={styles.judul}>Nomor KTP</Text>
          <TextInput
            style={styles.input}
            placeholder="0123456789"
            onChangeText={nomorKTP => this.setState({nomorKTP})}
            value={this.state.nomorKTP}
            keyboardType="numeric"
          />
          <Text style={styles.judul}>Nama Lengkap</Text>
          <TextInput
            style={styles.input}
            placeholder="Adi Kusumo"
            onChangeText={nama => this.setState({nama})}
            value={this.state.nama}
          />
          <Text style={styles.judul}>Nomor Handphone</Text>
          <TextInput
            style={styles.input}
            placeholder="0812293330"
            onChangeText={nomorHP => this.setState({nomorHP})}
            value={this.state.nomorHP}
            keyboardType="numeric"
          />
          <Text style={styles.judul}>Tanggal Lahir</Text>
          <TextInput
            style={styles.input}
            placeholder="20 April 1980"
            onChangeText={tanggal => this.setState({tanggal})}
            value={this.state.tanggal}
          />
          <Text style={styles.judul}>Alamat Lengkap</Text>
          <TextInput
            style={styles.input}
            placeholder="Jl. Serayu No.6 RT01/RW03"
            onChangeText={alamat => this.setState({alamat})}
            value={this.state.alamat}
          />
          <Text style={styles.judul}>Kelurahan</Text>
          <TextInput
            style={styles.input}
            placeholder="Wero"
            onChangeText={kelurahan => this.setState({kelurahan})}
            value={this.state.kelurahan}
          />
          <Text style={styles.judul}>Kecamatan</Text>
          <TextInput
            style={styles.input}
            placeholder="Gombong"
            onChangeText={kecamatan => this.setState({kecamatan})}
            value={this.state.kecamatan}
          />
          <Text style={styles.judul}>Kota/Kabupaten</Text>
          <TextInput
            style={styles.input}
            placeholder="Kebumen"
            onChangeText={kota => this.setState({kota})}
            value={this.state.kota}
          />
          <Text style={styles.judul}>Provinsi</Text>
          <TextInput
            style={styles.input}
            placeholder="Jawa Tengah"
            onChangeText={provinsi => this.setState({provinsi})}
            value={this.state.provinsi}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Verifikasi4')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Verifikasi</Text>
            </View>
          </TouchableOpacity>
          <Jarak height={responsiveHeight(28)} />
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
  judul: {
    fontFamily: fonts.primary.semiBold,
    color: colors.black,
    fontSize: RFValue(16),
    marginLeft: responsiveWidth(24),
    marginTop: responsiveHeight(18),
    marginBottom: responsiveHeight(6),
  },
  squareFoto: {
    borderWidth: 2,
    backgroundColor: '#F6F8FF',
    borderRadius: 4,
    borderColor: '#DBE0F1',
    width: responsiveWidth(370),
    height: responsiveHeight(250),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: responsiveHeight(162),
    width: responsiveWidth(84),
  },
  buttonFoto: {
    marginTop: responsiveHeight(18),
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: colors.grayLight,
    width: responsiveWidth(370),
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.blue600,
    height: responsiveHeight(58),
    width: responsiveWidth(370),
    marginTop: responsiveHeight(26),
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
});
