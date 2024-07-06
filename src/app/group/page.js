import ActivitiesGrid from "@/components/activities/activities-grid";
import { connectDB } from "@/util/db";
import Link from "next/link";
import styles from './page.module.css'

export default async function GroupPage(){

    const db = (await connectDB).db('mydb');
    let activities = await db.collection('group').find().toArray();
    
    // 몽고DB의 _id를 문자열로 변경해서 컴포넌트끼리 전달
    activities = activities.map((item, index)=>({
        ...item,
        _id:item._id.toString()         // hexString에서 String으로 (props전달을 위해)
    }))
    console.log(activities);
    await new Promise(resolve=>setTimeout(resolve, 1500))
    return(
        <div>
            <header className={styles.header}>
                <h1>동아리 활동 게시글</h1>
                <p className={styles.highlight}>
                    <Link href={'/group/share'}>활동 공유</Link>
                </p>
            </header>
            <main className={styles.cta}>
                {/* 게시글을 보여주는 컴포넌트 */}
                <ActivitiesGrid activitise={activities}/>
            </main>
        </div>
    )
}

// 리액트 에서는  URL변경을 위해서 a태그가 아니라 Link컴포넌트를 이용