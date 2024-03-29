import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/'

class SongList extends React.Component{

    renderList = () => {
        return 'sess';
    }

    render(){
        return (
        <div className= "ui divided list">{this.renderList}{this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className = "right floated content">
                        <button  className =" ui button primary">
                            Select
                        </button>
                    </div>
                    <div>
                        <div className="content">{song.title}</div>
                    </div>
                </div>
            );
        })}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);
