import styles from './styles.module.css';
import {Info} from '../../components/Info';
import {Introduce} from '../../components/Introduce';
import { SimpleCarousel } from '../../components/Slider2'

export const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      {/*Тут будут лежать компоненты из папки components*/}
      {/*собирать главную страницу будем здесь*/}
      Main Page
      <Introduce />
      <Info />
      <SimpleCarousel/>
    </div>
  );
};
