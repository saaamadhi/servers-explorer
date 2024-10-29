import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  Typography,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { getServers } from '../../../api';
import countries from '../../utils/countryCodes.json';
import { IHeadCell, IServer, IServerExpanded, sortDesc } from '../../utils';
import Spinner from '../Spinner';
import Flag from '../Flag';

const initialHeadCells: IHeadCell[] = [
  { id: 'name', title: 'Country name', position: 'left', order: 'desc' },
  { id: 'distance', title: 'Distance', position: 'right', order: 'desc' },
];

const countryCodes = Object.keys(countries) as (keyof typeof countries)[];

const ServerList = () => {
  const theme = useTheme();
  const [servers, setServers] = useState<IServerExpanded[]>([]);
  const [headCells, setHeadCells] = useState(initialHeadCells);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['servers'],
    queryFn: () => getServers(),
  });

  useEffect(() => {
    if (data) {
      setServers(() =>
        data.map((server: IServer) => {
          const clearCountryName = server.name.split('#')[0].trim();
          const countryCode = countryCodes.find(
            (code) => countries[code] === clearCountryName,
          );

          return { ...server, countryCode } as IServerExpanded;
        }),
      );
    }
  }, [data]);

  const handleSort = (property: string) => {
    const propertyOrder = headCells.find((el) => el.id === property)?.order;
    setHeadCells((prevState) => {
      return prevState.map((el) => {
        if (el.id === property) {
          return { ...el, order: el.order === 'asc' ? 'desc' : 'asc' };
        }
        return el;
      });
    });
    setServers((prevState) => {
      const copy = [...prevState];
      return copy.sort(
        propertyOrder === 'desc'
          ? (a, b) => sortDesc(a, b, property as keyof IServerExpanded)
          : (a, b) => -sortDesc(a, b, property as keyof IServerExpanded),
      );
    });
  };

  if (!servers) {
    return null;
  }
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return null;
  }

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: theme.spacing(156),
        width: '100%',
        maxHeight: theme.spacing(222),
        height: '100%',
        m: `${theme.spacing(11)} 0`,
        p: `0 ${theme.spacing(8)}`,
        borderRadius: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        overflowY: 'scroll',
        overflowX: 'hidden',

        [theme.breakpoints.down('sm')]: {
          p: `0 ${theme.spacing(4)}`,
        },
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headCells.map(({ id, title, position, order }: IHeadCell) => (
              <TableCell
                key={`${title}-${position}`}
                align={position}
                sx={{
                  pr: 0,
                  pl: 0,
                  top: '-1px',
                  '&.MuiTableCell-alignRight': { flexDirection: 'row' },
                }}
              >
                <TableSortLabel
                  active
                  direction={order}
                  onClick={() => handleSort(id)}
                  IconComponent={ArrowDropDown}
                >
                  {title}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {servers.map(({ name, distance, countryCode }: IServerExpanded) => (
            <TableRow key={`${name}-${distance}`}>
              <TableCell sx={{ display: 'flex', pl: 0 }}>
                <Flag code={countryCode} />
                <Typography variant='caption'>{name}</Typography>
              </TableCell>
              <TableCell align='right' sx={{ pr: 0 }}>
                <Typography
                  variant='caption'
                  fontWeight={600}
                >{`${distance} km`}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ServerList;
