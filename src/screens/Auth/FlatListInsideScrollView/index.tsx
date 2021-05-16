import React, { useState } from 'react';
import { View, FlatList, ScrollView, Text } from 'react-native';

export default function () {
  const [enableScrollViewScroll, setenableScrollViewScroll] = useState(true);
  return (
    <View
      onStartShouldSetResponderCapture={() => {
        setenableScrollViewScroll(true);
      }}
    >
      <ScrollView
        scrollEnabled={state.enableScrollViewScroll}
        ref={(myScroll) => (_myScroll = myScroll)}
      >
        {renderFlatList('red')}
        {renderFlatList('green')}
        {renderFlatList('purple')}
        {renderFlatList('pink')}
      </ScrollView>
    </View>
  );

  const getRandomData = () =>
    new Array(100)
      .fill('')
      .map((item, index) => ({ title: `Title ${index + 1}` }));

  const renderFlatList = (color: string) => (
    <View
      onStartShouldSetResponderCapture={() => {
        setState({ enableScrollViewScroll: false });
        if (
          _myScroll.contentOffset === 0 &&
          state.enableScrollViewScroll === false
        ) {
          setState({ enableScrollViewScroll: true });
        }
      }}
    >
      <FlatList
        data={getRandomData()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
