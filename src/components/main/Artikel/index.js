import {View} from 'react-native';
import React from 'react';
import {CardArtikel, Jarak} from '../../small';

const Artikel = ({artikels, navigation}) => {
  return (
    <View>
      {artikels.map(artikel => {
        return (
          <CardArtikel
            artikel={artikel}
            key={artikel.key}
            navigation={navigation}
          />
        );
      })}
      <Jarak height={70} />
    </View>
  );
};

export default Artikel;
