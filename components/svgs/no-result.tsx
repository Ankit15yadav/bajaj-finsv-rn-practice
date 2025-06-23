import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import Svg, {
  Circle,
  Defs,
  G,
  Line,
  LinearGradient,
  Rect,
  Stop
} from 'react-native-svg';

const NoResultsComponent = ({
  title = "No Results Found",
  subtitle = "We couldn't find what you're looking for.\nTry adjusting your search terms.",
  size = 140,
  animated = true,
  style = {}
}) => {
  const fadeAnim = new Animated.Value(0.3);

  useEffect(() => {
    if (animated) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      fadeAnim.setValue(1);
    }
  }, [animated]);

  return (
    <View style={[styles.container, style]}>
      <Animated.View style={{ opacity: animated ? fadeAnim : 1 }}>
        <Svg width={size} height={size} viewBox="0 0 240 240">
          <Defs>
            <LinearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#667EEA" stopOpacity="0.8" />
              <Stop offset="100%" stopColor="#764BA2" stopOpacity="0.6" />
            </LinearGradient>
            <LinearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <Stop offset="0%" stopColor="#F093FB" stopOpacity="0.4" />
              <Stop offset="100%" stopColor="#F5576C" stopOpacity="0.3" />
            </LinearGradient>
          </Defs>

          {/* Background circles */}
          <Circle cx="120" cy="120" r="100" fill="url(#grad2)" />
          <Circle
            cx="120"
            cy="120"
            r="70"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />

          {/* Main search icon */}
          <G transform="translate(120, 120)">
            <Circle
              cx="-20"
              cy="-20"
              r="25"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <Line
              x1="2"
              y1="2"
              x2="20"
              y2="20"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* X mark */}
            <Line
              x1="-30"
              y1="-30"
              x2="-10"
              y2="-10"
              stroke="#FF6B6B"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <Line
              x1="-10"
              y1="-30"
              x2="-30"
              y2="-10"
              stroke="#FF6B6B"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </G>

          {/* Floating elements */}
          <Circle cx="60" cy="80" r="4" fill="#FFFFFF" opacity="0.6" />
          <Circle cx="180" cy="100" r="6" fill="#FFFFFF" opacity="0.4" />
          <Circle cx="200" cy="160" r="3" fill="#FFFFFF" opacity="0.7" />
          <Circle cx="40" cy="160" r="5" fill="#FFFFFF" opacity="0.5" />

          {/* Decorative shapes */}
          <Rect
            x="70"
            y="190"
            width="8"
            height="8"
            rx="2"
            fill="#FFFFFF"
            opacity="0.3"
            transform="rotate(45 74 194)"
          />
          <Rect
            x="170"
            y="60"
            width="6"
            height="6"
            rx="1"
            fill="#FFFFFF"
            opacity="0.4"
            transform="rotate(45 173 63)"
          />
        </Svg>
      </Animated.View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D3748',
    marginTop: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default NoResultsComponent;