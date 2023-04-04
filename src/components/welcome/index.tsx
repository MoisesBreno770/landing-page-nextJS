import { Button } from '../button';
import Styles from './welcome.module.scss';
import BannerWelcome  from '../../../public/images/bannerWelcome.svg';
import Image from 'next/image';
import { ScrollTo } from '@/utils/scrollTo';

export const Welcome = () => {
    return <div className={Styles.container}>
        <div className={Styles.text}>
            <h1>Melhor agência de marketing do bairro</h1>
            <p>Somos uma agência de perfomance digital, aceleramos vindas e
                aquisição de leads para grandes marcas.
            </p>
            <Button type='button' title='Aumentar vendas' kind='secundary' onClick={() => ScrollTo('contact')}></Button>
        </div>
         <div className={Styles.image}>
            <Image src={BannerWelcome} alt='Banner Welcome'/>
        </div>
    </div>
}