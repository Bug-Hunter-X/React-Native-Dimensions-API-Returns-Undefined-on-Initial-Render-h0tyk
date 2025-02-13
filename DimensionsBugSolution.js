import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const { height, width } = Dimensions.get('window');
    setScreenHeight(height);
    setScreenWidth(width);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>Screen Height: {screenHeight}</Text>
      <Text>Screen Width: {screenWidth}</Text>
      <View style={{ width: screenWidth / 2, height: screenHeight / 2, backgroundColor: 'blue' }} />
    </View>
  );
};

export default DimensionsBugSolution;
