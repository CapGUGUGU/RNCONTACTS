import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
  style,
  onChangeText,
  value,
  label,
  icon,
  iconPostion,
  error,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (icon && iconPostion) {
      if (iconPostion === 'left') {
        return 'row';
      } else if (iconPostion === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (focused) {
      return colors.primary;
    }
    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
