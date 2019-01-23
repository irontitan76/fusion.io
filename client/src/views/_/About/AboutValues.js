import React, { Component } from 'react';
import { injectIntl, intlShape } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import TabBar from 'components/TabBar';

const styles = () => ({});

class AboutValues extends Component {
  get values() {
    return [
      {
        description: 'By pushing the boundaries of technology through \
          questioning, self-motivation, and problem solving, you are an \
          innovator at heart. Each innovator at heart is relentless in his or \
          her journey from ideation to production. True innovators care not about \
          fame, power, or glory, but humanity.',
        icon: ['fal', 'heart'],
        label: 'Innovators at Heart',
        media: {
          alt: 'innovators at heart',
          src: '/images/innovator3.jpg',
          type: 'image',
        },
        subtitle: 'Approach innovation with a structured thought process',
        title: 'Innovators at Heart',
      },
      {
        description: 'Having a bias for action means you take action and get projects \
          and solutions completed efficiently. You spend more time executing, \
          learning, and improving. You encourage and require those around you to \
          think strategically but act quickly.',
        icon: ['fal', 'clock'],
        label: 'Bias for Action',
        media: {
          alt: 'bias for action',
          src: '/images/action.jpg',
          type: 'image',
        },
        subtitle: 'Anticipate and respond to opportunities to improve',
        title: 'Bias for Action',
      },
      {
        description: 'Challenge ideas so that better ones are borne from them. \
          This means that here at fusion, we understand that improvement can always \
          happen and our work is never done. Every person is open to challenges \
          and because of that, innovation is spurred.',
        icon: ['fal', 'flag'],
        label: 'Challenge Respectfully',
        media: {
          alt: 'challenge respectfully',
          src: '/images/challenge2.jpg',
          type: 'image',
        },
        subtitle: 'Generate ideas that challenge the status quo',
        title: 'Challenge Respectfully',
      },
      {
        description: 'Integrity is paramount at Fusion. We believe in compassion \
          and that is what brings people together, inspires people to win, and \
          propels humanity forward.',
        icon: ['fal', 'hands-heart'],
        label: 'Be Compassionate',
        media: {
          alt: 'be compassionate',
          src: '/images/compassion.jpg',
          type: 'image',
        },
        subtitle: 'Every moment is an opportunity to improve lives',
        title: 'Be Compassionate',
      },
      {
        description: 'We are a company full of caring, creative, brilliant people, \
          and we put our heart into everything we do. We value \
          effectiveness and will always improve upon improving.',
        icon: ['fal', 'handshake'],
        label: 'Collaborate Efficiently',
        media: {
          alt: 'collaborate efficiently',
          src: '/images/collaborate.jpg',
          type: 'image',
        },
        subtitle: 'Form meaningful relationships and produce results together',
        title: 'Collaborate Efficiently',
      },
    ];
  }

  render() {
    const { intl } = this.props;

    return (
      <Grid alignItems='center' container justify='center'>
        <TabBar name={intl.formatMessage({ id: 'about.values.title' })} values={this.values} />
      </Grid>
    );
  }
}

AboutValues.propTypes = {
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(AboutValues));