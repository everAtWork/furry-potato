import React, { Component } from 'react'
import { Row, Card } from 'react-bootstrap'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return(
        <Row className="d-flex">
            {device.brands.map(brand => {
                <Card className="p-3" key={brand.id}>
                    {brand.name}
                </Card>
            })}
        </Row>
    )
})

export default BrandBar