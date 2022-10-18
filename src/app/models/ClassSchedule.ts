export interface ClassSchedue {
  _id?: string;
  subjectcode: string | null;
  name: string;
  schedule: string;
  room: string;
  instructor: {
    _id: string,
    name: string
  };
  students: [{
    _id: string,
    name: string
  }];
}
