import { Image as RNImage } from "react-native";

export type Pin = {
  id: string;
  title: string;
  image: number; // result of require("...")
  ratio: number; // width / height
  creator: { name: string; avatarUrl: string };
};

const CREATOR = {
  name: "hunny",
  avatarUrl: "https://picsum.photos/seed/hunny-avatar/96/96",
};

function getImageRatio(file: number): number {
  const resolver = (RNImage as typeof RNImage & {
    resolveAssetSource?: (source: number) => { width?: number; height?: number } | null;
  }).resolveAssetSource;

  const src = typeof resolver === "function" ? resolver(file) : null;
  const width = src?.width ?? 1;
  const height = src?.height ?? 1;
  return height === 0 ? 1 : width / height;
}

function makePin(id: string, file: number, title: string): Pin {
  return { id, title, image: file, ratio: getImageRatio(file), creator: CREATOR };
}

// ADD YOUR OWN PICTURES HERE: [require(...), "Title"]
const PICTURES: [number, string][] = [
  [require("../../assets/images/891643561_2356426091845716_4687706369140992844_n.jpg"), "HAIRCUT"],
  [require("../../assets/images/888448471_4615719318641068_8512578049465079858_n.jpg"), "TAMBAY"],
  [require("../../assets/images/888407854_4096480770656804_350955870249950434_n.jpg"), "SHOPING"],
  [require("../../assets/images/890376720_914447678303085_5523996827663347845_n.jpg"), "PIZZA"],
  [require("../../assets/images/888174603_2398683514270619_152508279405433837_n.jpg"), "LAAG"],
  [require("../../assets/images/889835999_1880578862931263_7608454245404921299_n.jpg"), "CUTE"],
];

export const BASE_PINS: Pin[] = PICTURES.map(([file, title], i) =>
  makePin(String(i + 1), file, title)
);

/** Page 0 is your list; later pages repeat it (rotated) so the feed keeps scrolling. */
export function makePage(page: number): Pin[] {
  if (page === 0) return BASE_PINS;
  const n = page % BASE_PINS.length;
  return [...BASE_PINS.slice(n), ...BASE_PINS.slice(0, n)].map((p) => ({
    ...p,
    id: `${p.id}~${page}`,
  }));
}
