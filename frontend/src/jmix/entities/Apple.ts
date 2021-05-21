export class Apple {
  static NAME = "Apple";
  id?: string;
}
export type AppleViewName = "_base" | "_instance_name" | "_local";
export type AppleView<V extends AppleViewName> = never;
