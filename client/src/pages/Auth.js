import React from 'react'
import {Container, Card, Form, Button, NavLink} from 'react-bootstrap'

export default function Auth() {
    return (
        <Container style={{height: window.innerHeight - 54 }} className="d-flex justify-content-center align-items-center">
            <Card style={{width: 600}}>
                <h2 className="m-auto">Авторизация</h2>
            <Form>
                <Form.Control placeholder="Введите EMAIL" className="mt-2" />
                <Form.Control placeholder="Введите пароль!" className="mt-2" />
                <Button className="mt-3 align-self-end" variant="outline-primary">Войти!</Button>

                <Row className="d-flex justify-content-between pl-3 pr-3 mt-3">
                <div>
                    <NavLink to={REGISTRATION__ROUTE}>
                    Нет аккаунта? Зарегистрируйтесь!
                    </NavLink>
                    </div>
                </Row>
            </Form>
            </Card>
        </Container>
    )
}
