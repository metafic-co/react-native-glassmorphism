import React, {forwardRef} from 'react';
import {BlurView, BlurViewProps} from '@react-native-community/blur';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

export type GlassViewProps = ViewProps & {
  containerStyle?: ViewStyle;
  glassStyle?: ViewStyle;
  blurType?: BlurViewProps.blurType;
  blurAmount?: number;
};

export const GlassView = forwardRef<View, GlassViewProps>(
  ({children, glassStyle, containerStyle, blurType, blurAmount, ...rest}, ref) => {
    return (
      <View style={containerStyle} ref={ref}>
        <BlurView
          {...rest}
          blurType={blurType || "light"}
          blurAmount={blurAmount || 10}
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
