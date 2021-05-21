export class TV {
  static NAME = "TV";
  id?: string;
}
export type TVViewName = "_base" | "_instance_name" | "_local";
export type TVView<V extends TVViewName> = never;
