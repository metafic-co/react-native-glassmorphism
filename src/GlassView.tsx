import React, {forwardRef} from 'react';
import {BlurView} from '@react-native-community/blur';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

export type GlassViewProps = ViewProps & {
  blurAmount?: number;
  containerStyle?: ViewStyle;
  glassStyle?: ViewStyle;
};

export const GlassView = forwardRef<View, GlassViewProps>(
  ({children, glassStyle, containerStyle, ...rest}, ref) => {
    return (
      <View style={containerStyle}>
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
      </View>
    );
  },
);

const styles = StyleSheet.create({
  blurView: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
