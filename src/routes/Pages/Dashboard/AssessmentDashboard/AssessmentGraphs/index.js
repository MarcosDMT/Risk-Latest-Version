import React, { useEffect, useState } from 'react';
import GridContainer from '../../../../../@jumbo/components/GridContainer';
import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, makeStyles, Slide, Zoom } from '@material-ui/core';

import { alpha } from '@material-ui/core/styles';
import AssessmentTreeMap from './AssessmentTreeMap';
import {
  assessedTreeDataCat,
  assessedTreeDataDepartments,
  lossTypeRisksCatProgress,
  lossTypeRisksDeptProgress,
  riskControlTypeData,
  riskControlTypeDataCat,
  riskProbabilityData,
  riskProbabilityDataCat,
  riskTreeDataSections,
} from '../../dummyData';

import RisksTableView from '../RisksTables';
import { risksList } from '../../../RiskManagement/dummyData';
import LossTypeProbabilityChart from '../../GeneralDashboard/RisksGraphs/LossTypeProbabilityChart';
import ControlsChart from '../../GeneralDashboard/RisksGraphs/ControlsChart';

const useStyles = makeStyles(theme => ({
  headerItem: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
      paddingLeft: 8,
      paddingRight: 8,
    },
    color: alpha(theme.palette.common.white, 0.74),
    '&:not(:first-child)': {
      borderLeft: `1px solid ${alpha(theme.palette.common.white, 0.8)}`,
    },
    '& .MuiSvgIcon-root': {
      marginRight: 12,
    },
  },
  backdropContent: {
    color: alpha(theme.palette.common.white, 0.74),
    '& .form-control': {
      marginBottom: 20,
      '& label, & .MuiInput-formControl, & .MuiSelect-icon, & .MuiIconButton-root': {
        color: alpha(theme.palette.common.white, 0.74),
      },
      '& .MuiInput-underline:before, & .MuiInput-underline:after': {
        borderBottomColor: alpha(theme.palette.common.white, 0.74),
      },
    },
  },
  dialogRoot: {
    position: 'relative',
  },
  dialogHeader: {
    backgroundColor: theme.palette.primary.main,
  },
  dialogTitleRoot: {
    '& .MuiTypography-h6': {
      fontSize: 16,
      color: theme.palette.common.white,
    },
  },
  selectBoxRoot: {
    '&:before, &:after': {
      display: 'none',
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    },
  },
}));
const filterOptions = [
  { id: 1, label: 'Departments' },
  { id: 2, label: 'Control Categories' },
];

const RisksGraphs = () => {
  const [data, setData] = useState([]);
  const [probabilityData, setProbabiltyData] = useState([]);
  const [lossTypeData, setLossTypeData] = useState([]);
  const [controlTypeData, setControlTypeData] = useState([]);
  const [filters, setFilters] = useState(filterOptions);
  const [department, setDepartment] = useState({ id: '', name: '' });
  const [risks, setRisks] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(filters[0].label);
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();

  const fetchData = () => {
    if (currentFilter === filters[0].label) {
      //Set data by departments
      if (department.id !== '' && department.name !== '') {
        setData(riskTreeDataSections);
      } else {
        setData(assessedTreeDataDepartments);
        setLossTypeData(lossTypeRisksDeptProgress);
        setProbabiltyData(riskProbabilityData);
        setControlTypeData(riskControlTypeData);
      }
    } else if (currentFilter === filters[1].label) {
      //Set data by control Categories
      setData(assessedTreeDataCat);
      setLossTypeData(lossTypeRisksCatProgress);
      setProbabiltyData(riskProbabilityDataCat);
      setControlTypeData(riskControlTypeDataCat);
    }
  };
  // const fetchProbabilityData = () => {
  //   setProbabiltyData(riskProbabilityData);
  // };
  // const fetchLossTypeData = () => {
  //   setLossTypeData(riskLossTypeData);
  // };
  const fetchRisks = () => {
    setRisks(risksList);
  };
  const onCloseDialog = () => {
    setOpenDialog(false);
  };
  useEffect(() => {
    if (openDialog) {
      fetchRisks();
    } else {
      setRisks([]);
    }
  }, [openDialog]);
  useEffect(() => {
    fetchData();
  }, [currentFilter, department]);

  // useEffect(() => {
  //  // fetchProbabilityData();
  //  // fetchLossTypeData();
  // }, []);

  return (
    <React.Fragment>
      <GridContainer>
        <Grid item xs={12} md={12}>
          <AssessmentTreeMap
            {...{ data, classes, filters, currentFilter, setCurrentFilter, department, setDepartment, setOpenDialog }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <LossTypeProbabilityChart
            {...{ data: probabilityData, lossTypeData, classes, currentFilter, setCurrentFilter, filters }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <ControlsChart {...{ data: controlTypeData, classes, currentFilter, setCurrentFilter, filters }} />
        </Grid>
      </GridContainer>
      <ShowRisksTable {...{ currentFilter, openDialog, onCloseDialog, risks }} />
    </React.Fragment>
  );
};

const Transition = React.forwardRef((props, ref) => {
  return <Zoom ref={ref} {...props} unmountOnExit />;
});
const ShowRisksTable = props => {
  const { onCloseDialog, openDialog, currentFilter, risks } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={openDialog}
      fullWidth={true}
      maxWidth={'lg'}
      onClose={onCloseDialog}
      scroll={'paper'}
      TransitionComponent={Transition}>
      <div className={classes.dialogHeader}>
        <DialogTitle className={classes.dialogTitleRoot}>Risks by {currentFilter}</DialogTitle>
      </div>

      <DialogContent style={{ marginTop: 10 }}>
        <Box sx={{ width: '100%' }}>
          <RisksTableView {...{ risks }} />
        </Box>

        <Box display="flex" justifyContent="flex-end" mb={4}>
          <Button onClick={onCloseDialog} size="small">
            Cancel
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RisksGraphs;
