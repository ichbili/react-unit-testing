import React from 'react';
import { connect } from 'react-redux';

const Comment = props => (
    <li key={props.index}>{props.comment}</li>      
);
const CommentList = props => (
        <div className="comment-list">
            <h4>Comment List</h4>
            <ul>{props.comments.map(
                (comment, index) => 
                <Comment 
                    comment={comment} 
                    key={index} 
                    index={index} />)}
            </ul>
        </div>
);

const mapStateToProps = state => {
    return { comments: state.comments }
}

export default connect(mapStateToProps, null)(CommentList);