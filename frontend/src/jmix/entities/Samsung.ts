export class Samsung {
  static NAME = "Samsung";
  id?: string;
}
export type SamsungViewName = "_base" | "_instance_name" | "_local";
export type SamsungView<V extends SamsungViewName> = never;
