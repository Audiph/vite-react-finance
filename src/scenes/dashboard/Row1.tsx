import DashboardBox from '@/components/DashboardBox';
import { Fragment } from 'react';

interface Row1Props {}

const Row1 = ({}: Row1Props) => {
  return (
    <Fragment>
      <DashboardBox bgcolor="#fff" gridArea="a"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
    </Fragment>
  );
};

export default Row1;
