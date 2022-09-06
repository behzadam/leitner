import Box from '@mui/material/Box';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
  name: string;
}

const TabPanel = (props: TabPanelProps): JSX.Element => {
  const { children, value, index, name, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${name}-tabpanel-${index}`}
      aria-labelledby={`${name}-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default TabPanel;

