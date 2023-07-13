import React from 'react';
import {PetInputContainer, PetLabel, PetTextInput} from './styled';

interface PetInputProps {
  placeholder?: string;
  label: string;
  value: any;
  ref?: any;
  setText: (value: string) => void;
}

const PetInput = ({placeholder, label, value, setText}: PetInputProps) => {
  return (
    <PetInputContainer>
      <PetLabel>{label}</PetLabel>
      <PetTextInput
        placeholderTextColor={'#B4B4B4'}
        value={value}
        placeholder={placeholder}
        onChangeText={setText}
      />
    </PetInputContainer>
  );
};

export default PetInput;
