export const playAudio = (isPlaying:boolean, audioRef:any) => {
  if (isPlaying && audioRef) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then((audio:any) => {
          audioRef.current.play();
        })
        .catch((error:any) => console.log(error));
    }
  }
};
