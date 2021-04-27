import { Photo } from '../models/photo';

export const PromosWithOtherPhotos: Photo[] = [
  {
    id: 1,
    name: 'Some promo 1',
    scr: 'an image source',
    created_at: 'some date',
    updated_at: 'some date',
    likes: 10,
    user: {
      id: 1,
      username: 'bob',
    },
  },
  {
    id: 1,
    name: 'Some promo 2',
    scr: 'an image source',
    created_at: 'some date',
    updated_at: 'some date',
    likes: 10,
    user: {
      id: 1,
      username: 'bob',
    },
  },
  {
    id: 2,
    name: 'Some photo 3',
    scr: 'an image source',
    created_at: 'some date',
    updated_at: 'some date',
    likes: 10,
    user: {
      id: 1,
      username: 'bob',
    },
  },
  {
    id: 3,
    name: 'Some promo 4',
    scr: 'an image source',
    created_at: 'some date',
    updated_at: 'some date',
    likes: 10,
    user: {
      id: 1,
      username: 'bob',
    },
  },
  {
    id: 4,
    name: 'Some promo 5',
    scr: 'an image source',
    created_at: 'some date',
    updated_at: 'some date',
    likes: 10,
    user: {
      id: 1,
      username: 'bob',
    },
  },
  {
    id: 5,
    name: 'Some photo 6',
    scr: 'an image source',
    created_at: 'some date',
    updated_at: 'some date',
    likes: 10,
    user: {
      id: 1,
      username: 'bob',
    },
  },
];
