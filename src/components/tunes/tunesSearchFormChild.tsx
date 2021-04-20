import React, { useRef, ChangeEvent, FormEvent } from "react";
import { debounce } from "lodash-es";
import styles from "../../views/tunes.module.scss";

interface Props {
  onSearchSubmit: (query: string) => void;
}

const tunesSearchFormChild: React.FC<Props> = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const searchInput = useRef<HTMLInputElement>(null);

  //Funk..cie..
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchItunesSongs();
  };
  const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    searchItunesSongs();
  }, 500);
  //searching itunes songs
  const searchItunesSongs = () => {
    let searchString = searchInput.current?.value;
    if (searchString) {
      props.onSearchSubmit(searchString);
    }
  };

  //template
  return (
    <div className={styles.tunes}>
      <form onSubmit={handleSubmit}>
        <input ref={searchInput} type="text" onChange={handleInput} autoFocus />
      </form>
    </div>
  );
};

export default tunesSearchFormChild;
