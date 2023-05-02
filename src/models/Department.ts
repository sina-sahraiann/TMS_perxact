export default interface DepartmentModel {
  id: string;
  name: string;
  tag: {
    name: string;
    color: string;
  }[];
  state: {
    name: string;
    color: string;
  }[];
  type: {
    name: string;
    color: string;
  }[];
  tickets: {
    name: string;
    color: string;
  }[];
}
