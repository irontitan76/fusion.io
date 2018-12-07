import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import filter from 'lodash.filter';
import orderBy from 'lodash.orderby';

import Footer from 'components/Footer';

import StandardContent from './StandardContent';
import StandardHeader from './StandardHeader';
import StandardQuote from './StandardQuote';

import { loadStandards, unloadStandards } from 'actions/standards';

import { standards } from './content';

class Standard extends Component {
  constructor(props) {
    super(props);

    standards.forEach(section => {
      if ( section.title ) {
        const reference = this.getReference(section.title);
        this[reference] = React.createRef();
      }

      if ( section.items ) {
        section.items.forEach(item => {
          if ( item.name ) {
            const reference = this.getReference(item.name);
            this[reference] = React.createRef();
          }
        });
      }
    });
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(loadStandards());
  };

  componentWillUnmount = () => {
    const { dispatch } = this.props;
    dispatch(unloadStandards());
  };

  getReference = referenceString => {
    return referenceString.toLowerCase().split(' ').join('');
  };

  scrollTo = name => {
    if ( !this[name] ) return null;
    window.scroll({ top: this[name].current.offsetTop, behavior: 'smooth' });
  };

  renderTableofContentItems = items => {
    return items.map((item, key) => {
      let containerName = this.getReference(item.title);

      return <li key={key}>
        <span
          onClick={() => this.scrollTo(containerName)}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          {item.title}
        </span>
      </li>;
    });
  };

  renderTableOfContents = () => {
    // const { standards } = this.props;

    return standards.map((section, key) => {

      if ( key === 0 || (section.level !== 0 && section.level !== 1)  ) {
        return null;
      }

      const children = filter(standards, { parentId: section.id });
      const items = this.renderTableofContentItems(children);

      return <Fragment key={key}>
        <li>
          <span
            onClick={() => this.scrollTo(this.getReference(section.title))}
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
        return <StandardContent key={key}>
          <div dangerouslySetInnerHTML={{
            __html: content.body.replace(/[\\]/g, '')
          }} />
        </StandardContent>;
      case 'ol':
        return null;
      case 'quote':
        return <StandardQuote
          author={content.author}
          key={key}
          quote={content.quote} />;
      case 'toc':
        return <StandardContent key={key}>
          <ol>{this.renderTableOfContents()}</ol>
        </StandardContent>;
      case 'p':
      default: {
        return <StandardContent key={key}>
          {content.body.replace(/[\\]/g, '')}
        </StandardContent>;
      }
    }
  };

  renderContent = () => {
    // const { standards } = this.props;

    return orderBy(standards, ['order'], ['asc']).map((section, key) => {
      const headingMap = {
        0: 'h4',
        1: 'h4',
        2: 'h5',
        3: 'h6',
      };
      const reference = this.getReference(section.title);

      const article = (
        <StandardHeader
          divider={typeof section.divider === 'undefined' || section.divider}
          key={key}
          reference={this[reference]}
          variant={headingMap[section.level]}>
          {section.title}
        </StandardHeader>
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

const select = state => ({
  // standards: state.standards.items
});

export default connect(select)(Standard);