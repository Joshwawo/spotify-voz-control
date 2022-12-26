export interface MyRecentlyPlayedTracks {
  items: any[];
  next: string;
  cursors: {
    after?: string;
    before?: string;
  };
  limit: number;
  href: string;
}
