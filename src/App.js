import React, {Component} from 'react';

/* Strings */
import strings from './config/strings';

/* Style */
import './assets/styles/App.css';

/* Components */
import AppHeader from "Components/Appheader/Appheader";
import PhraseSearch from "Components/PhraseSearch/PhraseSearch";
import SentimentResults from "Components/SentimentResults/SentimentResults";
import Comments from "Components/Comments/Comments";

const App = () => {
    return (
        <div className="AppWrapper" >
            <AppHeader title={strings.REDDIT_SENTIMENT_ANALYSER} intro={strings.THIS_IS_A_SIMPLE_LITTLE_TOOL} />
            <PhraseSearch />
            <SentimentResults />
            <Comments />
        </div>
    )
};

export default App;
