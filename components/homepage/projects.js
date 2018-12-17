import React from 'react';
import { connect } from 'react-redux';
import { GET_TEMPLATES, SELECT_TEMPLATE_CATEGORY } from '../../reducers/template';
import { WEB_CATEGORY } from '../../commons/enum';

function mapStateToProps(state) {
  return {
    selectedTemplateCategory: state.template.selectedTemplateCategory,
    listTemplates: state.template.listTemplates,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemplates: () => dispatch({ type: GET_TEMPLATES }),
    selectTemplateCategory: cat => dispatch({ type: SELECT_TEMPLATE_CATEGORY, category: cat }),
  };
}

class Project extends React.Component {
  componentDidMount() {
    console.log(this.props.listTemplates);
    // this.props.getTemplates();
  }

  renderCategoryItem = item => {
    const { selectedTemplateCategory, selectTemplateCategory } = this.props;
    return (
      <a
        className={`filter btn btn-common btn-effect ${selectedTemplateCategory === item &&
          'active'}`}
        data-filter={`.${item.toLowerCase()}`}
        onClick={() => selectTemplateCategory(item)}
      >
        {WEB_CATEGORY[item]}
      </a>
    );
  };

  render() {
    const { selectedTemplateCategory, selectTemplateCategory } = this.props;
    const templateCategories = Object.keys(WEB_CATEGORY);
    return (
      <section id="portfolios" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Kho giao diện</h2>
            <p className="section-subtitle">
              Kho giao diện khổng lồ được cập nhật thường xuyên với hơn 200+ mẫu website thích hợp
              cho doanh nghiệp của bạn
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="controls text-center">
                <a
                  className={`filter btn btn-common btn-effect ${selectedTemplateCategory === '' &&
                    'active'}`}
                  data-filter="all"
                  onClick={() => selectTemplateCategory('')}
                >
                  Tất cả
                </a>
                {templateCategories.map(this.renderCategoryItem)}
              </div>
            </div>
          </div>

          <div id="portfolio" className="row">
            <div className="col-lg-4 col-md-6 col-xs-12 mix development print">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="img/portfolio/img-1.jpg" alt="" />
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/portfolio/img-1.jpg">
                            <i className="lni-zoom-in item-icon" />
                          </a>
                        </div>
                        <a href="#">View Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix design print">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="img/portfolio/img-2.jpg" alt="" />
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/portfolio/img-2.jpg">
                            <i className="lni-zoom-in item-icon" />
                          </a>
                        </div>
                        <a href="#">View Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix development">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="img/portfolio/img-3.jpg" alt="" />
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/portfolio/img-3.jpg">
                            <i className="lni-zoom-in item-icon" />
                          </a>
                        </div>
                        <a href="#">View Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix development design">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="img/portfolio/img-4.jpg" alt="" />
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/portfolio/img-4.jpg">
                            <i className="lni-zoom-in item-icon" />
                          </a>
                        </div>
                        <a href="#">View Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix development">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="img/portfolio/img-5.jpg" alt="" />
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/portfolio/img-5.jpg">
                            <i className="lni-zoom-in item-icon" />
                          </a>
                        </div>
                        <a href="#">View Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 mix print design">
              <div className="portfolio-item">
                <div className="shot-item">
                  <img src="img/portfolio/img-6.jpg" alt="" />
                  <div className="single-content">
                    <div className="fancy-table">
                      <div className="table-cell">
                        <div className="zoom-icon">
                          <a className="lightbox" href="img/portfolio/img-6.jpg">
                            <i className="lni-zoom-in item-icon" />
                          </a>
                        </div>
                        <a href="#">View Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);
