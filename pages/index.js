import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layouts/main.layout';
import MainSearch from '../components/homepage/main-search';
import ServiceMainPage from '../components/homepage/services';
import WebTemplates from '../components/homepage/web-templates/web-templates';
import ClientsMainPage from '../components/homepage/clients';
import { TOGGLE_LOADER } from '../reducers/common';

function mapDispatchToProps(dispatch) {
  return {
    hideLoader: () => dispatch({ type: TOGGLE_LOADER, show: false }),
  };
}

class Index extends React.Component {
  componentDidMount() {
    this.props.hideLoader();
  }

  render() {
    return (
      <Layout>
        <MainSearch />
        <ServiceMainPage />
        <WebTemplates />
        <ClientsMainPage />
      </Layout>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Index);
