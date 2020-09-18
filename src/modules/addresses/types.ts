export const FETCH_ADDRESS = "FETCH_ADDRESS";

export type IAddress = {
    id: string,
    city: string,
    country: string,
    street: string,
    state: string,
    companyId: string,
}

export type IAction = {
    type: string,
    payload: IAddress,
}

export type IState = {
    address: {
        address: [IAddress]
    }
}