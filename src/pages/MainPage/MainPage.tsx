import styles from './styles.module.css';
import {Info} from '../../components/Info';
import {Introduce} from '../../components/Introduce';
import {Wemake} from '../../components/Wemake';
import {SimpleCarousel} from '../../components/Slider2';
import {Header} from '../../components/Header'
import { Footer } from '../../components/footer'
import { Cater } from '../../components/Cater'

export const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      {/*Тут будут лежать компоненты из папки components*/}
      {/*собирать главную страницу будем здесь*/}
      <Header />
      <Introduce />
      <Info />
      <Wemake />
      <Cater />
      <SimpleCarousel />
      <Footer />
    </div>
  );
};
