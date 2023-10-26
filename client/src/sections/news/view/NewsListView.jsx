import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmptyContent from '../../../components/empty-content';

import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
//
import NewsList from '../NewsList';
import NewsTableToolbar from '../NewsTableToolbar';
import { getNewsRequest, clearNewsList, clearError } from '../../../actions/news';

// ----------------------------------------------------------------------

function NewsListView({ News: { error, newsList }, getNews, clrNewsList, clrError }) {
  const [tableData, setTableData] = useState([]);

  const [filterName, setFilterName] = useState('');

  const errToast = (err) => toast.error(err, { autoClose: 5000 });

  useEffect(() => {
    if (newsList == null) {
      getNews();
    } else {
      setTableData(newsList);
    }

    // eslint-disable-next-line
  }, [newsList]);

  useEffect(() => {
    if (error) {
      errToast(error);
    }

    // eslint-disable-next-line
  }, [error]);

  useEffect(
    () => () => {
      clrNewsList();
      clrError();
    },
    // eslint-disable-next-line
    []
  );

  const dataFiltered = applyFilter({
    inputData: tableData,
    filterName,
  });

  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  };

  const handleResetFilter = () => {
    setFilterName('');
  };

  const isFiltered = filterName !== '';

  const isNotFound = (!dataFiltered.length && !!filterName) || !dataFiltered.length;

  return (
    <Container maxWidth='lg'>
      <CustomBreadcrumbs
        heading='News List'
        links={[{ name: 'News', href: PATH_DASHBOARD.root }]}
        sx={{
          mb: { xs: 2 },
          mt: { xs: 3, md: 5 },
        }}
      />
      <ToastContainer />
      <Stack
        spacing={2.5}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <NewsTableToolbar
          isFiltered={isFiltered}
          filterName={filterName}
          onFilterName={handleFilterName}
          onResetFilter={handleResetFilter}
        />
      </Stack>
      {isNotFound && <EmptyContent title='No Data' sx={{ py: 10 }} />}
      <NewsList newsList={dataFiltered} />
    </Container>
  );
}

NewsListView.propTypes = {
  News: PropTypes.object.isRequired,

  getNews: PropTypes.func.isRequired,

  clrError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  News: state.News,
});

export default connect(mapStateToProps, {
  getNews: getNewsRequest,
  clrNewsList: clearNewsList,
  clrError: clearError,
})(NewsListView);

function applyFilter({ inputData, filterName }) {
  if (filterName) {
    inputData = inputData.filter((news) => news.title.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
  }

  return inputData;
}
