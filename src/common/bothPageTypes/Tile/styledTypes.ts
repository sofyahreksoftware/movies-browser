export type PersonDetailed = boolean | null;

export type DetailedProp = {
  $detailed?: boolean;
};

export type PersonDetailedProp = {
  $personDetailed?: PersonDetailed;
};

export type BackdropProp = {
  $backdrop?: boolean;
};

export type HiddenProp = {
  hidden: boolean;
};

export type SmallProp = {
  $small?: boolean;
};

export type NoImageProp = {
  $noImage?: boolean;
};

export type UrlProp = {
  url?: string;
};
