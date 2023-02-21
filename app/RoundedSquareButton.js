import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  circlebutton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 41,
    height: 41,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
});

const RoundedSquareButton = props => (
  <TouchableOpacity {...props} style={[styles.circlebutton, props.style]} />
);

RoundedSquareButton.defaultProps = {
  style: null,
  textStyle: null,
  title: '',
};

export default RoundedSquareButton;
