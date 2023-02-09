import {View} from 'react-native';
import React from 'react';
import {Gutters} from '../themes';
import PropTypes from 'prop-types';

const SizeBox = ({typeDirection, size}) => {
  // will determine the size that has been set according to the size prop that is filled
  const distanceSizeDirectionRow =
    size === 'large'
      ? Gutters.largeHMargin
      : size === 'regular'
      ? Gutters.regularHMargin
      : size === 'small' && Gutters.smallHMargin;
  const distanceSizeDirectionColumn =
    size === 'large'
      ? Gutters.largeVMargin
      : size === 'regular'
      ? Gutters.regularVMargin
      : size === 'small' && Gutters.smallVMargin;

  return (
    <View
      style={
        typeDirection === 'ROW'
          ? distanceSizeDirectionRow
          : distanceSizeDirectionColumn
      }
    />
  );
};

SizeBox.propTypes = {
  typeDirection: PropTypes.oneOf(['ROW', 'COLUMN']).isRequired,
  size: PropTypes.oneOf(['large', 'regular', 'small']).isRequired,
};

export default SizeBox;
