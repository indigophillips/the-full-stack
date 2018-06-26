import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      songs: []
    }
  }
  component () {
    getAllSongs()
      .then(songs => {
        this.setState({songs})
      })
  }

  render () {
    return (
      <div>
        <h1>Top Ten Hits</h1>
        <ul>
          {this.state.songs.map(song => {
            return <li key={song.title}>{song.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
