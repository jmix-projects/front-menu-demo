export class Xiaomi {
  static NAME = "Xiaomi";
  id?: string;
}
export type XiaomiViewName = "_base" | "_instance_name" | "_local";
export type XiaomiView<V extends XiaomiViewName> = never;
