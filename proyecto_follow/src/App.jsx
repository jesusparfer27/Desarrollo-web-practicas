import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'jesusparfer',
        name: 'Jesus Pareja Fernandez',
        isFollowing: true
    },
    {
        userName: 'princenadir',
        name: 'Nadir El Kenakki',
        isFollowing: false
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: true
    },
    {
        userName: 'saraiparfer',
        name: 'Sarai Pareja Fernandez',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            { 
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
            ))
        }
        </section>
    )
} 