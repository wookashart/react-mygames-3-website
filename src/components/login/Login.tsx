import React from 'react';

// Config
import Head from 'next/head';
import { Formik, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';

// Helpers
import { colors } from '../../styles/variables';

// Components
import Modal from '../common/Modal';
import FormikInput from '../common/FormikInput';

interface MyFormValues {
  login: string;
  password: string;
}

interface LoginProps {
  loginOpened: boolean;
  onLoginClosed: Function;
  onUserLogin: Function;
  error: boolean;
}

const Login = ({ loginOpened, onLoginClosed, onUserLogin, error }: LoginProps) => {
  const loginValidationSchema = Yup.object().shape({
    login: Yup.string()
      .matches(/^[0-9a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ'-,:\.\s]{0,100}$/, {
        message: 'Login zawiera niedozwolone znaki!',
      })
      .required('Proszę podać login!'),
    password: Yup.string().required('Proszę podać hasło!'),
  });

  return (
    <>
      <Head>
        <title>Zaloguj się | MyGames</title>
      </Head>
      <div>
        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={loginValidationSchema}
          onSubmit={(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => {
            onUserLogin(values.login, values.password);
            actions.setSubmitting(false);
          }}
        >
          {() => (
            <Form autoComplete="on">
              <Modal title="Zaloguj się" size="sm" opened={loginOpened} onCloseModal={onLoginClosed}>
                <>
                  <FormikInput label="Login" name="login" />
                  <FormikInput label="Hasło" name="password" type="password" />
                  {error && <p className="error-message">Login lub hasło są nieprawidłowe!</p>}
                </>
              </Modal>
            </Form>
          )}
        </Formik>
      </div>
      <style jsx>{`
        .error-message {
          margin: 0;
          color: ${colors.text.error};
        }
      `}</style>
    </>
  );
};

export default Login;
