import React from "react";

const LibrarySong = ({ songs, setCurrentSong, id, audioRef, isPlaying, setSongs, name, artist, cover, active }) => {

  const songSelectHandler = async () => {
    const selectedSong = songs.filter((state) => state.id === id);
    await setCurrentSong({ ...selectedSong[0] });

    const newSongs = songs.map((song) => {
      if(song.id === id) {
        return{
          ...song, 
          active: true,
        }
      } else {
        return {
          ...song, 
          active: false,
        }
      }
    })
    setSongs(newSongs)
    
    if(isPlaying) audioRef.current.play()
  }
  return (
    <div onClick={songSelectHandler} className={`library-song ${active ? "selected" : ""}`}>
      <img src={cover} alt="album cover"></img>
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}


export default LibrarySong