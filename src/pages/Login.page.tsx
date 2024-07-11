import React from "react";
import {Card} from "primereact/card";
import {Form, Field, FieldMetaState} from 'react-final-form';
import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {Password} from "primereact/password";
import {Button} from "primereact/button";
import User from "../model/User.model";
import {FormApi} from "final-form";

const LoginPage: React.FC = () => {


    const onSubmit = (data: User, form: FormApi<User, User>) => {

        form.restart()
    };

    const validate = (data: User) => {
        let errors: any = {};

        if (!data.username) {
            errors.username = 'Usuário é obrigatório.'
        }

        if (!data.password) {
            errors.password = 'Senha é obrigatório.'
        }

        return errors;
    };

    const isFormFieldValid = (meta: FieldMetaState<any>) => !!(meta.touched && meta.error)

    const getFormErrorMessage = (meta: FieldMetaState<any>) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    };

    return (
        <div className={"background-login"}>
            <Card subTitle="Olá, tenha um ótimo trabalho! :)"
                  style={{width: "20%", height: "25rem", marginRight: "10rem"}}>
                <Form onSubmit={onSubmit}
                      initialValues={User.emptyUser()}
                      validate={validate}
                      render={({handleSubmit}) => (
                          <form onSubmit={handleSubmit} className="p-fluid">

                              <Field name="username" render={({input, meta}) => (
                                  <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <InputText id="username"
                                                   {...input}
                                                   className={classNames({'p-invalid': isFormFieldValid(meta)})}/>
                                        <label htmlFor="username"
                                               className={classNames({'p-error': isFormFieldValid(meta)})}>Usuário</label>
                                    </span>
                                      {getFormErrorMessage(meta)}
                                  </div>
                              )}/>

                              <Field name="password" render={({input, meta}) => (
                                  <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password"
                                                  {...input}
                                                  toggleMask
                                                  feedback={false}
                                                  className={classNames({'p-invalid': isFormFieldValid(meta)})}/>
                                        <label htmlFor="password"
                                               className={classNames({'p-error': isFormFieldValid(meta)})}>Senha</label>
                                    </span>
                                      {getFormErrorMessage(meta)}
                                  </div>
                              )}/>

                              <Button type="submit" label="Entrar" className="mt-2" style={{marginTop: "35px"}}/>
                          </form>
                      )}/>
            </Card>
        </div>
    )
}

export default LoginPage