import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconAkun,
  IconAkunAktif,
  IconHome,
  IconHomeAktif,
  IconKomunitas,
  IconKomunitasAktif,
  IconRiwayat,
  IconRiwayatAktif,
  IconUMKM,
  IconUMKMAktif,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if (label === 'UMKM') {
      return isFocused ? <IconUMKMAktif /> : <IconUMKM />;
    }
    if (label === 'Riwayat') {
      return isFocused ? <IconRiwayatAktif /> : <IconRiwayat />;
    }
    if (label === 'Komunitas') {
      return isFocused ? <IconKomunitasAktif /> : <IconKomunitas />;
    }
    if (label === 'Akun') {
      return isFocused ? <IconAkunAktif /> : <IconAkun />;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    color: isFocused ? colors.blue600 : colors.grayLight,
    fontSize: 12,
    marginTop: 4,
    fontFamily: fonts.primary.medium,
  }),
});
