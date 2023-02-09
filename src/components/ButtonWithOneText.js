import {Text, Pressable} from 'react-native';
import React from 'react';
import {colors, HEIGHT, WIDTH} from '../utils';
import {Layout} from '../themes/Layout';
import {Gutters} from '../themes/Gutters';
import {Border} from '../themes';
import PropTypes from 'prop-types';
import {fonts} from '../assets';

const ButtonWithOneText = ({buttonText, buttonColor, onPress}) => {
  return (
    <Pressable
      style={[
        Layout.rowCenter,
        Gutters.smallPadding,
        Border.radius001,
        {
          backgroundColor: buttonColor,
          height: HEIGHT * 0.08,
          width: WIDTH * 0.9,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          fontSize: HEIGHT * 0.03,
          fontFamily: fonts.PoppinsRegular,
          color: colors.white,
        }}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

ButtonWithOneText.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

ButtonWithOneText.defaultProps = {
  buttonText: 'Tombol',
  buttonColor: colors.primary,
};

export default ButtonWithOneText;
