import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {CardUMKM} from '../../small';

const ListUMKM = ({UMKMs, navigation}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      >
      {UMKMs.map(umkm => {
        return <CardUMKM umkm={umkm} key={umkm.id} navigation={navigation} />;
      })}
    </ScrollView>
  );
};

export default ListUMKM;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
