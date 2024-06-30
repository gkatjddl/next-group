''
import Link from "next/link";


export default function GroupPostPage({params}){
    return(
        <div>
            <h1>게시글 상세 페이지</h1>
            {/* 내가 접속한 동정URL : params*/}
            <p>{params.slug}</p>
            
            <Link href='/group'>이전</Link>
        </div>
    )
}