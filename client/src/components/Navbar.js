import React, {useContext} from 'react'
import { Context } from '../index'
import {NavLink} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { SHOP_ROUTE } from '../utils/consts'
import { Button } from 'bootstrap'
import { observer } from "mobx-react-lite";

const LocNavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink to={SHOP_ROUTE}>BUYfromUS</NavLink>
        {user.isAuth ? <Nav className="me-auto">
        <Button variant={"outline-light"}>Admin Panel</Button>
        <Button variant={"outline-light"}>Log Out</Button>
        </Nav> : 
        <Nav className="me-auto">
        <Button onClick={() => user.setIsAuth(true)} variant={"outline-light"}>Login</Button>
        </Nav>}
        </Container>
      </Navbar>
    )
})
export default LocNavBar;