import React, {useContext} from 'react';
import Template from '../Template';
import {ButtonWithOneText, Card, SizeBox} from '../../components';
import {colors, HEIGHT} from '../../utils';
import {Text} from 'react-native';
import {fonts} from '../../assets';
import {GlobalContext} from '../../Store/globalContext';
import {navigate} from '../../routes/utils/navigator';

const OnBoarding = () => {
  // Context For Handle DarkMode
  const globalContext = useContext(GlobalContext);
  const dark = globalContext.state.isDark;

  return (
    <Template>
      <Card>
        <Text
          style={{
            fontSize: HEIGHT * 0.025,
            fontFamily: fonts.PoppinsRegular,
            textAlign: 'center',
            color: dark ? colors.black06 : colors.black06,
          }}>
          MUHAMMAD ASHARI ABDILAH
        </Text>
      </Card>
      <SizeBox typeDirection="COLUMN" size="regular" />
      <ButtonWithOneText
        buttonText="Mulai"
        buttonColor={colors.primary}
        onPress={() => navigate('Home')}
      />
    </Template>
  );
};

export default OnBoarding;
