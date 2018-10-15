import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

const App = () => {
    return (
        <div className="app">
            <div className="app-title">React and Redux Unit Testing Application</div>
            <CommentBox />
            <CommentList />
        </div>
    );
};

export default App;