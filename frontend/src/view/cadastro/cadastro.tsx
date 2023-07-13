import React from 'react';
import PetInput from '../../components/petinput/petinput';
import PetButton from '../../components/petbutton/petbutton';
import {
  PetSubTitle,
  PetTitle,
  CadastroContainer,
  CadastroContent,
  CadastroHeader,
  CadastroContentScroll,
} from './styled';
import {Formik} from 'formik';
import * as yup from 'yup';
import {Text} from 'react-native';
import isCPF from '../../validators/isCPF';

const Cadastro = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup
      .string()
      .email('O email não está no formato correto')
      .required('O email é obrigatório'),
    phone: yup
      .string()
      .length(11, 'O campo deve ter 11 caracteres')
      .required('O Telefone é obrigatório'),
    documentNumber: yup
      .string()
      .test('test-document-number', 'Não é um CPF válido', value =>
        isCPF(value),
      )
      .required('O CPF é obrigatório'),
  });

  const signUp = (values: any) => {
    console.log('values', values);
  };

  return (
    <Formik
      initialValues={{name: '', phone: '', email: '', documentNumber: ''}}
      onSubmit={signUp}
      validationSchema={formSchema}>
      {({values, handleChange, errors, handleSubmit, touched}) => (
        <CadastroContainer>
          <CadastroHeader />

          <CadastroContent>
            <CadastroContentScroll>
              <PetTitle>Cadastre-se</PetTitle>
              <PetSubTitle>Por favor informe seus dados</PetSubTitle>
              <PetInput
                placeholder="Digite seu nome"
                label="Nome"
                value={values.name}
                setText={handleChange('name')}
              />
              {errors && errors.name && touched.name ? (
                <Text>{errors.name}</Text>
              ) : null}
              <PetInput
                placeholder="Digite seu telefone"
                label="Telefone"
                value={values.phone}
                setText={handleChange('phone')}
              />
              {errors && errors.phone && touched.phone ? (
                <Text>{errors.phone}</Text>
              ) : null}
              <PetInput
                placeholder="Digite seu email"
                label="Email"
                value={values.email}
                setText={handleChange('email')}
              />
              {errors && errors.email && touched.email ? (
                <Text>{errors.email}</Text>
              ) : null}
              <PetInput
                placeholder="Digite seu CPF"
                label="CPF"
                value={values.documentNumber}
                setText={handleChange('documentNumber')}
              />
              {errors && errors.documentNumber && touched.documentNumber ? (
                <Text>{errors.documentNumber}</Text>
              ) : null}
              <PetButton title="Cadastre-se" onPress={handleSubmit} />
            </CadastroContentScroll>
          </CadastroContent>
        </CadastroContainer>
      )}
    </Formik>
  );
};

export default Cadastro;
