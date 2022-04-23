import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {Header} from '../../components';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {listUMKM} from '../../data';
import {CardUMKM} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

export default class UMKM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UMKMs: listUMKM,
    };
  }

  render() {
    const {UMKMs, index} = this.state;
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.kategoriText}>Kategori</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.kategoriActive}>
              <Text style={styles.innerTextActive}>Semua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kategoriNonActive}>
              <Text style={styles.innerTextNonActive}>Menengah</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kategoriNonActive}>
              <Text style={styles.innerTextNonActive}>Kecil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kategoriNonActive}>
              <Text style={styles.innerTextNonActive}>Mikro</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.cardUMKM}>
            {UMKMs.map(umkm => {
              return (
                <>
                  <CardUMKM umkm={umkm} key={umkm.id} navigation={navigation} />
                  <View style={styles.spacing}/>
                </>
              );
            })}
          </View>
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
  kategoriText: {
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(16),
    color: colors.black,
  },
  kategoriActive: {
    backgroundColor: colors.blue500,
    height: responsiveHeight(48),
    width: responsiveWidth(120),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: responsiveHeight(12),
    marginRight: responsiveWidth(6),
  },
  kategoriNonActive: {
    backgroundColor: '#F5F5F5',
    height: responsiveHeight(48),
    width: responsiveWidth(126),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: responsiveHeight(12),
    marginRight: responsiveWidth(6),
  },
  innerTextActive: {
    color: colors.white,
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(14),
  },
  innerTextNonActive: {
    color: colors.grayBold,
    fontFamily: fonts.primary.semiBold,
    fontSize: RFValue(14),
  },
  cardUMKM: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: responsiveHeight(22),
  },
  spacing: {
    marginRight: responsiveWidth(9),
  },
});
