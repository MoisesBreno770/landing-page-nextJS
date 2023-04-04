import Styles from './styles.module.scss';

export const Loading = () => {

    return (
        <div className={Styles.overlay}>
          <div className={Styles.loading}></div>
        </div>
    );
}