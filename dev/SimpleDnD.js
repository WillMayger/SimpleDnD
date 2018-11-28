import React from 'react';
import PropTypes from 'prop-types';

import './simple-dnd.css';

export default class SimpleDnD extends React.Component {
  state = {
    dragging: 0,
    draggable: false,
  }

  // Event to be fired when an element is being dragged
  onDragOver = (index) => {
    const {
      someArray,
      saveToState,
    } = this.props;

    const {
      dragging,
    } = this.state;

    // prevents unnessasary processing
    if (index === dragging) return;

    // create a temporary unmutable new array
    // (only using the first layer so spread operator is fine)
    const newArray = [...someArray];

    // change positions of array items to match the drag
    const old = newArray[dragging];
    newArray[dragging] = newArray[index];
    newArray[index] = old;

    // set the current drag index to state and then save the new array back to the parent component
    this.setState({
      dragging: index,
    }, () => saveToState(
      newArray,
    ));
  }

  render() {
    const {
      draggable,
    } = this.state;

    const {
      someArray,
      ArrayTemplate,
      LastTileTemplate,
    } = this.props;

    return (
      <div className={`tiles ${draggable ? 'draggable' : ''}`}>
        {
            someArray.map((item, i) => (
              <div
                className="dnd-container-box"
                onDragOver={() => this.onDragOver(i)}
              >
                <div
                  className="tile"
                  draggable="true"
                  onDragEnd={() => this.setState({ draggable: false })}
                  onDragStart={() => this.setState({ draggable: true, dragging: i })}
                >
                  <div className="tile-inner">
                    <ArrayTemplate {...item} />
                  </div>
                </div>
              </div>
            ))
        }
        {
          LastTileTemplate !== null ? (
            <div
              className="tile last-tile"
            >
              <div className="tile-inner last-tile">
                <LastTileTemplate />
              </div>
            </div>
          ) : (null)
        }
      </div>
    );
  }
}

SimpleDnD.defaultProps = {
  LastTileTemplate: null,
  ArrayTemplate: ({ ...item }) => (
    <div
      style={{
        height: 80,
        padding: 20,
        background: 'rgba(144,244,144,0.3)',
        border: '5px solid white',
      }}
    >
      <h4 style={{ color: '#000' }}>
        {JSON.stringify(item)}
      </h4>
    </div>
  ),
};

SimpleDnD.propTypes = {
  ArrayTemplate: PropTypes.node,
  LastTileTemplate: PropTypes.node,
  someArray: PropTypes.array.isRequired,
  saveToState: PropTypes.func.isRequired,
};
