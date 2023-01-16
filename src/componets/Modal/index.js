import * as React from "react";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import ModalStyles from "./styles";

const ModalDefault = (props) => {
  return (
    <Portal>
      <Modal
        visible={props.open}
        onDismiss={props.onDismiss}
        contentContainerStyle={ModalStyles.modalContainer}
      >
        {props.children}
      </Modal>
    </Portal>
  );
};

export default ModalDefault;
