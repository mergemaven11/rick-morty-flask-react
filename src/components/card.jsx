import React, {useState, useEffect} from 'react'
import { Tile, ModalWrapper, UnorderedList, ListItem } from 'carbon-components-react';


export default function Card() {
    const [characters, setCharacters] = useState([])
    const [episodes, setEpisodes] = useState([])

    useEffect(() =>{
        fetch('/api/v1/characters').then((res) => res.json()).then(res => {setCharacters(res)}) 
    }, [])
    // Need to fetch from two separate api endpoints One: Character APi and Two: Episodes within Character Api

    const container = {
        wrapper: {
            borderRadius: '4px', 
            marginTop:'15px',
            marginLeft: '15px',
            padding: '15'
        },
        title: {
            textAlign: 'center',
            color: "#2d6cdf"
        }, 

        img: {
            borderRadius: '4px',
            border: '1px solid #F4F4F4',
        },
        details: {
            position: 'relative',
            float: 'right',
            marginRight: '35px',
            marginLeft: '35px',
            marginTop: '35px',
            border: '1px solid #2d6cdf', 
            padding: '20px'
        }

    }

    return (
        <>
            {characters.map(char  => {

                return (
                    <Tile key={char.id} style={container.wrapper}>
                        <h2 style={container.title}> {char.name} </h2>
                        <img alt="characters" src={char.image} style={container.img}/>
                        <div style={container.details}>
                        <h3>Details: </h3><hr />
                        <p style={{borderRadius: '4px'}}> Location: {char.location.name}</p>
                        <UnorderedList>
                            <ListItem>
                                <p>Status: {char.status}</p>
                                <p>Species: {char.species}</p>
                                <p>Gender: {char.gender}</p>
                            </ListItem>
                        </UnorderedList>
                        </div>
                    
                        <ModalWrapper
                             buttonTriggerText="See Episodes"
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