import React, {useContext} from 'react'
import { Row, Card } from 'react-bootstrap'
import { observer } from "mobx-react-lite";
import { Context } from '../index'

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return(
        <Row className="d-flex">
            {device.brands.map(brand => {
                <Card 
                style={{cursor: 'pointer'}}
                onClick={() => device.setSelectedBrand(brand)}
                className="p-3" 
                key={brand.id}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            })}
        </Row>
    )
})

export default BrandBar