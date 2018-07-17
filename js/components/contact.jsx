import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            msg: ''
        };
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    sendData = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    handleMsgChange = (event) => {
        this.setState({
            msg: event.target.value
        });
    };
    render(){
        return (
            <form onSubmit={this.sendData} className={"form"}>
                <label>
                    Imię i Nazwisko: <br/>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        className={"form_input_name"}
                    />
                </label>
                <label>
                    E-mail:<br/>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        className={"form_input_email"}
                    />
                </label>
                <label>
                    Wiadomość: <br/>
                    <input
                        type="textarea"
                        cols="20"
                        rows="8"
                        value={this.state.msg}
                        onChange={this.handleMsgChange}
                        className={"form_input_msg"}
                    />
                </label>

                <span className="form_button_span">
                    <input className="form_button_submit" type="submit" value="Wyśli" ></input>
                </span>
            </form>
        );
    }
}


class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
                    <div className="contact_container container-grid">
                        <div className="col-6 about_holder_text">
                            <p className="contact_text">
                                Jeśli chcesz się ze mną coś narysować,
                                <hr/>
                                    And God said, “it is good, she and I will dance.”
                            </p>
                        </div>
                        <div className="col-6 about_holder_form">
                            <Form/>

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export {Contact}