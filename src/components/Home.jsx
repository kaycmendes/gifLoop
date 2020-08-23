import React, { Component } from 'react';
import { Navbar, Nav, Jumbotron, Container, Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import TrendingGifs from './Trending';
import GifList from './GifList'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trendGifs: [],
            gifs: [],
            searchText: ''
        }
        this.textInput = React.createRef()
    }






    trending = () => {
        const axios = require('axios');
        // Make a request for a user with a given ID
        axios.get(`http://api.giphy.com/v1/gifs/search?q='river loop'&limit=5&api_key=dc6zaTOxFJmzC`)
            .then(response => this.setState({
                trendGifs: response.data.data
            }))
            .catch(err => console.log('Error fetching', err))
    }




    onSearch = (query) => {
        const axios = require('axios');
        // Make a request for a user with a given ID
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query + ' loop'}&limit=16&api_key=FxJ5CJ4D8qcg50KUxT0O8ZCZadmWEWX6`)
            .then(response => this.setState({
                gifs: response.data.data
            }))
            .catch(err => console.log('Error fetching', err))
    }


    handleChange() {
        this.setState({
            searchText: this.textInput.current.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.onSearch(this.state.searchText)
        e.currentTarget.reset();
    }



    componentDidMount() {
        this.trending();
    }



    render() {
        return (
            <>
                <div className="nav-wrapper" >
                    <Navbar className="justify-content-md-center navbar ml-5 mr-5" bg="light" variant="light">
                        <Navbar.Brand className="" href="#home">gifLoop</Navbar.Brand>
                        <Nav className="ml-auto ">
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#features">Why?</Nav.Link>
                            <Nav.Link href="#pricing">How?</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                <div className="text-center w-80 jumbo-wrapper">
                    <Jumbotron className="bg-primary" fluid>
                        <Container>
                            <h1>Search for gifs</h1>
                            <p>
                                That seems to be infinite...
                        </p>
                        </Container>
                    </Jumbotron>
                    <div className="searchBar-wrapper">
                        <Form onSubmit={this.handleSubmit.bind(this)} className="size-lg">
                            <Row>
                                <Col>
                                    <InputGroup className="searchBar">
                                        <FormControl ref={this.textInput} type="text" onChange={() => this.handleChange()} />
                                        <Button type="submit" variant="primary">Search</Button>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="featured">
                    <h2>Featured</h2>
                    <TrendingGifs data={this.state.trendGifs} />
                    <GifList data={this.state.gifs} />
                </div>

            </>
        );
    }
}

export default Home;