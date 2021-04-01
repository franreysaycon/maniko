import React from 'react';
import TemplateGuard from '../component/common/TemplateGuard';
import TransactionList from '../component/TransactionList';

const Transactions = () => (
  <TemplateGuard>
    <TransactionList />
  </TemplateGuard>
);

export default Transactions;
