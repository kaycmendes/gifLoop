import React, { Component } from 'react';
import { Jumbotron, Container, Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import TrendingGifs from './Trending';
import GifList from './GifList'
import Header from './Header'
import Help from '../components/Help'

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
        axios.get(`https://api.giphy.com/v1/gifs/search?q='river loop'&limit=3&api_key=FxJ5CJ4D8qcg50KUxT0O8ZCZadmWEWX6`)
            .then(response => this.setState({
                trendGifs: response.data.data
            }))
            .catch(err => console.log('Error fetching', err))
    }




    onSearch = (query) => {
        const axios = require('axios');
        // Make a request for a user with a given ID
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=FxJ5CJ4D8qcg50KUxT0O8ZCZadmWEWX6`)
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
                <Help />
                <Header />
                <div className="text-center w-80 jumbo-wrapper">
                    <Jumbotron className="bg-primary" fluid>
                        <Container>
                            <h1>SEARCH FOR GIFS</h1>
                            <p>
                                Infinite ones..
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