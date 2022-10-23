import React, {forwardRef} from 'react';
import {BlurView, BlurViewProps} from '@react-native-community/blur';
import {StyleSheet, TextInput, View, ViewProps, ViewStyle} from 'react-native';

export type GlassInputProps = ViewProps & {
  containerStyle?: ViewStyle;
  onChangeText: (text: string) => void;
  value: string;
  textInputStyle?: ViewStyle;
  placeholder?: string;
  glassStyle?: ViewStyle;
  placeholderTextColor?: string;
  blurType?: BlurViewProps.blurType;
  blurAmount?: number;
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
      blurType,
      blurAmount,
      ...rest
    },
    ref,
  ) => {
    return (
      <View style={containerStyle}>
        <BlurView
          blurType={blurType || "light"}
          blurAmount={blurAmount || 10}
          reducedTransparencyFallbackColor="white"
          style={[glassStyle, styles.blurView]}
          >
          <TextInput
            {...rest}
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