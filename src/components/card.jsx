import React, {useState, useEffect} from 'react'
import { Tile, ModalWrapper, UnorderedList, ListItem } from 'carbon-components-react';


export default function Card() {
    const [characters, setCharacters] = useState([])

    useEffect(() =>{
        fetch('/api/v1/characters').then((res) => res.json()).then(res => {setCharacters(res)}) 
    }, [])
    // Need to fetch from two separate api endpoints One: Character APi and Two: Episodes within Character Api

    const container = {
        title: {
            textAlign: 'center',
            color: "#2d6cdf"
        }, 

        img: {
            borderRadius: '4px',
            border: '1px solid #F4F4F4'
        }
    }

    return (
        <>
            {characters.map(char  => {

                return (
                    <Tile key={char.id} style={{borderRadius: '4px', marginTop:'15px'}}>
                        <h2 style={container.title}> {char.name} </h2>
                        <img alt="characters" src={char.image} style={container.img}/>
                        <p style={{borderRadius: '4px'}}> {char.location.name}  </p>
                        <UnorderedList>
                            <ListItem>
                                <p>Status: {char.status}</p>
                                <p>Species: {char.species}</p>
                                <p>Gender: {char.gender}</p>
                            </ListItem>
                        </UnorderedList>
                    
                        <ModalWrapper
                             buttonTriggerText="See Details"
                             modalHeading={`${char.name}`}
                             modalLabel="Information card"
                             passiveModal
                             danger size='sm'
                        >
                            <p>Episodes appeared in will go here </p>
                        </ModalWrapper>
                    </Tile>
                    )
            })}
        </>
    )
}


// https://carbondesignsystem.com/components/modal/usage