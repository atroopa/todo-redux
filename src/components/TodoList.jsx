
import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
 
  return (
    <div>
        <ul>
            {
                props.list && props.length?
                    props.list.map((row, index) => {
                        return <li>row.content</li>
                    })
                : <li>nothing</li>
            }
        </ul>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        list: state.data
    }
}

export default connect(mapStateToProps)(TodoList);