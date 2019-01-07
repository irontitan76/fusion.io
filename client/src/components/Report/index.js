import React, { Component, Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import filter from 'lodash.filter';
import includes from 'lodash.includes';
import orderBy from 'lodash.orderby';

import Footer from 'components/Footer';
import ReportContent from 'components/Report/Content';
import ReportHeader from 'components/Report/Header';

import { getReference } from 'common/functions';

const scroll = el => el.scrollIntoView({ behavior: 'smooth', block: 'start' });

class Report extends Component {
  renderTableofContentItems = items => {
    return items.map((item, key) => {
      let containerName = getReference(item.title);

      return <li key={key}>
        <Link
          scroll={scroll}
          to={`#${containerName}`}
          style={{
            color: 'black',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}>
          {item.title}
        </Link>
      </li>;
    });
  };

  renderTableOfContents = () => {
    const { content } = this.props;

    return orderBy(content, ['order'], ['asc']).map((section, key) => {
      const isValidLevel = section.level !== 0 && section.level !== 1;

      if ( key === 0 || isValidLevel  ) {
        return null;
      }

      const children = filter(content, { parentId: section.id });
      const items = this.renderTableofContentItems(children);

      return <Fragment key={key}>
        <li>
          <Link
            scroll={scroll}
            to={`#${getReference(section.title)}`}
            style={{
              color: 'black',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}>
            {section.title}
          </Link>
          <ol style={{ paddingBottom: 20 }}>{items}</ol>
        </li>
      </Fragment>;
    });
  };

  renderContentItem = (content) => {
    switch ( content.type ) {
      case 'toc':
        return <ReportContent key={1}>
          <ol>{this.renderTableOfContents()}</ol>
        </ReportContent>;
      case 'md':
      default:
        return <ReportContent body={content.body} key={0} />;
    }
  };

  renderContent = () => {
    const { content } = this.props;

    const headingMap = {
      0: 'h1',
      1: 'h1',
      2: 'h2',
      3: 'h3',
      4: 'h4',
      5: 'h5',
      6: 'h6',
    };

    return orderBy(content, ['order'], ['asc']).map((section, key) => {
      const reference = getReference(section.title);

      const article = (
        <ReportHeader
          divider={includes([0, 1, 2], section.level)}
          id={reference}
          variant={headingMap[section.level]}>
          {section.title}
        </ReportHeader>
      );

      let body = this.renderContentItem(section.content);;
      if ( section.order === 0 ) {
        body = [ body, this.renderContentItem({ type: 'toc' }) ];
      }

      return <Fragment key={key}>
        {article}
        {body}
      </Fragment>;
    });
  };

  render() {
    return <>
      <main style={{ minHeight: 'calc(100vh + 150px)' }}>
        {this.renderContent()}
      </main>
      <Footer />
    </>;
  }
}

export default Report;