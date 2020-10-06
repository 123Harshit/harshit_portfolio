import React, { Component } from 'react';

class Motive extends Component {
    render() {

        if (this.props.data) {
            var motive = this.props.data.motive.map(function (motive) {
                return <li key={motive.user}>
                    <blockquote>
                        <p>{motive.text}</p>
                        <cite>{motive.user}</cite>
                    </blockquote>
                </li>
            })
        }

        return (
            <section id="motive">
                <div className="text-container">
                    <div className="row">

                        <div className="two columns header-col">
                            <h1><span>Client Motive</span></h1>
                        </div>

                        <div className="ten columns flex-container">
                            <ul className="slides">
                                {motive}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Motive;
