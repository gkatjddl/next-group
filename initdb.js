// 몽고DB
    const {MongoClient} = require('mongodb');

    // title, slug,  imgage, summary, creator, creator_email

    const initDate = [
        {
            title: 'join-photography-club',
            slug: 'photo-club',
            image: '/images/photo1.jpg',
            summary: '사진을 통해 세상을 발견하세요! 저희 사진 동아리에 가입하여 함께 배우고, 공유하며, 추억을 담아보세요.',
            content: '경험이 많든 새내기든, 모든 사진 애호가를 환영합니다. 저희 동아리는 매년 사진 산책, 워크샵, 그리고 경연을 준비하고 있습니다. 창의력을 발휘할 수 있는 기회를 놓치지 마세요!',
            creator: '우리 동아리',
            creator_email: 'contact@photographyclub.com'
        },
        {
            title: 'coding-workshop-series-2024',
            slug: '',
            image: '/images/photo2.jpg',
            summary: '코딩의 세계로 여행을 떠나보세요! 초보자부터 중급자까지 코딩 스킬을 향상시킬 수 있는 워크샵 시리즈를 준비했습니다.',
            content: '매주 수요일 저녁에 파이썬, 자바스크립트 등을 다루는 인터랙티브한 세션을 진행합니다. 사전 경험이 없어도 참여할 수 있습니다. 자리가 한정되어 있으니 빠르게 신청하세요!',
            creator: '우리 동아리',
            creator_email: 'info@computerscienceclub.org'
        },
        {
            title: 'book-club-launch-event',
            slug: '',
            image: '/images/photo3.jpg',
            summary: '책을 사랑하는 모든 분들을 초대합니다! 저희 독서 동아리에 가입하여 같이 책 읽기의 즐거움을 누려보세요.',
            content: `[날짜]에 론칭 이벤트를 개최합니다. 동아리 멤버들과 만나서 독서 목록을 논의하고, 문학적인 감동을 함께 나누는 시간을 가져보세요.
             고전부터 현대 소설까지 다양한 장르를 다루는 저희 동아리에서 책을 읽는 즐거움을 경험해보세요!`,
            creator: '우리 동아리',
            creator_email: 'booklovers@bookclubcommunity.com'
        },
        {
            title: 'environmental-awareness-campaign-2024',
            slug: '',
            image: '/images/photo4.jpg',
            summary: '우리와 함께 지구를 지키는 노력에 동참하세요! 환경 보호 캠페인을 통해 지속 가능성을 증진시키는데 기여해보세요.',
            content: '워크샵, 청소 운동, 교육 세션을 통해 환경 문제에 대한 인식을 높이고 있습니다. 열정적인 커뮤니티에 합류하여 더욱 녹색과 건강한 지구를 위해 기여해보세요!',
            creator: '우리 동아리',
            creator_email: 'greenaction@environmentalclub.net'
        },
        {
            title: 'dance-marathon-fundraiser-2024',
            slug: '',
            image: '/images/photo5.jpg',
            summary: '즐기면서 기부하는 댄스 마라톤에 참여하세요! 행사 수익금은 의미 있는 사회 활동을 지원합니다.',
            content: `음악과 댄스로 가득한 한 밤을 즐기면서 함께 사회에 기여할 수 있는 기회입니다.
             프로 댄서든, 댄스를 좋아하는 사람이든 모두 환영합니다!`,
            creator: '우리 동아리',
            creator_email: 'danceforcharity@danceclub.org'
        }
    ];

    // 몽고DB 연결
    // node initdb.js
    async function connectDB(){
        const url = "mongodb+srv://gkatjddl:gkatjddl@cluster0.ruqraup.mongodb.net/";
        const options = {};
        let connectDB;

        if(process.env.NODE_ENV === 'development'){
            if(!global._mongo){
                global._mongo = new MongoClient(url,options).connect()
            }
            return connectDB = global._mongo
        }else{
            return connectDB = new MongoClient(url, options).connect()
        }
    }

    async function insertDummyData(){
        const client = await connectDB();   // url로 연결
        const db = client.db('mydb');            // Database이름으로 연결
        const collection = db.collection('group');     // group 컬렉션에 접근

        const result = await collection.insertMany(initDate);
        console.log(`${result} 입력`);
    }
    insertDummyData()