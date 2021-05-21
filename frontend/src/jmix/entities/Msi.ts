export class Msi {
  static NAME = "Msi";
  id?: string;
}
export type MsiViewName = "_base" | "_instance_name" | "_local";
export type MsiView<V extends MsiViewName> = never;
