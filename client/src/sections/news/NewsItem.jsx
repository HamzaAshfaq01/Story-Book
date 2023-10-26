import PropTypes from 'prop-types';
import moment from 'moment';
// @mui
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// components
import Image from '../../components/image';
import Iconify from '../../components/iconify';

export default function NewsItem({ news }) {
  const { title, url, abstract, multimedia, byline, published_date } = news;

  const renderImages = (
    <Stack
      spacing={0.5}
      direction='row'
      sx={{
        p: (theme) => theme.spacing(1, 1, 0, 1),
      }}
    >
      {multimedia.length && (
        <>
          <Stack flexGrow={1} sx={{ position: 'relative' }}>
            <Image
              alt={multimedia[0].caption}
              src={multimedia[0].url}
              sx={{ borderRadius: 1, height: 250, width: 1 }}
            />
          </Stack>
        </>
      )}
    </Stack>
  );

  const renderTexts = (
    <ListItemText
      sx={{
        p: (theme) => theme.spacing(2.5, 2.5, 2, 2.5),
      }}
      secondary={
        <Link variant='subtitle2' underline='hover' href={url} color='inherit' target='_blank' rel='noreferrer'>
          {title}
        </Link>
      }
      primaryTypographyProps={{
        typography: 'caption',
        color: 'text.disabled',
      }}
      secondaryTypographyProps={{
        mt: 1,
        noWrap: true,
        component: 'span',
        color: 'text.primary',
      }}
    />
  );

  const renderInfo = (
    <Stack
      spacing={1.5}
      sx={{
        position: 'relative',
        p: (theme) => theme.spacing(0, 2.5, 2.5, 2.5),
      }}
    >
      {[
        {
          label: abstract,
          icon: <Iconify icon='fluent:text-description-rtl-20-regular' sx={{ color: 'error.main' }} />,
        },
        {
          label: byline,
          icon: <Iconify icon='solar:users-group-rounded-bold' sx={{ color: 'info.main' }} />,
        },
        {
          label: moment(published_date).format('DD-MM-YYYY'),
          icon: <Iconify icon='ion:time-outline' sx={{ color: 'primary.main' }} />,
        },
      ].map((item) => (
        <Stack key={item.label} spacing={1} direction='row' alignItems='center'>
          <Stack>{item.icon}</Stack>
          <Typography
            sx={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2, // Set the number of lines you want to display
              textOverflow: 'ellipsis',
            }}
          >
            {item.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );

  return (
    <>
      <Card>
        {renderImages}
        {renderTexts}
        {renderInfo}
      </Card>
    </>
  );
}

NewsItem.propTypes = {
  news: PropTypes.object,
};
