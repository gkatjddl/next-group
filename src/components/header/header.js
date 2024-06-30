'use client'
import Link from "next/link";

// css 중복 방지를 위한 .module.css 파일
// .css의 네임스페이스와 비슷
import styles from "./header.module.css";

// 이미지를 사용하려면 import
import navLogo from '@/assets/group_logo.png';
import { usePathname } from "next/navigation";
import HeaderBackground from "./header-background";

// 컴포넌트 이름은 대문자로 시작!
export default function Header(){
    // 현재 경로가 어딘지? ==> <Link>의 색을 변경 (.active)
    const path = usePathname();         // URL정보 ('use client')


    return(
        <>
            <HeaderBackground/>
            <div className={styles.headerContainer}>
                <Link href="/">
                    <img src={navLogo.src} alt="우리동아리"></img>
                </Link>
                <nav>
                    <ul className={styles.nav}>
                        <li>
                        <Link href="/group" className={ path.startsWith('/group') ? styles.active : undefined}>동아리 개시글</Link>
                        </li>
                        <li>
                        <Link href="/about" className={ path.startsWith('/about') ? styles.active : undefined}>소개</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}