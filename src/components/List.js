import React, { Component } from 'react';
import store from '../js/store/index';
import { addArticle } from '../js/actions/index';
import { AddArticleComponent } from './AddArticle';

class ListComponent extends Component {

    state = {
        articles: [
            { title: "React Redux Tutorial for Beginners", id: 1 },
            { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
        ]
    };



    constructor() {
        super();

        store.dispatch(addArticle(this.state.articles));

        console.log('first', store.getState());
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    render() {
        const { articles } = this.state;
        console.log('articles', articles);
        return (
            <div>
                <ul>{articles.map(el => <li key={el.id}>{el.title}</li>)}</ul>
                <AddArticleComponent />
            </div>
        );
    }
}

export default ListComponent;