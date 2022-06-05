import { send } from '@emailjs/browser';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ReactModal from 'react-modal';

import TextField from 'components/common/TextField';
import styles from './InquiryModal.module.scss';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

ReactModal.setAppElement("#__next");

type FormValues = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  content: string;
};

const InquiryModal = ({ isOpen, onRequestClose }: Props) => {
  const methods = useForm<FormValues>();

  if (!isOpen) {
    return null;
  }

  const onSubmit = async (form: FormValues) => {
    send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    ).then(
      () => {
        alert("전송 완료");
        onRequestClose();
      },
      (error: { text: string }) => {
        alert(error.text);
      }
    );
  };

  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={styles["overlay"]}
      className={styles["inquiry-modal"]}
    >
      <button
        type="button"
        className={styles["close"]}
        onClick={onRequestClose}
      >
        Close
      </button>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <h3>Papyrus 도입문의</h3>
          <TextField name="name" required label="성명" />
          <TextField name="companyName" required label="회사명" />
          <TextField
            name="phone"
            placeholder="ex) 010-1234-5678"
            required
            numeric
            label="연락처"
          />
          <TextField
            name="email"
            required
            label="이메일"
            rules={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "이메일 주소가 올바르지 않습니다.",
              },
            }}
          />
          <TextField name="content" textarea required label="문의내용" />
          <button type="submit">Send</button>
        </form>
      </FormProvider>
    </ReactModal>
  );
};

export default InquiryModal;
