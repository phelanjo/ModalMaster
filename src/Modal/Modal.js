import React, { Component } from 'react';
import { Modal, Alert } from 'react-native';
import { 
    View, 
    InsideView, 
    ModalButton, 
    ModalButtonText,
    Button, 
    ButtonText, 
    Container 
} from './modal_styles';
import { Text } from '../Basic/text';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <Container>
              <InsideView>
                <Text>Hello Johnny!</Text>

                <ModalButton
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                    <ModalButtonText>Hide</ModalButtonText>
                  </ModalButton>
              </InsideView>
            </Container>
          </Modal>

          <Button
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <ButtonText>Click Me!</ButtonText>
          </Button>
      </View>
    );
  }
}