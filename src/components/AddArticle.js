import React, { Component } from 'react';
import store from './../js/store/index';
import { addArticle } from '../js/actions/index';

export class AddArticleComponent extends Component {

    addArticle = () => {

        store.dispatch(addArticle({ title: 'React Redux Tutorial for Beginners', id: Math.random() }));
        console.log('second', store.getState());
    }

    render() {
        return (
            <button onClick={this.addArticle}>Add Article</button>
        )
    }
}

export default AddArticleComponent;