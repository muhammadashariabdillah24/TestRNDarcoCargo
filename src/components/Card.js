import {View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {colors, HEIGHT, WIDTH} from '../utils';
import {Border, Gutters, Layout} from '../themes';

const Card = ({children}) => {
  return (
    <View
      style={[
        {
          width: WIDTH * 0.9,
          height: HEIGHT * 0.11,
          backgroundColor: colors.gainsboro,
        },
        Layout.colCenter,
        Gutters.regularPadding,
        Border.radius001,
      ]}>
      {children}
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
