import TinderCard from 'react-tinder-card';
import { useState } from 'react';
import "./profile-card.css"
import { MonicasSidebar } from './MonicasSidebar';

export function ProfileCard() {

    const characters = [
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
    const [lastDirection, setLastDirection] = useState()
  
    const swiped = (direction, nameToDelete) => {
      console.log('removing: ' + nameToDelete)
      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }
  

    return (
        <div className="dashboard">
            <MonicasSidebar />
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) =>
                        <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                </div>
            </div>
        </div>
    )
}