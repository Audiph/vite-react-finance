import DashboardBox from '@/components/DashboardBox';
import { Fragment } from 'react';

interface Row2Props {}

const Row2 = ({}: Row2Props) => {
  return (
    <Fragment>
      <DashboardBox bgcolor="#fff" gridArea="d"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="e"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="f"></DashboardBox>
    </Fragment>
  );
};

export default Row2;
