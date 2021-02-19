import React, {useState, useEffect} from 'react'
import { Tile, ModalWrapper, UnorderedList, ListItem } from 'carbon-components-react';


export default function Card() {
    const [characters, setCharactors] = useState([])

    useEffect(() =>{
        fetch('/api/v1/characters').then((res) => res.json()).then(res => {setCharactors(res)}) 
    }, [])

    return (
        <>
            {characters.map(char  => {

                return (
                    <Tile key={char.id}>
                        <h2> {char.name} </h2>
                        <img alt="characters" src={char.image} style={{borderRadius: '50%'}}/>
                        <ModalWrapper
                             buttonTriggerText="See Details"
                             modalHeading={`${char.name}`}
                             modalLabel="Information card for:"
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