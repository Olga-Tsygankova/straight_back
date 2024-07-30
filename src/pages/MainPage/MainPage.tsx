import styles from './styles.module.css';
import {Info} from '../../components/Info';
import {Changer} from '../../components/Changer';
import {Introduce} from '../../components/Introduce'

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
