// Config
import { useRouter } from 'next/router';

export const gamesFilter = () => {
  const router = useRouter();
  const filters = {};

  if (router.query.title && router.query.title !== '') {
    Object.assign(filters, { title: router.query.title });
  }
  if (router.query.studio && router.query.studio !== '') {
    Object.assign(filters, { studio: router.query.studio });
  }
  if (router.query.category && router.query.category !== '') {
    Object.assign(filters, { category: router.query.category });
  }

  return filters;
};

export const urlParameters = () => {
  const router = useRouter();

  const test = router.asPath.split('?');

  return test[1] ? `?${test[1]}` : undefined;
};
