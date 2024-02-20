import React from "react";
import { Image, StyleSheet } from "react-native";

const ImageViewer = ({ placeholderImage, selectedImage }) => {
  const imageSource = selectedImage ? { uri: selectedImage } : placeholderImage;
  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
