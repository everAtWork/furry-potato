import React from 'react'
import {observer} from 'mobx'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type => {
                <ListGroupItem key={type.id}>
                    {type.name}
                </ListGroupItem>
            })}
        </ListGroup>
    )
})

export default TypeBar
