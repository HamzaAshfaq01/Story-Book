import { Helmet } from 'react-helmet-async';
// sections
import { NewsListView } from '../../sections/news/view';

// ----------------------------------------------------------------------

export default function NewsListPage() {
  return (
    <>
      <Helmet>
        <title> NewYork Time </title>
      </Helmet>

      <NewsListView />
    </>
  );
}
