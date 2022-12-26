import { Request, Response } from "express";
import {
  currenSongSrv,
  pauseSongSrv,
  recentlyPlayerSrv,
  nextSongSrv,
  previousSongSrv,
  playSrv,
  volumeSrv,
} from "../services/player.services.js";

export const play = async (req: Request, res: Response) => {
  const response = await currenSongSrv();
  res.json(response);
};

export const pause = async (req: Request, res: Response) => {
  const response = await pauseSongSrv();
  res.json({ message: "Paused" });
};

export const recentlyPlayer = async (req: Request, res: Response) => {
  try {
    const response = await recentlyPlayerSrv();
    res.json(response);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const nextSong = async (req: Request, res: Response) => {
  try {
    const response = await nextSongSrv();
    res.json(response);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const previousSong = async (req: Request, res: Response) => {
  try {
    const response = await previousSongSrv();
    res.json(response);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const playSong = async (req: Request, res: Response) => {
  try {
    const response = await playSrv();
    res.json(response);
  } catch (error) {
    return res.json({ message: error });
  }
};

export const volume = async (req: Request, res: Response) => {
  try {
    const { vol } = req.query;
    console.log(vol);
    const response = await volumeSrv(Number(vol));
    res.json(response);
  } catch (error) {
    return res.json({ message: error });
  }
};
