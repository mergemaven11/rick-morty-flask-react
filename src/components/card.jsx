import React, {useState, useEffect} from 'react'
import { Tile, ModalWrapper, UnorderedList, ListItem } from 'carbon-components-react';


export default function Card() {
    const [characters, setCharacters] = useState([])

    useEffect(() =>{
        fetch('/api/v1/characters').then((res) => res.json()).then(res => {setCharacters(res)}) 
    }, [])

    return (
        <>
            {characters.map(char  => {

                return (
                    <Tile key={char.id} style={{borderRadius: '4px', marginTop:'15px'}}>
                        <h2> {char.name} </h2>
                        <img alt="characters" src={char.image} style={{borderRadius: '50%'}}/>
                        <p style={{borderRadius: '4px'}}> {char.location.name}  </p>
                    
                        <ModalWrapper
                             buttonTriggerText="See Details"
                             modalHeading={`${char.name}`}
                             modalLabel="Information card"
                             passiveModal
                             danger size='sm'
                        >
                            <UnorderedList>
                            <ListItem>
                                <p>Status: {char.status}</p>
                                <p>Species: {char.species}</p>
                                <p>Gender: {char.gender}</p>
                            </ListItem>
                        </UnorderedList>
                        </ModalWrapper>
                    </Tile>
                    )
            })}
        </>
    )
}


// https://carbondesignsystem.com/components/modal/usage