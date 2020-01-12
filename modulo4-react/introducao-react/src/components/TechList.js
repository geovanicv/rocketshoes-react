import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList  extends Component{

    state = {
        newTech: '',
        techs: [
            'NodeJs',
            'ReactJs',
            'React Native',
        ]
    }

    changingInput = (e) => {
        this.setState({ newTech: e.target.value });
    }

    formSubmit = e => {
        e.preventDefault();
        
        this.setState({ 
            techs: [...this.state.techs, this.state.newTech],
            newTech: '',
        });
    }

    delete = (tech) => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech) })
    }

    render(){

        return (  
                <form onSubmit={this.formSubmit}>
                    <ul>
                        { this.state.techs.map(tech => 
                            <TechItem 
                                key={tech} 
                                tech={tech} 
                                onDelete={() => this.delete(tech)} 
                            /> 
                        )}
                    </ul>
                    <input 
                        type="text" 
                        onChange={this.changingInput} 
                        value={this.state.newTech}/>

                    <button type="submit">Enviar</button>
                </form>    
               );
    }
}

export default TechList;