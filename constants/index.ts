export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STORAGE_BASE_URL: "https://jh.storage.bunnycdn.com/rhymes-store",
  CDN_URL: "https://rhymes-loop.b-cdn.net",
  TRANSCRIPT_URL: "https://vz-cdd2c802-e4c.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "Snapchat Message",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/jason.png",
    username: "Jack",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    title: "Birthday Celebration",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-05-03"),
    userImg: "/assets/images/sarah.png",
    username: "Sarah",
    views: 24,
    visibility: "private",
    duration: 210,
  },
  {
    id: "3",
    title: "Beach Vacation",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-04-28"),
    userImg: "/assets/images/mike.png",
    username: "Mike",
    views: 56,
    visibility: "public",
    duration: 184,
  },
  {
    id: "4",
    title: "Cooking Tutorial",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-05-05"),
    userImg: "/assets/images/emma.png",
    username: "Emma",
    views: 32,
    visibility: "public",
    duration: 275,
  },
  {
    id: "5",
    title: "Gym Workout",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-04-30"),
    userImg: "/assets/images/david.png",
    username: "David",
    views: 18,
    visibility: "private",
    duration: 142,
  },
  {
    id: "6",
    title: "Music Cover",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-05-02"),
    userImg: "/assets/images/lisa.png",
    username: "Lisa",
    views: 42,
    visibility: "public",
    duration: 198,
  },
  {
    id: "7",
    title: "Tech Review",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-04-25"),
    userImg: "/assets/images/alex.png",
    username: "Alex",
    views: 89,
    visibility: "public",
    duration: 321,
  },
  {
    id: "8",
    title: "Pet Tricks",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-05-04"),
    userImg: "/assets/images/olivia.png",
    username: "Olivia",
    views: 15,
    visibility: "private",
    duration: 167,
  }
];