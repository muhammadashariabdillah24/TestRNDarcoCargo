import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Layout} from '../themes';
import {colors} from '../utils';
import PropTypes from 'prop-types';

const Template = ({children}) => {
  return (
    <SafeAreaView style={Layout.fill}>
      <View
        style={[
          {height: '100%', width: '100%', backgroundColor: colors.white},
          Layout.colCenter,
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
