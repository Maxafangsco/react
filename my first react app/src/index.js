import React from 'react';
import ReactDOM from 'react-dom';
 import profile1 from  './image/john.jpeg';
 import profile2 from  './image/lukas.jpeg';
 import profile3 from  './image/sera.jpeg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
    return (
    <div className='ui comments'>

        <UserCard>
            <div>
                My name is Rita and i live in UAE Dubai! :)
            </div>
        </UserCard>
        <UserCard>
                <SingleComment  
                name='Alex' 
                date='8:00am'
                text='It is amazing'
                picture={profile1}
                />
        </UserCard>

        <UserCard>
            <SingleComment 
                name='Joan'
                date='1:00pm'
                text='Great job'
                picture={profile2}
                />
        </UserCard>

        <UserCard>
                <SingleComment 
                name='Sara' 
                date='7:00pm'
                text='You are you a super star'
                picture={profile3}
                />
        </UserCard>
    </div>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)