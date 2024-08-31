import React, { useState, useEffect } from 'react';
import styles from './SnackBar.module.css';

const Snackbar = ({ message, duration = 4400, type = 'success' }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return (
        isVisible && (
            <div 
            className={`${styles.snackbar} ${type === 'error' ? styles.snackbarError : styles.snackbarSuccess}`}
            >
                {message}
            </div>
        )
    );
};

export default Snackbar;
