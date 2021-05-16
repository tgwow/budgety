import * as React from 'react';
import {
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  TouchableOpacity as DefaultTouchableOpacity,
  ScrollView as DefaultScrollView,
} from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';

interface ThemeProps {
  lightColor?: string;
  darkColor?: string;
}

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type ButtonProps = ThemeProps & DefaultTouchableOpacity['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const Input = React.forwardRef<any, TextInputProps>(
  (props: TextInputProps, ref) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      'backgroundContrast'
    );
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const borderColor = useThemeColor(
      { light: lightColor, dark: darkColor },
      'border'
    );

    return (
      <DefaultTextInput
        ref={ref}
        style={[{ backgroundColor, color, borderColor }, style]}
        {...otherProps}
      />
    );
  }
);

export function Button(props: ButtonProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'primary'
  );

  return (
    <DefaultTouchableOpacity
      style={[{ backgroundColor }, style]}
      {...otherProps}
    />
  );
}

export function ScrollView(props: ScrollViewProps) {
  const {
    contentContainerStyle,
    style,
    lightColor,
    darkColor,
    ...otherProps
  } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  return (
    <DefaultScrollView
      style={[{ backgroundColor }, style]}
      contentContainerStyle={[{ backgroundColor }, contentContainerStyle]}
      {...otherProps}
    />
  );
}
