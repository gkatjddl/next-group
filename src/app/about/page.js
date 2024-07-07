
import tiger1 from '@/assets/tiger1.jpg'
import tiger2 from '@/assets/tiger2.jpg'
import tiger3 from '@/assets/tiger3.jpg'

import Image from 'next/image'
import styles from './page.module.css'

export default function AboutPage(){
    return(
        <div className={styles.about}>  
            <header className={styles.header}>
                <h1 className={styles.highlight}>
                    우리동아리
                </h1>
                <p>우리 동아리는...</p>
            </header>
            <main className={styles.main}>
                <ul className={styles.perks}>
                    <li>
                        <Image src={tiger1} alt=''/>
                        <p>호랑이</p>
                    </li>
                    <li>
                        <Image src={tiger2} alt=''/>
                        <p>호랑이</p>
                    </li>
                    <li>
                        <Image src={tiger3} alt=''/>
                        <p>호랑이</p>
                    </li>
                </ul>
            </main>
        </div>
    
    )
}

// 이미지 3개
// 소개글