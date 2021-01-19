import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onAddImage, onRemoveImage }) {
  const scrollview = useRef();

  return (
    <View>
      <ScrollView
        ref={scrollview}
        horizontal
        onContentSizeChange={() => scrollview.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                key={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
