// Config
import { useRouter } from 'next/router';

export const gamesFilter = () => {
  const router = useRouter();
  const filters = {};

  if (router.query.title && router.query.title !== '') {
    Object.assign(filters, { title: router.query.title });
  }
  if (router.query.category && router.query.category !== '') {
    Object.assign(filters, { category: router.query.category });
  }
  if (router.query.platform && router.query.platform !== '') {
    Object.assign(filters, { platform: router.query.platform });
  }
  if (router.query.producer && router.query.producer !== '') {
    Object.assign(filters, { producer: router.query.producer });
  }
  if (router.query.publisher && router.query.publisher !== '') {
    Object.assign(filters, { publisher: router.query.publisher });
  }

  return filters;
};

export const urlParameters = () => {
  const router = useRouter();

  const test = router.asPath.split('?');

  return test[1] ? `?${test[1]}` : undefined;
};
