//Action Creator

export const selectSong = (song) => {
    //Return on action 
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

