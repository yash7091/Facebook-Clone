import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post profilePic="https://scontent.fidr1-1.fna.fbcdn.net/v/t1.0-9/92741564_2833434033413405_2582609387507941376_n.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=Pwwe-Rfp-0YAX945yK8&_nc_ht=scontent.fidr1-1.fna&oh=d59bef76dea57f62e2db0af09341bfaf&oe=5FAE024F"
                    message="This works "
                    timestamp="this is timestamp"
                    username="chris hemsworth"
                    image="https://scontent.fidr1-1.fna.fbcdn.net/v/t1.0-0/p526x296/95273493_2884826491607492_1109573563624456192_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=NnHZcIsCH50AX9nylM5&_nc_ht=scontent.fidr1-1.fna&tp=6&oh=0d81733330d26444e0136f245abc067d&oe=5FACA026" />
            <Post profilePic="https://scontent.fidr1-2.fna.fbcdn.net/v/t1.0-9/116703212_10220087192742890_4471515127517863542_n.jpg?_nc_cat=107&_nc_sid=825194&_nc_ohc=IGz_pZDzS8gAX-3mAHN&_nc_ht=scontent.fidr1-2.fna&oh=df0109d226e1eb7c55cbcce9da37dda9&oe=5FAEB253"
                    message="cool"
                    timestamp="timestamp"
                    username="Tom ellis"
                    image="https://scontent.fidr1-2.fna.fbcdn.net/v/t1.0-9/120924113_110725734133134_5218606836849323350_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=iTEKA6L2rr8AX_uUIUv&_nc_ht=scontent.fidr1-2.fna&oh=5315d98bdde270f5e90acdb8a297f5c1&oe=5FAD754E"/>
            <Post profilePic="https://scontent.fidr1-1.fna.fbcdn.net/v/t34.0-12/38977783_1455255074611485_1516270864_n.jpg?_nc_cat=1&_nc_sid=09cbfe&_nc_ohc=bo2qEI_fZbQAX9VowIR&_nc_ht=scontent.fidr1-1.fna&oh=1603205d09f0ce2a7626835268ef1ac0&oe=5F8984C7"
                    message="yo"
                    timestamp="timestamp"
                    username="Rohit Sharma"
                    image="https://scontent.fidr1-1.fna.fbcdn.net/v/t15.5256-10/120929300_1000663473735397_6033757732770712287_n.jpg?_nc_cat=104&_nc_sid=ad6a45&_nc_ohc=ZCozNX1_V-gAX9L8YPm&_nc_ht=scontent.fidr1-1.fna&oh=799e105289c091543e273e0003fd0428&oe=5FAEB1D3"/>


        </div>
    )
}

export default Feed
