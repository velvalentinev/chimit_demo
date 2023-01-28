import React from 'react';
import {Dashboard} from '../containers'
import styles from './styles.module.scss';

const App = () => {
    return (
        <div className={styles.app}>
            <Dashboard/>
        </div>
    );
}

export default App;
