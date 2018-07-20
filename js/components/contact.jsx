import React from 'react';
import axios from "axios";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            msg: '',
            validName: "" ,
            validEmail: "",
            validMsg: "",
            ValidEndText: "",
            validEnd: true

        };
/*        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleMsgChange = this.handleMsgChange.bind(this)
        this.sendData = this.sendData.bind(this)*/

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

    /*async */sendData = (event) => {
        event.preventDefault();
      /*  const {name, email, msg} = this.state;*/

     /*   const form = await axios.post("/api/form", {
            name:
            email:
            msg:
        })*/

        if(this.state.name.length === 0) {
            this.setState ({
                validName: " /Uzupełnij to pole",
                validEnd: false

            })
        } else {
            this.setState ({
                validName: "",
                validEnd: true
            })
        }

        if(this.state.msg.length === 0) {
            this.setState ({
                validMsg: " /Uzupełnij to pole",
                validEnd: false
            })
        } else {
            this.setState ({
                validMsg: "",
                validEnd: true
            })
        }

        if(this.state.email.includes("@") === false) {
            this.setState ({
                validEmail: " /Uzupełnij to pole",
                validEnd: false
            })
        } else {
            this.setState ({
                validEmail: "",
                validEnd: true
            })
        }
        console.log(this.state.validEnd);

        if(this.state.validEnd = true) {
            this.setState ({
                validEndText: "Dziękujemy za wiadomość",
            })
        } else {
            this.setState ({
                validEndText: "",

            })
        }
        console.log(this.state.validEndText);
    }
    

    handleKeyUp(event) {
        if (event.keyCode == 13)  return this.sendData()
    }

    handleMsgChange = (event) => {
        this.setState({
            msg: event.target.value
        });
    };
    render(){
        return (
            <form onSubmit={this.sendData} className={"form"}
                  onKeyUp={this.handleKeyUp}>
                <label>
                    Imię i Nazwisko: {this.state.validName}<br/>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        className={"form_input_name"}
                    />
                </label>
                <label>
                    E-mail: {this.state.validEmail}<br/>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        className={"form_input_email"}
                    />
                </label>
                <label className="form_input_msg_holder">
                    Wiadomość:{this.state.validMsg} <br/>
                    <textarea
                        rows="14"
                        cols="10"
                        wrap="soft"
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
                        <div className="col-6 contact_holder_text">
                            <p className="contact_text">
                                <p>Jeśli chcesz się ze mną coś narysować, wyślij wiadomość. Na pewno się odezwę!</p>
                                {/*<hr/>*/}
                                <p className="contact_text_citation"> And God said, “it is good, she and I will dance.”</p>
                            </p>
                            <p>
                                {/*{this.state.validEndText}*/}
                            </p>
                        </div>
                        <div className="col-6 contact_holder_form">
                            <Form/>

                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export {Contact}