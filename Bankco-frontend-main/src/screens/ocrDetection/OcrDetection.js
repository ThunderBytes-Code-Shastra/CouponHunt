import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import ProgressCircle from "react-native-progress/Circle";
import TextRecognition from "react-native-text-recognition";
import { AntDesign } from "@expo/vector-icons";

import TesseractOcr, {
  LANG_ENGLISH,
  useEventListener,
} from "react-native-tesseract-ocr";
import Colors from "../../constant/Colors";
import upload_png from "../../../assets/upload.jpg";

const DEFAULT_HEIGHT = 500;
const DEFAULT_WITH = 600;
const defaultPickerOptions = {
  cropping: true,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WITH,
};

export default function OcrDetection() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);
  const [text, setText] = useState("");
  const [generated, setGenerated] = useState(null);

  useEventListener("onProgressChange", (p) => {
    setProgress(p.percent / 100);
  });

  const recognizeTextFromImage = async (path) => {
    setIsLoading(true);

    try {
      const recognizedText = await TextRecognition.recognize(path);
      setText(recognizedText);
      setGenerated(true);
    } catch (err) {
      console.error(err);
      setText("");
      setGenerated(false);
    }

    setIsLoading(false);
    setProgress(0);
  };

  const recognizeFromPicker = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openPicker(options);
      setImgSrc({ uri: image.path });
      await recognizeTextFromImage(image.path);
    } catch (err) {
      if (err.message !== "User cancelled image selection") {
        console.error(err);
      }
    }
  };

  const recognizeFromCamera = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openCamera(options);
      setImgSrc({ uri: image.path });
      await recognizeTextFromImage(image.path);
    } catch (err) {
      if (err.message !== "User cancelled image selection") {
        console.error(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      {imgSrc === null && (
        <>
          <Image
            source={upload_png}
            style={{
              width: "85%",
              height: 350,
              alignSelf: "center",
              marginTop: 50,
              marginBottom: 20,
            }}
            resizeMode="cover"
          />
          <Text style={styles.title}>
            Detect Coupon/ Offer Using OCR Detection
          </Text>
        </>
      )}
      <View style={styles.options}>
        <TouchableOpacity
          onPress={() => {
            recognizeFromCamera();
          }}
          style={{
            backgroundColor: Colors.tab4Secondary,
            paddingHorizontal: 25,
            paddingVertical: 15,
            borderRadius: 10,
            elevation: 6,
          }}
        >
          <Text style={{ color: "#fff" }}>Capture Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            recognizeFromPicker();
          }}
          style={{
            backgroundColor: Colors.tab4Secondary,
            paddingHorizontal: 25,
            paddingVertical: 15,
            borderRadius: 10,
            elevation: 6,
          }}
        >
          <Text style={{ color: "#fff" }}>Select from Gallery</Text>
        </TouchableOpacity>
      </View>
      {imgSrc && (
        <View style={styles.imageContainer}>
          <ImageBackground
            style={{
              marginVertical: 15,
              height: 350,
              width: 400,
              alignItems: "flex-end",
              borderRadius: 15,
              overflow: "hidden",
            }}
            source={imgSrc}
          >
            <TouchableOpacity
              onPress={() => {
                setImgSrc(null);
                setText("");
              }}
            >
              <AntDesign
                name="closecircle"
                size={24}
                color="black"
                style={{ margin: 10 }}
              />
            </TouchableOpacity>
          </ImageBackground>
          {isLoading ? (
            <ProgressCircle showsText progress={progress} />
          ) : (
            <>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                Detected Text
              </Text>
              <Text
                style={{
                  backgroundColor: Colors.tab4Secondary,
                  paddingVertical: 20,
                  paddingHorizontal: 15,
                  color: "#fff",
                  borderRadius: 8,
                }}
              >
                {text.length === 0 ? "No Text Detected" : text}
              </Text>
            </>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 40,
    paddingHorizontal: 30,
  },
  button: {
    marginHorizontal: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
    maxWidth: "80%",
    alignSelf: "center",
    lineHeight: 40,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

export const OcrDetectionOptions = ({ navigation }) => {
  return {
    headerTitle: "OCR Detection",
    headerTitleAlign: "center",
    headerTintColor: Colors.primary,
    headerStyle: { backgroundColor: Colors.tab4Secondary },
  };
};
