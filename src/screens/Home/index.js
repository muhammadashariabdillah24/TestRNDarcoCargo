import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {
  ButtonWithOneText,
  FieldInputWithLeftIcon,
  SizeBox,
} from '../../components';
import {colors} from '../../utils';
import Template from '../Template';

const Home = () => {
  const [sendingCity, setSendingCity] = useState('');
  const [receipmentCity, setReceipmentCity] = useState('');
  const [province, setProvince] = useState('');
  const [subdistrict, setSubdistrict] = useState('');
  const [ward, setWard] = useState('');

  return (
    <Template>
      <ScrollView>
        <SizeBox typeDirection="COLUMN" size="large" />
        <FieldInputWithLeftIcon
          icon="map-marker"
          value={sendingCity}
          placeholder="Masukan Kota Pengirim"
          onChangeText={text => setSendingCity(text)}
        />
        <SizeBox typeDirection="COLUMN" size="regular" />
        <FieldInputWithLeftIcon
          icon="map-marker"
          value={receipmentCity}
          placeholder="Masukan Kota Penerima"
          onChangeText={text => setReceipmentCity(text)}
        />
        <SizeBox typeDirection="COLUMN" size="regular" />
        <FieldInputWithLeftIcon
          icon="earth"
          value={province}
          placeholder="Masukan Provinsi"
          onChangeText={text => setProvince(text)}
        />
        <SizeBox typeDirection="COLUMN" size="regular" />
        <FieldInputWithLeftIcon
          icon="city"
          value={subdistrict}
          placeholder="Masukan Kecamatan"
          onChangeText={text => setSubdistrict(text)}
        />
        <SizeBox typeDirection="COLUMN" size="regular" />
        <FieldInputWithLeftIcon
          icon="city"
          value={ward}
          placeholder="Masukan Kelurahan"
          onChangeText={text => setWard(text)}
        />
        <SizeBox typeDirection="COLUMN" size="large" />
        <ButtonWithOneText
          buttonText="Proses"
          buttonColor={colors.primary}
          onPress={() => console.log('Oke')}
        />
      </ScrollView>
    </Template>
  );
};

export default Home;
