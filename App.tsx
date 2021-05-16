import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useLoadResources from './src/hooks/useLoadResources';
import useColorScheme from './src/hooks/useColorScheme';

import Navigation from './src/navigation';
import { useThemeColor } from './src/hooks/useThemeColor';

export default function App() {
  const colorScheme = useColorScheme();
  const isLoading = useLoadResources();
  const backgroundColor = useThemeColor(undefined, 'background');

  if (!isLoading) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation colorScheme={colorScheme} />
      <StatusBar translucent={false} backgroundColor={backgroundColor} />
    </SafeAreaView>
  );
}
