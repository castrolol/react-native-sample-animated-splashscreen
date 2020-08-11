import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View, Animated, Dimensions, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import cake_logo from './cake_logo.png';

const { width, height } = Dimensions.get("window");


export default function App() {
  const initAnim = useRef(new Animated.Value(0)).current;

  const position = initAnim.interpolate({
    inputRange: [0.3, 0.5],
    outputRange: [0, -(height / 1.5)],
    extrapolate: 'clamp'
  });

  const scale = initAnim.interpolate({
    inputRange: [0.3, 0.5],
    outputRange: [1, 0.5],
    extrapolate: 'clamp'
  });

  const opacity = initAnim.interpolate({
    inputRange: [0.7, 1],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  useEffect(() => {
    SplashScreen.hide();
    Animated.timing(initAnim, {
      toValue: 1,
      duration: 1500
    }).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Image source={cake_logo} style={{
        width: 331,
        marginBottom: 6,
        flex: 1,
        resizeMode: 'contain',
        transform: [
          { scale },
          { translateY: position }
        ]
      }} />
      <Animated.View style={{ opacity, justifyContent: "center", alignItems: "center", position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <View>
          <Text> eu sou </Text>
          <Text> o </Text>
          <Text> Login </Text>
        </View>
      </Animated.View>
    </SafeAreaView>
  )
}