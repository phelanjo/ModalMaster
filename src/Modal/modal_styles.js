import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #9164FF;
  padding-vertical: 10;
  width: 100;
  margin-top: 10;
  border-radius: 5;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #ffffff;
  font-weight: 700;
`;

export const ModalButton = styled.TouchableOpacity`
  background-color: white;
  padding-vertical: 10;
  width: 100;
  margin-top: 10;
  border-radius: 5;
`;

export const ModalButtonText = styled.Text`
  text-align: center;
  color: #9146FF;
  font-weight: 700;
`;


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const InsideView = styled.View`
    border-radius: 50;
    width: 350;
    height: 350;
    align-items: center;
    justify-content: center;
    background-color: #9146FF;
    box-shadow: 10px 10px 5px #aaaaaa;
`;