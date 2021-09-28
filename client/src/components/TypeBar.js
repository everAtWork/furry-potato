import React from 'react'
import {observer} from 'mobx'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Justo cras odio</ListGroupItem>
            <ListGroupItem>Cras odio justo</ListGroupItem>
        </ListGroup>
    )
})

export default TypeBar
