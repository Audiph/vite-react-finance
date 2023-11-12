import DashboardBox from '@/components/DashboardBox';
import { Fragment } from 'react';

interface Row3Props {}

const Row3 = ({}: Row3Props) => {
  return (
    <Fragment>
      <DashboardBox bgcolor="#fff" gridArea="g"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="h"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="i"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="j"></DashboardBox>
    </Fragment>
  );
};

export default Row3;
