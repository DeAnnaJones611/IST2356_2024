import { Modal, View, Button, Image, StyleSheet,Text } from "react-native";


function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
      
    
        <View style={styles.modalContainer}>       
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          </View>
          <Button title="Return to Destinations" onPress={props.onClose} />
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffa64d"
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },


});
