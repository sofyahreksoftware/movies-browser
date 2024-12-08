import { ReactNode } from "react";

export type StatusProp = "initial" | "success" | "loading" | "error";

export type HeaderProp = string | undefined;

export type TotalResultsProp = number | undefined;

export type QueryProp = string | undefined;

export type ChildrenProp = ReactNode;
