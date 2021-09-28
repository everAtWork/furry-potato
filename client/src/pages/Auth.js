import React from 'react'
import  { NavLink, useLocation } from 'react-router-dom'
import {Container, Card, Form, Button, Row} from 'react-bootstrap'
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/consts'

const Auth = () => {
    const location = useLocation()
    const isLogged = location.pathname === LOGIN_ROUTE
    console.log(location)
}

export default function Auth() {
    return (
        <Container style={{height: window.innerHeight - 54 }} className="d-flex justify-content-center align-items-center">
            <Card style={{width: 600}}>
                <h2 className="m-auto">{isLogged ? "Авторизация" : "Регистрация"}</h2>
            <Form>
                <Form.Control placeholder="Введите EMAIL" className="mt-2" />
                <Form.Control placeholder="Введите пароль!" className="mt-2" />

                <Row className="d-flex justify-content-between pl-3 pr-3 mt-3">
                {isLogged ? <div>
                    <NavLink to={SIGNUP_ROUTE}>
                    Нет аккаунта? Зарегистрируйтесь!
                    </NavLink>
                    </div> : <div>
                    <NavLink to={LOGIN_ROUTE}>
                    Уже зарегистрированы? Войдите!
                    </NavLink>
                    </div>}
                <Button className="mt-3 align-self-end" variant="outline-primary">{isLogged ? "Войти!" : "Регистрация"}</Button>
                </Row>
            </Form>
            </Card>
        </Container>
    )
}
