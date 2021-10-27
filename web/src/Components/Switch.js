import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SwitchesSize({ checkHandle, setCheckHandle }) {

    return (
    <div className="mr-auto">
      <Switch {...label} checked={checkHandle} onChange={()=>setCheckHandle(!checkHandle)} size="small" />
        <small>Private</small>
    </div>
  );
}