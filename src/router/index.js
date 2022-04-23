import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {
  Home,
  Splash,
  UMKM,
  Riwayat,
  Komunitas,
  Akun,
  ArtikelDetail,
  UMKMDetail,
  Verifikasi1,
  Verifikasi2,
  Verifikasi3,
  Verifikasi4,
  RiwayatDetail,
  KomunitasDetail,
  Notification,
  GrafikPenjualan,
  DanaiUMKM
} from '../pages';
import {Image, TouchableOpacity} from 'react-native';
import {fonts} from '../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {IconNotification} from '../assets';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerTitle: () => (
            <Image
              style={{width: 147, height: 42}}
              source={require('../assets/images/logowithtext.png')}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{marginRight: 22}}
              onPress={() => navigation.navigate('Notification')}>
              <IconNotification />
            </TouchableOpacity>
          ),
        })}
      />
      <Tab.Screen name="UMKM" component={UMKM} options={{headerShown: false}} />
      <Tab.Screen
        name="Riwayat"
        component={Riwayat}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Komunitas"
        component={Komunitas}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Akun"
        component={Akun}
        options={{
          headerTitle: () => (
            <Image
              style={{width: 147, height: 42, alignItems: 'center'}}
              source={require('../assets/images/logowithtext.png')}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verifikasi1"
        component={Verifikasi1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verifikasi2"
        component={Verifikasi2}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back.png'),
          title: 'e-KTP',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: RFValue(20),
          },
        }}
      />
      <Stack.Screen
        name="Verifikasi3"
        component={Verifikasi3}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back.png'),
          title: 'Data Diri',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: RFValue(20),
          },
        }}
      />
      <Stack.Screen
        name="Verifikasi4"
        component={Verifikasi4}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back.png'),
          title: 'Data Diri',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: RFValue(20),
          },
          headerTitle: () => (
            <Image
              style={{width: 147, height: 42}}
              source={require('../assets/images/logowithtext.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Artikel Detail"
        component={ArtikelDetail}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back.png'),
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image
              style={{width: 147, height: 42}}
              source={require('../assets/images/logowithtext.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="UMKM Detail"
        component={UMKMDetail}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back.png'),
          title: 'Detail UMKM',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: RFValue(20),
          },
        }}
      />
      <Stack.Screen
        name="Riwayat Detail"
        component={RiwayatDetail}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back.png'),
          title: 'Data Diri',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: RFValue(20),
          },
          headerTitle: () => (
            <Image
              style={{width: 147, height: 42}}
              source={require('../assets/images/logowithtext.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Komunitas Detail"
        component={KomunitasDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back.png'),
          title: 'Notification',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: RFValue(20),
          },
        }}
      />
      <Stack.Screen
        name="Grafik Penjualan"
        component={GrafikPenjualan}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back.png'),
          title: 'Detail UMKM',
          animation: 'none',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: RFValue(20),
          },
        }}
      />
      <Stack.Screen
        name="Danai UMKM"
        component={DanaiUMKM}
        options={{
          headerBackImageSource: require('../assets/icons/arrow-back.png'),
          title: 'Pendanaan',
          animation: 'none',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: fonts.primary.semiBold,
            fontSize: RFValue(20),
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
