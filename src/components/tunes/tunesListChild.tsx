import React from "react";
import { Song } from "../../assets/types/index";
import SongChild from "./tunesListChildChild";
import styles from "../../views/tunes.module.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../App.scss";
interface Props {
  songs: Song[];
}

const tunesListChild: React.FC<Props> = (props) => {
  const { songs } = props;
  return (
    <div className={styles.tunes}>
      <TransitionGroup component="ul" className={styles.anim}>
        {songs.map((song) => (
          <CSSTransition key={song.id} timeout={300} classNames="anim">
            <li key={song.id}>
              <SongChild song={song} />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default tunesListChild;
