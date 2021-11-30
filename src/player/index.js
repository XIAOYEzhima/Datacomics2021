import React from 'react';
import './player.css';

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isPlaying: false
        }
    }

    handlePlayClick = () => {
        this.audio.play()
        const playState = !this.state.isPlaying;
        this.setState({ isPlaying: playState });
    }

    handlePauseClick = () => {
        this.audio.pause()
        const playState = !this.state.isPlaying;
        this.setState({ isPlaying: playState });
    }

    render() {
        return (<div className="playerWrapper">
            <audio ref={(audio) => { this.audio = audio }} src={require("../test.mp3").default} autoPlay />
            <div className="playerControl">
                <span className={this.state.isPlaying ? "isPlayingButton" : ""} onClick={this.handlePlayClick}>ON</span>
                |
                <span className={!this.state.isPlaying ? "isPlayingButton" : ""} onClick={this.handlePauseClick}>OFF</span>
            </div>
        </div>)
    }
}

export { Player }