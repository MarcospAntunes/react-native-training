import React, { useRef, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  Button, 
  TouchableOpacity, 
  Modal,
  Image
} from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [type, setType] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const camRef = useRef<CameraView | null>(null);
  const [photo, setPhoto] = useState<string | undefined>();
  const [open, setOpen] = useState<boolean>(false);

  if(!permission) {
    return <View />
  }

  if(!permission?.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title='grant permission' />
      </View>
    )
  }

  function toggleCameraType() {
    setType(current => (current === "back" ? "front" : "back"));
  }

  async function takePicture() {
    if(camRef) {
      const data = await camRef.current?.takePictureAsync();
      setPhoto(data?.uri);
      setOpen(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView 
        facing={type} 
        style={styles.camera}
        ref={camRef}
      >
        <View style={styles.contentButtons}>
          <TouchableOpacity
            style={styles.buttonFlip}
            onPress={toggleCameraType}
          >
            <FontAwesome 
              name='exchange' 
              size={23} 
              color="red" 
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.buttonCamera} 
            onPress={takePicture}
          >
            <FontAwesome
              name='camera'
              size={23}
              color={"#ffffff"} 
            />
          </TouchableOpacity>
        </View>
      </CameraView>
      {photo &&
        <Modal
          animationType='slide'
          transparent={true}
          visible={open}
        >
          <View style={styles.contentModal}>
            <TouchableOpacity 
              style={styles.closeButton} 
              onPress={() => setOpen(false)} 
            >
              <FontAwesome 
                name='close' 
                size={50} 
                color="#fff" 
              />
            </TouchableOpacity>
            
            <Image style={styles.imgPhoto} source={{ uri: photo }} />
          </View>
        </Modal>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  camera: {
    width: "100%",
    height: "100%",
  },

  contentButtons: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
  },

  buttonFlip: {
    position: 'absolute',
    bottom: 50,
    left: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  buttonCamera: {
    position: 'absolute',
    bottom: 50,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  contentModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 20,
  },

  closeButton: {
    position: "absolute",
    top: 10,
    left: 2,
    margin: 10,
  },

  imgPhoto: {
    width: "100%",
    height: 400,
  },
});