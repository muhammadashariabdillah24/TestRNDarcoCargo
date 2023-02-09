import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {colors, HEIGHT, WIDTH} from '../utils';
import {fonts} from '../assets';
import IconRounded from './IconRounded';
import {Layout} from '../themes';
import {GlobalContext} from '../Store/globalContext';

const FieldInputWithLeftIcon = ({
  placeholder,
  placeholderTextColor,
  multiline,
  scrollEnabled,
  onChangeText,
  value,
  icon,
}) => {
  // Context For Handle DarkMode
  const globalContext = useContext(GlobalContext);
  const dark = globalContext.state.isDark;
  return (
    <View
      style={[
        {
          width: WIDTH * 0.9,
          height: HEIGHT * 0.08,
          borderRadius: HEIGHT * 0.05,
          borderColor: dark ? colors.black06 : colors.black06,
          borderWidth: 1,
          paddingLeft: WIDTH * 0.001,
        },
        Layout.rowHCenter,
      ]}>
      <IconRounded nameicon={icon} />
      <TextInput
        value={value}
        style={{
          width: WIDTH * 0.7,
          height: HEIGHT * 0.1,
          fontFamily: fonts.PoppinsRegular,
          fontSize: HEIGHT * 0.02,
          color: dark ? colors.black : colors.black,
          marginLeft: WIDTH * 0.02,
        }}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        multiline={multiline}
        scrollEnabled={scrollEnabled}
        onChangeText={onChangeText}
      />
    </View>
  );
};

FieldInputWithLeftIcon.propTypes = {
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  multiline: PropTypes.bool,
  scrollEnabled: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

FieldInputWithLeftIcon.defaultProps = {
  placeholder: '',
  placeholderTextColor: colors.black06,
  multiline: false,
  scrollEnabled: false,
  icon: 'plus',
};

export default FieldInputWithLeftIcon;
