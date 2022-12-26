import axios from "axios";
import SpotifyWebApi from "spotify-web-api-node";
import {MyRecentlyPlayedTracks} from '../types/playerTypes.js'

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(process.env.SPOTY_KEY);

export const currenSongSrv = async () => {
  try {
    const url = "	https://api.spotify.com/v1/me/player/currently-playing";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.SPOTY_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const pauseSongSrv = async (): Promise<void> => {
  try {
    const response = await spotifyApi.pause();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const recentlyPlayerSrv = async (): Promise<MyRecentlyPlayedTracks> => {
  try {
    const response = await spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 });
    console.log(response.body);
    return response.body;
  } catch (error) {
    console.log(error);
  }
};

export const nextSongSrv = async (): Promise<void> => {
  try {
    const response = await spotifyApi.skipToNext();
    console.log(response);
  } catch (err) {
    console.log(err);
    const error = new Error("Sabra que paso xd");
    throw error.message;
  }
};

export const previousSongSrv = async (): Promise<void> => {
  try {
    const response = await spotifyApi.skipToPrevious();
    console.log(response);
  } catch (err) {
    console.log(err);
    const error = new Error("Sabra que paso xd");
    throw error.message;
  }
};

export const playSrv = async (): Promise<void> => {
  try {
    const response = await spotifyApi.play();
    console.log(response);
  } catch (err) {
    console.log(err);
    const error = new Error("Sabra que paso xd");
    throw error.message;
  }
};

export const volumeSrv = async (volume:number): Promise<void> => {
  try {
    const response = await spotifyApi.setVolume(volume);
    console.log(response);
  } catch (err) {
    console.log(err);
    const error = new Error("Sabra que paso xd");
    throw error.message;
  }
};
