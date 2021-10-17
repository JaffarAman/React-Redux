import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function FormButton({value}) {
  return (
    <Stack spacing={2} direction="row">
      <Button style={{width:"100%" , backgroundColor:"#09DEEA"}} type="submit"  variant="contained">{value}</Button>
    </Stack>
  );
}
