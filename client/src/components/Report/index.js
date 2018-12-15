import React, { Component, Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import filter from 'lodash.filter';
import includes from 'lodash.includes';
import orderBy from 'lodash.orderby';

import Footer from 'components/Footer';
import ReportContent from 'components/Report/Content';
import ReportHeader from 'components/Report/Header';
import ReportQuote from 'components/Report/Quote';

import { getReference } from 'common/functions';

class Report extends Component {
  renderTableofContentItems = items => {
    return items.map((item, key) => {
      let containerName = getReference(item.title);

      return <li key={key}>
        <Link
          scroll={el => el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })}
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

      if ( key === 0 || (section.level !== 0 && section.level !== 1)  ) {
        return null;
      }

      const children = filter(content, { parentId: section.id });
      const items = this.renderTableofContentItems(children);

      return <Fragment key={key}>
        <li>
          <Link
            scroll={el => el.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })}
            to={`#${getReference(section.title)}`}
            style={{
              color: 'black',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}>
            {section.title}
          </Link>
        </li>
        <ol>{items}</ol>
        <br />
      </Fragment>;
    });
  };

  renderContentItem = (content, key) => {
    switch ( content.type ) {
      case 'html':
        return <ReportContent key={key}>
          <div dangerouslySetInnerHTML={{
            __html: content.body.replace(/[\\]/g, '')
          }} />
        </ReportContent>;
      case 'ol':
        return null;
      case 'quote':
        return <ReportQuote
          author={content.author}
          key={key}
          quote={content.quote} />;
      case 'toc':
        return <ReportContent key={key}>
          <ol>{this.renderTableOfContents()}</ol>
        </ReportContent>;
      case 'md':
        return <ReportContent
          body={content.body}
          key={key} />;
      case 'p':
      default: {
        return <ReportContent key={key}>
          {content.body.replace(/[\\]/g, '')}
        </ReportContent>;
      }
    }
  };

  renderContent = () => {
    const { content } = this.props;

    return orderBy(content, ['order'], ['asc']).map((section, key) => {
      const headingMap = {
        0: 'h4',
        1: 'h4',
        2: 'h5',
        3: 'h6',
      };
      const reference = getReference(section.title);

      const article = (
        <ReportHeader
          divider={includes([0, 1, 2], section.level)}
          id={reference}
          key={key}
          variant={headingMap[section.level]}>
          {section.title}
        </ReportHeader>
      );

      let body = null;

      if ( section.content && Object.keys(section.content).length > 0 && section.content.body) {
        body = this.renderContentItem(section.content, 0);
      } else if ( section.content && section.content.length ) {
        body = section.content.map((item, key) => (
          this.renderContentItem(item, key))
        );
      }

      if ( section.order === 0 ) {
        body = [ body, this.renderContentItem({ type: 'toc' }, 1) ];
      }

      return <Fragment key={key}>
        {article}
        {body}
      </Fragment>;
    });



  };

  render() {
    return <>
      <main>
        {this.renderContent()}
      </main>
      <Footer />
    </>;
  }
}

export default Report;