import React, { useState } from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';

const Galeria = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImagePress = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled>
        {images.map((image, index) => (
          <Image
            key={index}
            source={image}
            style={styles.image}
            resizeMode="cover"
            onPress={() => handleImagePress(index)}
          />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { opacity: currentIndex === index ? 1 : 0.5 },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 200,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    marginHorizontal: 5,
  },
});

export default Galeria;
