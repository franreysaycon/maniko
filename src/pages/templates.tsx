import React from 'react';
import TemplateGuard from '../component/common/TemplateGuard';
import MonthCreate from "../component/MonthCreate";

const EditTemplate = () => (
    <TemplateGuard>
        <MonthCreate isEdit={true} />
    </TemplateGuard>
)

export default EditTemplate;
