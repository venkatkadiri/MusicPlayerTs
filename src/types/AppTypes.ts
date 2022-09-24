import { SongData } from "./utilTypes";

export interface songInformation{
    currentTime: number,
    duration: number,
    animationPercentage: number,
    volume: number,
}

export interface LibraryTypes{
  songs:any,
  setCurrentSong: any,
  audioRef:any,
  isPlaying:boolean,
  setSongs :any,
  libraryStatus:boolean,
}

export interface LibrarySongTypes{
     songs:any,
     cover:string,
     name:string,
     artist:string,
     active:boolean,
     key:string,
     id:string,
     setCurrentSong:any,
     audioRef:any,
     isPlaying:boolean,
     setSongs:React.Dispatch<React.SetStateAction<SongData[]>>,
}

export interface NavTypes{
    setLibraryStatus:React.Dispatch<React.SetStateAction<boolean>>,
    libraryStatus:boolean
}
export interface songTypes{
    active: boolean;
    currentTime: number;
    duration: number;
    animationPercentage: number;
    volume: number;
}

export interface PlayerTypes{
  
  isPlaying:boolean,
  setIsPlaying:React.Dispatch<React.SetStateAction<boolean>>,
  audioRef:any,
  songInfo:songInformation,
  setSongInfo:React.Dispatch<React.SetStateAction<songInformation>>,
  currentSong:SongData,
  songs:SongData[],
  setCurrentSong:any,
  setSongs:any,
}

export interface currentSongTypes{
    currentSong:SongData, 
    isPlaying:boolean
}
