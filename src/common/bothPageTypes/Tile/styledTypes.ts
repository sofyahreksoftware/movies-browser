export type PersonDetailed = boolean | null;

export interface DetailedProp {
  $detailed?: boolean;
}

export interface PersonDetailedProp {
  $personDetailed?: PersonDetailed;
}

export interface BackdropProp {
  $backdrop?: boolean;
}

export interface HiddenProp {
  hidden: boolean;
}

export interface SmallProp {
  $small?: boolean;
}

export interface NoImageProp {
  $noImage?: boolean;
}

export interface UrlProp {
  url?: string;
}
