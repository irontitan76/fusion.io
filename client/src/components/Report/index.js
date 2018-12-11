import React, { Component, Fragment } from 'react';
import filter from 'lodash.filter';
import orderBy from 'lodash.orderby';

import Footer from 'components/Footer';
import ReportContent from 'components/Report/Content';
import ReportHeader from 'components/Report/Header';
import ReportQuote from 'components/Report/Quote';

import { getReference, scrollTo } from 'common/functions';

class Report extends Component {
  constructor(props) {
    super(props);

    props.content.forEach(section => {
      if ( section.title ) {
        const reference = getReference(section.title);
        this[reference] = React.createRef();
      }

      if ( section.items ) {
        section.items.forEach(item => {
          if ( item.name ) {
            const reference = getReference(item.name);
            this[reference] = React.createRef();
          }
        });
      }
    });
  }

  renderTableofContentItems = items => {
    return items.map((item, key) => {
      let containerName = getReference(item.title);

      return <li key={key}>
        <span
          onClick={() => scrollTo(this, containerName)}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          {item.title}
        </span>
      </li>;
    });
  };

  renderTableOfContents = () => {
    const { content } = this.props;

    return content.map((section, key) => {

      if ( key === 0 || (section.level !== 0 && section.level !== 1)  ) {
        return null;
      }

      const children = filter(content, { parentId: section.id });
      const items = this.renderTableofContentItems(children);

      return <Fragment key={key}>
        <li>
          <span
            onClick={() => scrollTo(this, getReference(section.title))}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            {section.title}
          </span>
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
          divider={typeof section.divider === 'undefined' || section.divider}
          key={key}
          reference={this[reference]}
          variant={headingMap[section.level]}>
          {section.title}
        </ReportHeader>
      );

      let body = null;

      if ( section.content ) {
        body = section.content.map((item, key) => (
          this.renderContentItem(item, key))
        );
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