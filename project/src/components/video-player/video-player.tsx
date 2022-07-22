import { useRef } from 'react';
import { Film } from '../../types/film';

type Props = {
  film: Film;
}

function VideoPlayer({film}: Props): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <video src={film.previewVideoLink} loop poster={film.posterImage} ref={videoRef}></video>
  );
}

export default VideoPlayer;
