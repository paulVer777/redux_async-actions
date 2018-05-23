import React from 'react'
import {connect} from 'react-redux'


const Customers = (props) => (

    <div>
        {
            props.customers.map((value, index) => (

                <div>{value.name.first}</div>
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({

    customers: state.customers.clients

})

const mapDispatchToProps = (dispatch) => ({

})


export default connect(mapStateToProps,mapDispatchToProps)(Customers)