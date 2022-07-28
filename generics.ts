type UserType = {
  firstname: string;
  lastname: string;
  age: number;
};

type PhotoType = {
  smallPhotoUrl: string;
  bigPhotoUrl: string;
};

type ServerResponseType<T> = {
  code: number;
  messages: string;
  data: T;
};

const response1: ServerResponseType<UserType> = {
  code: 1,
  messages: 'all ok',
  data: {
    firstname: 'muy',
    lastname: 'qwe',
    age: 12,
  },
};

const response2: ServerResponseType<PhotoType> = {
  code: 1,
  messages: 'all ok',
  data: {
    smallPhotoUrl: 'qweqwe.jpg',
    bigPhotoUrl: 'wqeqwe.png',
  },
};
