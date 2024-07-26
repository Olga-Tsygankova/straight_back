import styles from './styles.module.css';
import {Info} from '../../components/Info'
import { Introduce } from '../../components/Introduce';
import { Changer } from '../../components/Changer';

export const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      {/*Тут будут лежать компоненты из папки components*/}
      {/*собирать главную страницу будем здесь*/}
      Main Page
      <Introduce />
      <Changer />
      <Info />
    </div>
  );
};
