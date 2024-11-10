export interface DetailedProp {
  $detailed?: boolean;
}

export interface PersonDetailedProp {
  $personDetailed?: boolean;
}

export interface BackdropProp {
  $backdrop?: boolean;
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

export type WrapperProps = DetailedProp & SmallProp;

export type PosterProps = DetailedProp & SmallProp & NoImageProp & UrlProp;

export type VotesProps = DetailedProp & BackdropProp;

export type WrapperExtendedProps = DetailedProp &
  PersonDetailedProp &
  BackdropProp;

export type TitleProps = SmallProp &
  DetailedProp &
  PersonDetailedProp &
  BackdropProp;
