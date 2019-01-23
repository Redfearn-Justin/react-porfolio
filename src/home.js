import React, { Component } from 'react';

//navbar import
import Navbar from './components/navbar';

//footer import
import Footer from './components/footer';

// import  from "firebase";

class Home extends Component {
    state = {
        stuff: "",
        moreStuff: ""

    };

    render() {

        return (
            <div>
                <Navbar>

                </Navbar>
                <Footer>

                </Footer>
            </div>

        );
    }
}

export default Home;