import React from 'react';
import { useRouter } from 'next/router';
import Router from 'next/router';

// Helpers
import { colors, breakpoints, animation } from '../../styles/variables';
import { categories } from '../../content/json/categories.json';
import { Options } from '../common/formik/FormikSelect';
import { GamePlatformsData } from '../../content/types/games';

// Components
import TitleLine from '../common/TitleLine';
import { Formik, FormikHelpers, Form } from 'formik';
import FormikInput from '../common/formik/FormikInput';
import FormikSelect from '../common/formik/FormikSelect';
import Button from '../common/Button';
import Link from 'next/link';

interface MyFormValues {
  title: string;
  category: Options;
  platform: Options;
  producer: Options;
  publisher: Options;
}

interface GamesFiltersProps {
  producers: Array<string>;
  publishers: Array<string>;
  platforms: GamePlatformsData[];
  handleRefreshData: Function;
}

const GamesFilters = ({ producers, publishers, platforms, handleRefreshData }: GamesFiltersProps) => {
  const router = useRouter();

  return (
    <>
      <Formik
        initialValues={{
          title: router.query.title && router.query.title !== '' ? router.query.title : '',
          category: {
            value: router.query.category && router.query.category !== '' ? router.query.category : '',
            label: router.query.category && router.query.category !== '' ? router.query.category : '',
          },
          platform: {
            value: router.query.platform && router.query.platform !== '' ? router.query.platform : '',
            label: router.query.platform && router.query.platform !== '' ? router.query.platform : '',
          },
          producer: {
            value: router.query.producer && router.query.producer !== '' ? router.query.producer : '',
            label: router.query.producer && router.query.producer !== '' ? router.query.producer : '',
          },
          publisher: {
            value: router.query.publisher && router.query.publisher !== '' ? router.query.publisher : '',
            label: router.query.publisher && router.query.publisher !== '' ? router.query.publisher : '',
          },
        }}
        onSubmit={(values: MyFormValues, actions: FormikHelpers<MyFormValues>) => {
          const filtersLength =
            (values.title !== '' ? 1 : 0) +
            (values.category && values.category.value !== '' ? 1 : 0) +
            (values.platform && values.platform.value !== '' ? 1 : 0) +
            (values.producer && values.producer.value !== '' ? 1 : 0) +
            (values.publisher && values.publisher.value !== '' ? 1 : 0);
          const filters = [
            values.title !== '' ? `title=${values.title}` : '',
            values.category && values.category.value !== '' ? `category=${encodeURI(values.category.value)}` : '',
            values.platform && values.platform.value !== '' ? `platform=${encodeURI(values.platform.value)}` : '',
            values.producer && values.producer.value !== '' ? `producer=${encodeURI(values.producer.value)}` : '',
            values.publisher && values.publisher.value !== '' ? `publisher=${encodeURI(values.publisher.value)}` : '',
          ];
          const cleanFilters = filters.filter(el => el !== '');

          Router.replace(`/${router.pathname.split('/')[1]}/1${filtersLength > 0 ? '?' : ''}${cleanFilters.join('&')}`);

          setTimeout(() => {
            handleRefreshData();
          }, 100);
          actions.setSubmitting(false);
        }}
      >
        {({ values, setFieldValue, setFieldTouched }) => (
          <Form autoComplete="on">
            <div className="filters-wrapper">
              <div>
                <TitleLine title="Wyszukaj" backgroundColor={colors.ui.default} />
                <FormikInput name="title" label="Tytuł" />
              </div>
              <div>
                <TitleLine title="Filtry" backgroundColor={colors.ui.default} />
                <FormikSelect
                  options={platforms.map(item => ({ value: item.id, label: `${item.name} (${item.id})` }))}
                  value={values.platform && values.platform.value !== '' ? values.platform : null}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  id="platform"
                  label="Platforma"
                />
                <FormikSelect
                  options={categories.map(item => ({ value: item, label: item }))}
                  value={values.category && values.category.value !== '' ? values.category : null}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  id="category"
                  label="Kategoria"
                />
                <FormikSelect
                  options={producers.map(item => ({ value: item, label: item }))}
                  value={values.producer && values.producer.value !== '' ? values.producer : null}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  id="producer"
                  label="Producent"
                />
                <FormikSelect
                  options={publishers.map(item => ({ value: item, label: item }))}
                  value={values.publisher && values.publisher.value !== '' ? values.publisher : null}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
                  id="publisher"
                  label="Wydawca"
                />
                <div className="filter-submit">
                  <Link href="/games">
                    <a>Wyczyść filtry</a>
                  </Link>
                  <Button
                    type="submit"
                    title="Szukaj"
                    variant="negative"
                    onButtonClick={() => {
                      return;
                    }}
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <style jsx>{`
        .filters-wrapper {
          background-color: ${colors.ui.default};
          width: 100%;
          padding: 10px;
        }

        .filter-submit {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
          margin-right: -10px;
        }

        .filter-submit a {
          color: ${colors.white};
          text-decoration: none;
          transition: ${animation.fast}ms color ease-out;
        }

        .filter-submit a:hover {
          color: ${colors.ui.dark};
        }

        @media screen and (min-width: ${breakpoints.lg}px) {
          .filters-wrapper {
            width: 350px;
            margin: 5px;
            margin-left: 15px;
          }
        }
      `}</style>
    </>
  );
};

export default GamesFilters;
