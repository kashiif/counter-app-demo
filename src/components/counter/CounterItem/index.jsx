'use strict';

require('./styles.css');

var React = require('react'),
    ItemIncrement = require('./ItemIncrement'),
    ItemDecrement = require('./ItemDecrement'),
    ItemDelete = require('./ItemDelete');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            isEditing: false
        }
    },

    render: function () {
        return (
            <li className="counter-item col-xs-12 v-padding-md">
                <div className="col-xs-12 relative no-padding counter-item-info">
                    <div className="counter-item-name col-xs-10 col-sm-9 no-padding">
                        {this.props.children.toString()}
                    </div>

                    <div className="counter-item-name col-xs-2 col-sm-1 text-right no-padding">
                        {this.props.counter.count}
                    </div>

                    <div className="counter-item-actions">

                        <button className="btn btn-default no-padding btn-action btn-small visible-xs"
                                onClick={this.handleEdit}
                                title="Edit"><i className="icon icon-small icon-edit" />
                        </button>

                        <ItemIncrement counter={this.props.counter} />
                        <ItemDecrement counter={this.props.counter} />
                        <ItemDelete counter={this.props.counter} />

                    </div>

                </div>

                <div className={'col-xs-12 text-center no-padding no-overflow visible-xs counter-item-actions-xs ' + (this.state.isEditing? '' : 'zero-height')}>
                    <ItemIncrement counter={this.props.counter} />
                    <ItemDecrement counter={this.props.counter} />
                    <ItemDelete counter={this.props.counter} />
                </div>
            </li>
        );
    },

    handleEdit: function () {
         this.setState({
             isEditing: !this.state.isEditing
         });
    }

});