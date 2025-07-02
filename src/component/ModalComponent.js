// ModalComponent.js
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView
} from 'react-native';
import { horizontalScale, moderateScale } from './responsive';

const ModalComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(150)).current;

  const heading = 'Cool guy';
  const paragraph = ` Lorem ipsum dolor sit amet, consectetur  ` 

  const fullParagraph = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nulla euismod, nisi vel consectetur interdum, nisl nisi scelerisque nisl, 
    euismod aliquam nunc nisl eu elit. Suspendisse potenti. 
    Maecenas tincidunt, justo at pretium gravida, sapien justo dictum sapien, 
    nec facilisis metus libero sed quam. Cras convallis lorem ac lacus pharetra, 
    at porta sapien scelerisque. Integer semper lectus nec mi facilisis, a eleifend nunc mattis. 
    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
  `;

  const toggleExpand = () => {
    const finalHeight = expanded ? 150 : 500;

    Animated.timing(animatedHeight, {
      toValue: finalHeight,
      duration: 400,
      useNativeDriver: false
    }).start();

    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, { height: animatedHeight }]}>
        <View style={styles.headingRow}>
          <View style={styles.squareIcon} />
          <Text style={styles.heading}>{heading}</Text>
          
        </View>
         <Text style={[styles.paragraph]}>{paragraph}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.paragraph}>
            {expanded ? fullParagraph : fullParagraph.slice(0, 120) + '...'}
          </Text>
        </ScrollView>

        <TouchableOpacity style={styles.toggleButton} onPress={toggleExpand}>
          <Text style={styles.toggleText}>{expanded ? 'Close' : 'Open'}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    paddingTop: 60,
    backgroundColor: '#f5f5f5'
  },
  card: {
    backgroundColor: '#B2BEB5',
    borderRadius: 12,
    padding: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'red'
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  squareIcon: {
    width: horizontalScale(42),
    height: 42,
    backgroundColor: 'red',
    borderRadius: 10,
    marginRight: 12
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
    marginBottom: 10
  },
  toggleButton: {
    alignSelf: 'center',
    // marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'red'
  },
  toggleText: {
    fontWeight: 'bold',
    color: 'red'
  }
});
