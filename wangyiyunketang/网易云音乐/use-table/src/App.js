import React from 'react';
import './styles.css';
import TrackViewer from './TrackViewer';
import config from './config';
import data from './data';

const rows = JSON.parse(data);

export default function App() {
    return <TrackViewer {...config} rows={rows} />;
}
