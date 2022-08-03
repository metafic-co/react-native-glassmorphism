import React, {forwardRef} from 'react';
import {BlurView} from '@react-native-community/blur';
import {StyleSheet, TextInput, View, ViewProps, ViewStyle} from 'react-native';

export type GlassInputProps = ViewProps & {
  containerStyle?: ViewStyle;
  onChangeText: (text: string) => void;
  value: string;
  textInputStyle?: ViewStyle;
  placeholder?: string;
  glassStyle?: ViewStyle;
  placeholderTextColor?: string;
};

export const GlassInput = forwardRef<TextInput, GlassInputProps>(
  (
    {
      glassStyle,
      containerStyle,
      onChangeText,
      textInputStyle,
      placeholder,
      value,
      placeholderTextColor,
      ...rest
    },
    ref,
  ) => {
    return (
      <View style={containerStyle}>
        <BlurView
          {...rest}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
          style={[glassStyle, styles.blurView]}
        >
          <TextInput
            ref={ref}
            onChangeText={onChangeText}
            value={value}
            style={textInputStyle}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
          />
        </BlurView>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  blurView: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
