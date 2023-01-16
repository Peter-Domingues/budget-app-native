import * as React from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";

const ModalDefault = (props) => {
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Portal>
      <Modal
        visible={props.open}
        onDismiss={props.onDismiss}
        contentContainerStyle={containerStyle}
      >
        {props.children}
      </Modal>
    </Portal>
  );
};

export default ModalDefault;
