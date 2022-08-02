import React, {forwardRef} from 'react';
import {BlurView} from '@react-native-community/blur';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

export type GlassButtonProps = ViewProps & {
  containerStyle?: ViewStyle;
  glassStyle?: ViewStyle;
  onPress: () => void;
};

export const GlassButton = forwardRef<View, GlassButtonProps>(
  ({children, glassStyle, containerStyle, onPress, ...rest}, ref) => {
    return (
      <TouchableOpacity style={containerStyle} onPress={onPress}>
        <BlurView
          {...rest}
          ref={ref}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
          style={[glassStyle, styles.blurView]}
        >
          {children}
        </BlurView>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  blurView: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
