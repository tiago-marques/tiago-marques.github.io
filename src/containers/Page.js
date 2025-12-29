import React from 'react';
import { DataProvider } from '../context/DataContext';
import Content from './Content';

const Page = () => {
  return (
    <DataProvider>
      <Content />
    </DataProvider>
  );
};

export default Page;
