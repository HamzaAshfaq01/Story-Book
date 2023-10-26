import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';

import NewsItem from './NewsItem';

// ----------------------------------------------------------------------

export default function NewsList({ newsList }) {
  return (
    <>
      {newsList.length && (
        <Box
          gap={3}
          display='grid'
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {newsList.map((news, index) => (
            <NewsItem key={index} news={news} />
          ))}
        </Box>
      )}
    </>
  );
}

NewsList.propTypes = {
  products: PropTypes.array,
};
