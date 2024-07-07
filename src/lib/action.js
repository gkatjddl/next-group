'use server'
import { connectDB } from '@/util/db';
import { RedirectType,redirect } from 'next/navigation';
// 파일쓰기를 import
import fs from 'node:fs/promises';
import path from 'node:path';
import slugify from 'slugify';
import {v4 as uuidv4} from 'uuid';

export default async function shareAction(formData){
    console.log(formData);

    const data = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        content: formData.get('content'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    console.log(data);
    await saveData(data);
    redirect('/group')       // 끝났으면 그룹 페이지로
}

async function saveData(data){
    data.slug = slugify(data.title, {lower:true});
    
    if(data.image){
        // 이미지이름을 결정, 확장자 파악
        const extension = data.image.name.split('.').pop();  // 확장자만 추출(png, jpg, jpeg, ??)
        const fileName = `${uuidv4()}.${extension}`;       // 이미지명 결정
        const filePath = path.join('public', 'images', fileName);
        if(extension == 'png' || extension == 'jpg' || extension == 'jpeg'){
            // 해당 확장자에 대해 파일로 저장
            const BufImage = await data.image.arrayBuffer();
            await fs.writeFile(filePath, Buffer.from(BufImage));
            data.image = `/images/${fileName}`
        }
    }else{
        data.image = '';
    }

    // DB에 내용 저장
    const db = (await connectDB).db('mydb');
    let result = await db.collection('group').insertOne(data);

}