//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Button, Toggle} from '@ui-kitten/components';

// create a component
const FormExample = () => {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required('Zorunlu Alan'),
    surname: Yup.string().required('Zorunlu Alan'),
    email: Yup.string()
      .required('Zorunlu Alan')
      .email('Lütfen geçerli bir e-mail giriniz.'),
    phone: Yup.string()
      .required('Zorunlu Alan')
      .min(11, 'Lütfen 11 hane olarak giriniz')
      .max(13, 'Lütfen 13 hane olarak giriniz'),
    password: Yup.string()
      .required('Zorunlu Alan')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Şartlar sağlanmıyor',
      ),
    passwordConfirm: Yup.string()
      .required('Zorunlu Alan')
      .oneOf([Yup.ref('password')], 'Şifreler Uyuşmuyor'),
    agreementConfirm: Yup.bool()
      .required('Zorunlu')
      .oneOf([true], 'Sözleşmeyi onaylamanız  gerekiyor.'),
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 20,
          backgroundColor: '#00e096',
          minHeight: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          KAYIT OLUŞTUR
        </Text>
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              phone: '',
              password: '',
              passwordConfirm: '',
              agreementConfirm: '',
            }}
            validationSchema={registerSchema}
            onSubmit={values => alert(JSON.stringify(values, 0, 2))}>
            {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
              <View style={{flex: 1, padding: 15}}>
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  label={'Name'}
                  placeholder="İsim"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  caption={errors.name}
                  status={errors.name ? 'danger' : 'basic'}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  label={'Surname'}
                  placeholder="Soyisim giriniz"
                  value={values.surname}
                  onChangeText={handleChange('surname')}
                  caption={errors.surname}
                  status={errors.surname ? 'danger' : 'basic'}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  label={'E-Mail'}
                  placeholder="E-mail giriniz"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  caption={errors.email}
                  status={errors.email ? 'danger' : 'basic'}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  label={'Tel'}
                  placeholder="Telefon giriniz"
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  caption={errors.phone}
                  status={errors.phone ? 'danger' : 'basic'}
                />
                <Input
                  secureTextEntry={false}
                  size="large"
                  style={{marginVertical: 10}}
                  label={'Password'}
                  placeholder="Şifre giriniz"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  caption={errors.password}
                  status={errors.password ? 'danger' : 'basic'}
                />
                <Input
                  size="large"
                  style={{marginVertical: 10}}
                  label={'Password Again'}
                  placeholder="Şifre tekrar"
                  value={values.passwordConfirm}
                  onChangeText={handleChange('passwordConfirm')}
                  caption={errors.passwordConfirm}
                  status={errors.passwordConfirm ? 'danger' : 'basic'}
                />
                <View>
                  <Toggle
                    style={{marginLeft: 15}}
                    checked={values.agreementConfirm}
                    onChange={value =>
                      setFieldValue('agreementConfirm', value)
                    }>
                    {`Kullanıcı ve Gizlilik Sözleşmesini okudum, kabul ediyorum.`}
                  </Toggle>
                  {errors.agreementConfirm && (
                    <Text style={{color: 'red'}}>
                      {errors.agreementConfirm}{' '}
                    </Text>
                  )}
                </View>
                <Button
                  style={{marginTop: 30}}
                  onPress={handleSubmit}
                  status="success">
                  KAYDET
                </Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default FormExample;
