import { FiXSquare } from "react-icons/fi";

import styles from "./styles.module.scss";
import { Button } from "../button";

export const FailModal = ({ closeModal }: ServerResponseModalProps) => {
  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modalContainer}>
        <FiXSquare />
        <p>Não foi possível enviar no momento, tente novamente mais tarde.</p>
        <div className={styles.okButtonContainer} onClick={closeModal}>
          <Button type="button" title="fechar" />
        </div>
      </div>
    </div>
  );
};