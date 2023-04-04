import { useState } from "react";
import Link from 'next/link';
import Styles from './contact.module.scss';
import { Button } from '../button';
import { Input } from '../input';
import { Select } from '../select';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import axios from "axios";
import { Loading } from "../loading";
import { SuccessModal } from "../sucessModal";
import { FailModal } from "../failModal";

export const Contact = () => {
    const [isLoading, setLoading] = useState(false);
    const [successModal, setModalSuccess] = useState(false);
    const [failModal, setFailModal] = useState(false);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone: '',
          website: '',
          midia: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Campo obrigatório'),
            email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
            phone: Yup.string().matches(phoneRegExp,'Informe um telefone válido'),
            website: Yup.string(),
            midia: Yup.string()
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values) => handleSubmitForm(values)
      });

    const handleSubmitForm = (values: any) => {
        setLoading(true);
        axios.post("/api/sendEmail", {
            messageBody: `Nome: ${values.name}, Email: ${values.email}, Telefone: ${values.phone}, Site: ${values.website}, Midia: ${values.midia}`,
        }).then(() => { formik.resetForm(); setLoading(false); setModalSuccess(true) }).catch((err) => { console.log("Error", err); setLoading(false); setFailModal(true) })
    };
    
    const closeModal = (): void => {
        setFailModal(false);
        setModalSuccess(false);
    }

    return (
        <>
        {successModal && <SuccessModal closeModal={closeModal}/>}
        {failModal && <FailModal closeModal={closeModal}/>}
        {isLoading && <Loading></Loading>}
        <div className={Styles.container} id="contact">
            <div className={Styles.texts}>
                <span>ENTRE EM CONTATO</span>
                <h1>Aumente seu resultado de vendas e perfomance</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna.
                </p>
            </div>
            <div className={Styles.form}>
                <form id="formulario" onSubmit={formik.handleSubmit}>
                    <h1>Fale com um especialista</h1>

                    <Input name="name" id="name" type="text" placeholder="Nome completo" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} required />

                    <Input name="email" id="email" type="email" placeholder="E-mail profissional" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} required />

                    <Input name="phone" id="phone" type="text" placeholder="Celular/Whatsapp" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} required />

                    <Input name="site" id="site" type="text" placeholder="Site" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.website} required />

                    <Select name="midia" id="midia" placeholder="Orçamento para mídia" options={[{ label: "Instagram", value: "instagram" },
                    { label: "Facebook", value: "facebook" },
                    ]} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.midia} required />
                    <Button type="submit" title="Enviar" kind="full" />
                </form>
            </div>
            <div className={Styles.footer}>
                <p>Ao enviar esse formulário, você reconhece que leu e concorda com a nossa
                    <Link href='/'><span>Política de Privacidade.</span></Link>
                </p>
            </div>
        </div >
        </>
    );
}