import React from 'react';
import {MessageError} from './peterror';

interface PetErrorProps {
  message: string;
}

const PetError = ({message}: PetErrorProps) => {
  return <MessageError>{message}</MessageError>;
};

export default PetError;
