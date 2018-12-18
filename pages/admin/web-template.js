import React from 'react';
import AdminLayout from '../../components/layouts/admin.layout';
import AdminWebTemplateTable from '../../components/admin/admin-web-template/admin-web-template-table';

export default class AdminWebTemplate extends React.Component {
  render() {
    return (
      <AdminLayout>
        <AdminWebTemplateTable />
      </AdminLayout>
    );
  }
}
