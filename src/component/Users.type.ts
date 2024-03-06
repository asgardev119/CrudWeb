export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export enum pageEnum {
  UserData,
  AddNew,
  ShowData,
  Edit,
}

export const DummyUsers: User[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "Asgar",
    lastName: "Ansari",
    email: "asagar@123.com",
  },
  {
    id: new Date().toJSON().toString(),
    firstName: "ansari",
    lastName: "Asgar",
    email: "ansari@321.com",
  },
];
