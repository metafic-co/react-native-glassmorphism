import React, {forwardRef} from 'react';
import {BlurView, BlurViewProps} from '@react-native-community/blur';
import {StyleSheet, TouchableOpacity, ViewProps, ViewStyle} from 'react-native';

export type GlassButtonProps = ViewProps & {
  containerStyle?: ViewStyle;
  glassStyle?: ViewStyle;
  onPress: () => void;
  blurType?: BlurViewProps.blurType;
  blurAmount?: number;
};

export const GlassButton = forwardRef<TouchableOpacity, GlassButtonProps>(
  ({children, glassStyle, containerStyle, onPress, blurType, blurAmount ...rest}, ref) => {
    return (
      <TouchableOpacity style={containerStyle} onPress={onPress} ref={ref}>
        <BlurView
          {...rest}
          blurType={blurType || "light"}
          blurAmount={blurAmount || 10}
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
