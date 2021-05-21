export class Android {
  static NAME = "Android";
  id?: string;
}
export type AndroidViewName = "_base" | "_instance_name" | "_local";
export type AndroidView<V extends AndroidViewName> = never;
