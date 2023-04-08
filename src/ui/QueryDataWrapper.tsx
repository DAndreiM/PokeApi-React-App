import React from "react";
import styles from "./QueryDataWrapper.module.css";

const QueryDataWrapper: React.FC<{
  children: React.ReactNode;
  error: any;
  isLoading: boolean;
}> = ({ children, error, isLoading }) => {
  return (
    <>
      {!isLoading && error && (
        <p className={styles.infoText}>There was an error loading data</p>
      )}
      {isLoading && !error && (
        <p className={styles.infoText}>Loading data...</p>
      )}
      {!isLoading && !error && children}
    </>
  );
};

export default QueryDataWrapper;
