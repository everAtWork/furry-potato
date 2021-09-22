import { makeAutoObservable } from 'mobx'
export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Смартфоны"},
            {id: 2, name: "Мультиварки"}
        ]
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Redmond"}
        ]
        this._devices = [
            {id: 1, name: "iPhone 12"},
            {id: 2, name: "Redmond ASX"},
            {id: 3, name: "iPhone 13"},
            {id: 4, name: "Redmond XSA4"}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }
    setBrands(brands){
        this._brands = brands
    }
    setDevices(devices){
        this._devices = devices
    }
    
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}