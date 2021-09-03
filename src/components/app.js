import React, {Component} from "react"
import subscribeToTimer from "../api/Api"
import {quoteLoaded} from "../actions/action"
import {connect} from "react-redux"
import ViewComponent from "./view-component"

class App extends Component {

    componentDidMount() {

        subscribeToTimer((data) => {
            this.props.quoteLoaded(data)

        })
    }

    render() {

        const {quotes} = this.props

        return (
            <ul>
                {
                    quotes.map((quote) => {
                        return (
                            <li key={quote.change}>
                                <ViewComponent quote={quote}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({quotes}) => {
    return {quotes}
}

const mapDispatchToProps = {
    quoteLoaded
}

export default connect(mapStateToProps, mapDispatchToProps)(App)