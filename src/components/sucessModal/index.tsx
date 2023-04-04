import { FiCheckCircle } from "react-icons/fi";

import styles from "./styles.module.scss";
import { Button } from "../button";

export function SuccessModal({ closeModal }: ServerResponseModalProps) {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiCheckCircle />
        <p>Email enviado com sucesso!</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button type="button" title="fechar" />
        </div>
      </div>
    </div>
  );
}