import React, { Component } from 'react'
import axios from 'axios'

class CompanyShow extends Component{
    state = {
        company: {}
    }

    componentWillMount(){
        this.getOneCompany
    }
    async getOneCompany() {
        try {
            const res = await axios.get(`/api/companies/${this.props.match.params.company_id}`)
            const company = res.data
            this.setState({ company: company })
        }
        catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <div>
                <div>
                <img  src="http://www.earthsharega.org/wp-content/uploads/2014/02/GREENJOBS-300x148.png" width="300" height="148"/>
                </div>
            </div>
        )
    }
}

export default CompanyShow