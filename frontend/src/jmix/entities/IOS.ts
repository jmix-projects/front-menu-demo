export class IOS {
  static NAME = "IOS";
  id?: string;
}
export type IOSViewName = "_base" | "_instance_name" | "_local";
export type IOSView<V extends IOSViewName> = never;
