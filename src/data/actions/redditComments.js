import * as types from './actionTypes';

export const fetchingComments = () => {
    return {
        type: types.FETCH_COMMENTS
    }
};

export const receiveComments = json => {
    return {
        type: types.RECEIVE_COMMENTS,
        comments: json.comments
    }
};

export const fetchComments = ( searchTerm ) => {

    return dispatch => {
        dispatch(fetchingComments);

        const url = "https://api.pushshift.io/reddit/search?q=" + searchTerm;

        // $.ajax({
        //     url: url,
        //     context: this
        // }).done(function (response) {
        //     console.log('data fetched');
        //     var data = response.data;
        //     this.setState({
        //         searchResults: data,
        //         loading: false
        //     });
        //     console.log('Search Results:', this.state.searchResults);
        // }, this);

        return fetch( url )
            .then (response => response.json())
            .then (json => dispatch(receiveComments(json)))
    }
};