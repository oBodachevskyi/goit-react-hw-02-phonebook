import React, { Component } from 'react';

class ContactForm extends Component {
    state = {     
        name: '',
        number: ''
      }

      handleInputChange = e => {
        this.setState({[e.currentTarget.name]:e.currentTarget.value})
      }
    
      handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({name:"", number:""})
      }

    render () {
        return (
            <label> 
               
                <form onSubmit={this.handleSubmit}> 
               <label>
                   Name
                   <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={this.state.name} 
                  onChange={this.handleInputChange}
                />
               </label>
                <br></br>
                <label>
                    Phone
                <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number} 
                onChange={this.handleInputChange}
/>
                </label>
                <br></br>
                <button type="sunmit">Add Contacts</button>
                </form>
            </label>
            )
    }
   
}

export default ContactForm;

