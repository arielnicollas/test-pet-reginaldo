import React from 'react';
import {Button, ContainerPetButton, TextPetButton} from './styled';

interface PetButtonProps {
  title: string;
  onPress: () => void;
}

const PetButton = ({title, onPress}: PetButtonProps) => {
  // const onPress = () => {
  //   console.log('onPress');
  // };
  // console.log(title);

  return (
    <ContainerPetButton onPress={onPress}>
      <Button>
        <TextPetButton>{title}</TextPetButton>
      </Button>
    </ContainerPetButton>
  );
};

export default PetButton;
