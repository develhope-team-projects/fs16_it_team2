import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import "./profile-card.css"

const db = [
    {
        name: 'Richard Hendricks',
        url: 'https://a.storyblok.com/f/149299/800x1208/f0ac56edbe/tinder-smiling_pic.jpeg'
    },
    {
        name: 'Erlich Bachman',
        url: 'https://a.storyblok.com/f/149299/800x1208/f0ac56edbe/tinder-smiling_pic.jpeg'
    },
    {
        name: 'Monica Hall',
        url: 'https://a.storyblok.com/f/149299/800x1208/f0ac56edbe/tinder-smiling_pic.jpeg'
    },
    {
        name: 'Jared Dunn',
        url: 'https://a.storyblok.com/f/149299/800x1208/f0ac56edbe/tinder-smiling_pic.jpeg'
    },
    {
        name: 'Dinesh Chugtai',
        url: 'https://a.storyblok.com/f/149299/800x1208/f0ac56edbe/tinder-smiling_pic.jpeg'
    }
]

function ProfileCard() {
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
    const [lastDirection, setLastDirection] = useState()
    const currentIndexRef = useRef(currentIndex)

    const childRefs = useMemo(
        () =>
            Array(db.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }

    const canGoBack = currentIndex < db.length - 1

    const canSwipe = currentIndex >= 0

    
    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < db.length) {
            await childRefs[currentIndex].current.swipe(dir) 
        }
    }

    
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }

    return (
        <div className='mainContainer'>
            <link
                href='https://fonts.googleapis.com/css?family=Damion&display=swap'
                rel='stylesheet'
            />
            <link
                href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
                rel='stylesheet'
            />
            <div className='cardContainer'>
                {db.map((character, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className='swipe'
                        key={character.name}
                        onSwipe={(dir) => swiped(dir, character.name, index)}
                        onCardLeftScreen={() => outOfFrame(character.name, index)}
                    >
                        <div
                            style={{ backgroundImage: 'url(' + character.url + ')' }}
                            className='card'
                        >
                            <h3>{character.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <div className='buttons'>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
                <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
            </div>
            {lastDirection ? (
                <h2 key={lastDirection} className='infoText'>
                    You swiped {lastDirection}
                </h2>
            ) : (
                <h2 className='infoText'>
                    Swipe a card or press a button to get Restore Card button visible!
                </h2>
            )}
        </div>
    )

}
export default ProfileCard
