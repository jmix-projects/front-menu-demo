export class Computers {
  static NAME = "Computers";
  id?: string;
}
export type ComputersViewName = "_base" | "_instance_name" | "_local";
export type ComputersView<V extends ComputersViewName> = never;
