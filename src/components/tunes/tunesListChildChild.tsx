import React from "react";

import styles from "./tunesListChildChild.module.scss";
import { Song } from "../../assets/types";

interface Props {
  song: Song;
}

const tunesListChildChild: React.FC<Props> = (props) => {
  const { song } = props;
  return (
    <article className={styles.song}>
      <div className={styles.title}>
        <h2>{song.trackName}</h2>
        <p>{song.collectionName}</p>
        <div className={styles.player}>
          {song.artworkUrl100 && <img src={song.artworkUrl100} alt="album" />}
          {<audio controls src={song.previewUrl}></audio>}
        </div>
      </div>
      <footer className={styles.footer}>{song.name}</footer>
    </article>
  );
};

export default tunesListChildChild;
