import Link from "next/link";


export default function GroupPage(){
    return(
        <div>
            <h1>group페이지</h1>
            <p><Link href="/group/post-1">게시글1</Link></p>
            <p><Link href="/group/post-2">게시글2</Link></p>
        </div>
    )
}

// 리액트 에서는  URL변경을 위해서 a태그가 아니라 Link컴포넌트를 이용