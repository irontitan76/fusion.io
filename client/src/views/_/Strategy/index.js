import React, { Component } from 'react';
import { connect } from 'react-redux';

import Divider from '@material-ui/core/Divider';

import Footer from 'components/Footer';

import StrategyContent from './StrategyContent';
import StrategyHeader from './StrategyHeader';

class Strategy extends Component {
  render() {
    return <>
      <main>
        <StrategyHeader>The Fusion Strategy</StrategyHeader>
        <StrategyContent>

          <h3>
            We help our clients use technology to reshape industries and reduce
            the time to turn an idea into revolutionary value. In turn, they
            better business and lives.
          </h3>

          <Divider style={{
            backgroundColor: '#0074D9',
            height: 5,
            marginBottom: 30,
            width: 60
          }} />

          <p>
            Let that sink in. Process is one of the most important aspects of
            the business world. An ever-decreasing time to provide products and
            services to customers is essential to remain competitive. This not
            only includes the mechanisms to deliver a
            solution, but the build time of the hardware platforms and setup of
            the software stack sitting at their foundation. Our obligation is
            to research market trends, survey clients and customers, provide
            quality deliverables, return feedback to our consumers, and deliver
            superior solutions to our customers. How do we do overcome such a
            feat? By continually reforming and modernizing processes and
            systems.
          </p>

          <p>
            To define it, a solution is a bundle of products and services (and
            sometimes other solutions) tailored to customer needs. It has
            countless interdependencies all stemming from the inclusion of the
            parts that make the whole. To extrapolate: A solution consists of
            products that are made up of devices, which, in turn, enclose
            components. These components contain parts, and each part is
            comprised of pieces such as the billions of transistors in a
            processor. Transistors capture the state of the machine and the
            firmware, software, and processes that run on top of it.
            Additionally, a solution’s direction is defined and influenced by
            market movements, management decisions, time-sensitive objectives,
            outbound and inbound escalations, ordering requirements, and
            support or service offerings.
          </p>
        </StrategyContent>

        <StrategyHeader>Start</StrategyHeader>
        <StrategyContent>
          <p>
            The Fusion Strategy is a pathway to revamp industry procedures
            in place today for verticals set for growth in the coming years.
            With ever-increasing project acceleration and ever-expanding
            innovation in the world today, we must optimize the way we do
            business. It is a living document that consists of the following
            tenents:
          </p>

          <ul>
            <li>Teams</li>
          </ul>
        </StrategyContent>

        <StrategyHeader>Step 1</StrategyHeader>
        <StrategyContent>
          <p>

          </p>
        </StrategyContent>

        <StrategyHeader>Step 2</StrategyHeader>
        <StrategyContent>
          <p>

          </p>
        </StrategyContent>

        <StrategyHeader>Step 3</StrategyHeader>
        <StrategyContent>
          <p>

          </p>
        </StrategyContent>

      </main>
      <Footer />
    </>;
  }
}

const select = state => ({

});


export default connect(select)(Strategy);