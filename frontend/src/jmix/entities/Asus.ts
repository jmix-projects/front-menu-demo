export class Asus {
  static NAME = "Asus";
  id?: string;
}
export type AsusViewName = "_base" | "_instance_name" | "_local";
export type AsusView<V extends AsusViewName> = never;
