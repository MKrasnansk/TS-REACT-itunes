import React, { useState } from "react";
import axios from "axios";

//styles..
import styles from "./tunes.module.scss";
//children
import TunesList from "../components/tunes/tunesListChild";
import SearchForm from "../components/tunes/tunesSearchFormChild";
import { Song } from "../assets/types";

interface SongFromTunes {
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  kind?: string;
  artworkUrl100?: string;
}

//component
const TunesComponent: React.FC = () => {
  //state LIST
  const [songs, setSongs] = useState([]);

  const handleSubmit = (query: string) => {
    axios
      .get(
        `https://itunes.apple.com/search?term=${encodeURI(
          query
        )}&entity=musicTrack&limit=5`
      )
      .then((response) => {
        console.log(response.data.results);
        let iTunesSong = response.data.results
          .filter((song: SongFromTunes) => song.kind === "song")
          .map((song: SongFromTunes) => extractData(song));
        setSongs(iTunesSong);
      });
  };
  //funkcions
  const extractData = ({
    trackId: id,
    artistName: name,
    collectionName,
    trackName,
    artistViewUrl,
    collectionViewUrl,
    trackViewUrl,
    previewUrl,
    artworkUrl100,
  }: SongFromTunes) => {
    return {
      id,
      name,
      collectionName,
      trackName,
      artistViewUrl,
      collectionViewUrl,
      trackViewUrl,
      previewUrl,
      artworkUrl100,
    } as Song;
  };
  //template..
  return (
    <article className={styles.tunes}>
      <h1>Tunes</h1>
      <SearchForm onSearchSubmit={handleSubmit} />
      <TunesList songs={songs} />
    </article>
  );
};

export default TunesComponent;
