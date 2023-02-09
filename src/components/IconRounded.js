import {View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {colors, HEIGHT, WIDTH} from '../utils';
import {Gutters, Layout} from '../themes';

const IconRounded = ({backgroundColor, nameicon, sizeIcon, colorIcon}) => {
  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          width: WIDTH * 0.17,
          height: HEIGHT * 0.076,
          borderRadius: sizeIcon * WIDTH * 0.007,
        },
        Layout.colCenter,
      ]}>
      <Icon
        name={nameicon}
        size={sizeIcon}
        color={colorIcon}
        style={Gutters.regularMargin}
      />
    </View>
  );
};

IconRounded.propTypes = {
  nameicon: PropTypes.string.isRequired,
  colorIcon: PropTypes.string,
  sizeIcon: PropTypes.number,
  backgroundColor: PropTypes.string,
};

IconRounded.defaultProps = {
  nameicon: 'plus',
  colorIcon: colors.white,
  sizeIcon: HEIGHT * 0.035,
  backgroundColor: colors.primary,
};

export default IconRounded;
