import React from 'react';
import TemplateGuard from '../component/common/TemplateGuard';
import MonthCreate from '../component/MonthCreate';

const EditTemplate = () => (
  <TemplateGuard>
    <MonthCreate isEdit />
  </TemplateGuard>
);

export default EditTemplate;
