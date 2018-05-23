const GETC = 'customers/GETC'


const getc = (customers) => ({

    type: GETC,
    customers

})

const initialState = {

    clients: []
}

export const fetchCustomers=(dispatch,getState)=>(

    fetch('https://randomuser.me/api/?results=10')
        .then(response=>response.json())
        .then(data =>dispatch(getc(data.results)))

).catch(()=>alert("Error"))

export default (state = initialState, action) => {

    switch (action.type) {
        case GETC:
            return {
                ...state,
                clients: action.customers
            }
        default:
            return state
    }
}
