import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Footer from 'components/Footer';

import StandardContent from './StandardContent';
import StandardHeader from './StandardHeader';
import StandardQuote from './StandardQuote';

class Standard extends Component {
  constructor() {
    super();

    const references = [
      'atomicity',
      'autonomous',
      'brand',
      'campaignflow',
      'communication',
      'deliverymechanisms',
      'designsystem',
      'developmentworkflow',
      'divisions',
      'hierarchy',
      'hiring',
      'paradigms',
      'process',
      'onboarding',
      'projectmanagement',
      'releasecadence',
      'structure',
      'team',
      'training',
    ];

    references.forEach((item) => this[item] = React.createRef());
  }

  scrollTo = name => {
    if ( !this[name] ) return null;
    window.scroll({ top: this[name].current.offsetTop, behavior: 'smooth' });
  };

  renderToc = () => {
    const toc = [
      {
        title: 'Structure',
        items: [
          'Divisions',
          'Hierarchy',
          'Team',
          'Hiring',
          'Onboarding',
          'Training'
        ],
      },
      {
        title: 'Process',
        items: [
          'Communication',
          'Development Workflow',
          'Delivery Mechanisms',
          'Project Management',
          'Release Cadence',
          'Campaign Flow',
        ],
      },
      {
        title: 'Paradigms',
        items: [
          'Atomic Design',
          'Autonomous',
          'Isomorphism',
          'Neural Network',
          'Organic',
          'Ethos',
        ],
      },
      {
        title: 'Brand',
        items: [
          'Color Scheme',
          'Typography',
          'Voice',
          'Capitalization',
        ]
      }
    ];

    return toc.map((section, key) => {

      const items = section.items.map((item, key) => {
        let containerName = item.toLowerCase().trim().replace(' ', '');
        return <li key={key}>
          <span
            onClick={() => this.scrollTo(containerName)}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            {item}
          </span>
        </li>;
      });

      return <Fragment key={key}>
        <li>
          <span
            onClick={() => this.scrollTo(section.title.toLowerCase().trim().replace(' ', ''))}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            {section.title}
          </span>
        </li>
        <ol>{items}</ol>
        <br />
      </Fragment>
    });
  };

  renderSections = () => {
    const sections = [
      { title: 'The Fusion Standard', content: 'Test', },
      { title: { name: 'The Fusion Standard' }, content: 'Test 2', }
    ];

    return sections.map((section, key) => {
      let header = null;
      let content = null;

      if ( typeof section.title === 'string' ) {
        header = <StandardHeader>{section.title}</StandardHeader>;
      } else {
        header = <StandardHeader
          divider={section.title.divider}
          variant={section.title.variant}>
          {section.title.name}
        </StandardHeader>;
      }

      if ( Object.keys(section.content).length > 0 ) {
        content = <StandardContent>{section.content}</StandardContent>;
      } else {
        content = <StandardContent>{section.content}</StandardContent>;
      }

      return <Fragment key={key}>
        {header}
        {content}
      </Fragment>;
    })
  };

  render() {
    return <>
      <main>
        <StandardHeader>The Fusion Standard</StandardHeader>
        <StandardQuote author='Vance Havner' quote='The vision must be followed
          by the venture. It is not enough to stare up the steps - we must step
          up the stairs.' />
        <StandardContent>
          <p>
            In order to establish a moral business with a collaborative
            culture, flat organizational structure, flexible career
            pathways, explicit process, and overarching brand, Fusion Industries
            establishes <u>The Fusion Standard</u> as our living and extensible
            constitution and wields this constitution to determine
            courses of action in business commencements and transformations.
          </p>
          <ol>
            {this.renderToc()}
          </ol>
        </StandardContent>

        <StandardHeader
          reference={this.structure}>
          Structure
        </StandardHeader>

        <StandardHeader
          reference={this.divisions}
          variant='h5'>
          Divisions
        </StandardHeader>
        <StandardContent>
          <p>
            All conventions, standards, guidelines, and values herein defined
            shall be vested in Fusion Industries, which shall consist of
            multiple divisions, or organizations, all focused on
            a <u>single</u> industry vertical.
          </p>

          <p>
            Each division adopts the hierarchy as defined in the next
            section. Every divisional president is part of the executive team at
            Fusion Industries wherein the team determines company direction and
            strategy by logical reasoning and voting.
          </p>

          <p>
            Of note, the division of Fusion Technology is the governing body
            for the technology stack used throughout the entire company with the
            exception of an venture or artifical intelligence arm. It has
            the purpose of defining the technical architecture of web
            applications, software design, and development workflows so that
            cohesiveness, or fusion, between divisions is realized.
          </p>
        </StandardContent>

        <StandardHeader
          reference={this.hierarchy}
          variant='h5'>
          Hierarchy
        </StandardHeader>
        <StandardContent>
          <p>
            At Fusion, we flip the organizational structure on its
            head. The Operating Core - those that directly influence offerings -
            are at the pyramid's apex, because we believe leaders are
            foundational. In other words, leaders guide their team with
            encouragement, give <i> constructive</i> feedback, make decisions,
            take responsibility, and are tasked with advancing and sharpening
            their team.
          </p>

          <p>
            The following defines the three main groups of each Fusion division
            creating a "flattened" structure.
          </p>

          <ol>
            <li>
              <b>Operating Core</b> - Those that directly create or deliver a
              solution or service.
            </li>
            <li>
              <b>Administrators</b> - Individuals focused on team management who
              collaborate cross-team or cross-division.
            </li>
            <li>
              <b>Executives</b> - The company and division visionaries
              that provide overall direction and strategy.
            </li>
          </ol>
        </StandardContent>

        <StandardHeader
          reference={this.team}
          variant='h5'>
          Team
        </StandardHeader>

        <StandardHeader
          divider={false}
          variant='h6'>
          Executive Leadership
        </StandardHeader>
        <StandardContent>
          <p>
            The executive team is composed of the President of each division
            in addition to the following roles and responsibilities:
          </p>

          <ul>
            <li><b>Chief Executive Officer</b> - </li>
            <li><b>Chief Technology Officer</b> - </li>
            <li><b>Chief Finance Officer</b> - </li>
            <li><b>Chief Communications Officer</b> - </li>
            <li><b>Chief People Officer</b> - </li>
          </ul>

          <p>
            To soften the iron law of oligarchy, or inevitable tendency of
            decisions being made by a select few, an internal performance score
            voted upon by employees for their chain of command will occur every
            quarter. This does not remove the oligarchial construct but instead
            is a check for those with decision-making power.
          </p>

          <ul>
            <li>
              If a performance score of less than 66.67% is given to a leader
              after 1 quarter, he or she will report to the Executive Team for
              a plan of action to remediate.
            </li>

            <li>
              If a performance score of less than 66.67% is given to a leader for
              3 <u>consecutive</u> quarters, he or she will either be demoted or
              removed from the organization altogether.
            </li>
          </ul>

        </StandardContent>

        <StandardHeader
          divider={false}
          variant='h6'>
          Administrators
        </StandardHeader>
        <StandardContent>
          <p>
            Administrators are focused on the management of the team including
            technical and leadership pathways.
          </p>

          <ul>
            <li>
              <b>Leader</b> – Responsible for overseeing and leading the
              work of his or her team. He or she is also responsible for
              planning and maintaining work systems, procedures, and policies
              that enable and encourage the optimum performance of team
              members.
            </li>
            <li>
              <b>Project Leader</b> – Project Leaders’ roles are
              multi-faceted and span teams. They are responsible for
              communicating deadlines and requirements for deliverables to the
              teams involved in an offering’s release or campaign’s strategy.
            </li>
            <li>
              <b>Architect</b> – The visionary who organizes the
              development effort and is ultimately responsible for the
              blueprint of the solution, campaign, or offering through the
              conversion of requirements into architectural designs.
            </li>
            <li>
              <b>Tactician</b> – The Tactician is responsible for the release
              cadence by ensuring all deliverables are completed, requirements
              are communicated, and issues are escalated.
            </li>
          </ul>
        </StandardContent>


        <StandardHeader
          divider={false}
          variant='h6'>
          Operating Core
        </StandardHeader>
        <StandardContent>
          <p>
            Team roles are general and applied to each realm of business for
            simpler advancment and career pathway traversal. Individual success
            and career advancement comes from a <i> breadth</i> of knowledge
            comprising each area of a product and/or solution. Note that the
            responsibilities of each role are living and extensible, but each
            role must be well-defined at any given time. The individuals filling
            these roles are expected to be the subject matter experts in
            team-defined topics, and must report changes to the appropriate
            owners.
          </p>

          <ul>
            <li>
              <b>Associate</b> - Individuals that are at or near the beginning
              of their career within their respective vertical.<br/>
              Examples: Associate Software Engineer, Associate Marketing Analyst
            </li>
            <li>
              <b>&lt;Position&gt;</b> - Exhibit knowledge in fundamental
              concepts for his or her area of focus. They have innovative minds
              and offer efficient solutions.<br/>
              Examples: Cloud Engineer, Finance Analyst
            </li>
            <li>
              <b>Senior</b> - Advanced understanding of his or her area of
              focus who offer more efficient solutions to problems.<br/>
              Examples: Senior Software Engineer, Senior Designer
            </li>
            <li>
              <b>Lead</b> - Grasp the entirety of an offering, solve problems,
              and are able to teach and relay any necessary information to
              his or her teammates and managers.<br/>
              Examples: Staff Network Engineer, Staff Marketing Analyst
            </li>
            <li>
              <b>Principal</b> - Have vision far and beyond others on his or
              her team. They can easily switch contexts from low-level to
              high-level problems and relay information efficiently.<br/>
              Examples: Principal Software Engineer, Principal Designer
            </li>
          </ul>
        </StandardContent>

        <StandardHeader
          divider={false}
          variant='h6'>
          Career Pathways
        </StandardHeader>
        <StandardContent>
          <p>
            Each employee is on either a Technical Career Path ("TCP") or
            Leadership Career Path ("LCP"). Individuals who express interest in
            expanding his or her career by increasing expertise within their
            area of focus follow the TCP. Whereas, individuals who
            convey a passion for leading <u>people</u> are inducted into the
            LCP.
          </p>

          <p>
            Both career paths contain courses and certifications for an
            employee to gain during his tenure at the company. As an employee
            progresses in the coursework, is given good reviews from his or her
            team and manager, promotions may be given. <b>Note that promotions
            concern title changes and do not directly influence compensation
            increases.</b>
          </p>
        </StandardContent>

        <StandardHeader
          reference={this.hiring}
          variant='h5'>
          Hiring
        </StandardHeader>
        <StandardContent>
          <p>
            Fusion hires individuals that have high levels of perception,
            abstract reasoning, pattern recognition, spatial orientation, and
            analytical thinking. We place the highest value on a person's
            adaptability, capability, motivation, and enthusiasm rather than
            knowing the subject over the course of a few interviews.
          </p>

          <p>
            Nevertheless, the interview process must challenge the candidate
            so that Fusion garners the brightest individuals that can produce
            the most value over the shortest amounts of time. A candidate is
            expected to have fundamental understanding of his or her area of
            focus as well as analyze and solve problems.
          </p>

          <p>
            In lieu of the notions above, <u>The Fusion Conversation</u> is
            created to define interview process flow and content.
          </p>
        </StandardContent>

        <StandardHeader
          divider={false}
          variant='h6'>
          The Fusion Conversation
        </StandardHeader>
        <StandardContent>
          <ol>
            <li>Recruiter Phone Screen (compensation & clarifications)</li>
            <li>Online Assessment</li>
            <li>Video Interview (technical & behavioral)</li>
            <li>Onsite Interview (technical & behavioral)</li>
            <li>Offer or Rejection</li>
          </ol>
        </StandardContent>

        <StandardHeader
          divider={false}
          variant='h6'>
          Compensation
        </StandardHeader>
        <StandardContent>
          <p>
            Compensation is one of the most difficult aspects for companies
            to define and navigate. There are countless variables to take into
            account including regional location, cost of living, benefits, years
            of experience, candidate motivation, title differences, and
            negotiating factors. All of which affects the bottom line. Because
            of this, Fusion's salary scale for any given, non-executive position
            is defined as follows. Executive positions are calculated
            differently.
          </p>

          <ul>
            <li><b>IA</b> - Industry Average</li>
            <li><b>RE</b> - <i>Relevant</i> Experience (in months)</li>
            <li><b>GI</b> - Geography Index</li>
            <li><b>CS</b> - Conversation Score</li>
          </ul>

          <p>
            <i>Equation TBD</i>
          </p>
        </StandardContent>

        <StandardHeader
          reference={this.onboarding}
          variant='h5'>
          Onboarding
        </StandardHeader>
        <StandardContent>
          <p>
            Onboarding is an essential part of a business. Companies must
            adopt a robust and efficient process otherwise increase a
            company's turnover rate, destroy a good culture, or decelerate
            development. Mentorship and apprenticeship is also necessary since
            companies should first cultivate a collaborative atmosphere.
          </p>

          <p>
            <u>The Fusion Synthesis</u> defines a series of steps for an
            individual to acclimate to their team, development workflows,
            The Fusion Standard, and the company overall. The steps are
            respective of the organization, team, and position the new hire is
            entering into.
          </p>
        </StandardContent>


        <StandardHeader
          reference={this.training}
          variant='h5'>
          Training
        </StandardHeader>
        <StandardContent>
          <p>
            Regular training ensures employees stay on top of the latest trends,
            technology, and business principles. With this in mind,
            <u>The Fusion Curriculum</u> is a series of courses tailored for
            the various positions within the company. This is also used in
            determining title.
          </p>
        </StandardContent>

        <StandardHeader
          reference={this.process}>
          Process
        </StandardHeader>

        <StandardHeader
          reference={this.communication}
          variant='h5'>
          Communication
        </StandardHeader>
        <StandardContent>

        </StandardContent>

        <StandardHeader
          reference={this.developmentworkflow}
          variant='h5'>
          Development Workflow
        </StandardHeader>
        <StandardContent>

        </StandardContent>

        <StandardHeader
          reference={this.deliverymechanisms}
          variant='h5'>
          Delivery Mechanisms
        </StandardHeader>
        <StandardContent>

        </StandardContent>


        <StandardHeader
          reference={this.projectmanagement}
          variant='h5'>
          Project Management
        </StandardHeader>
        <StandardContent>
          <p>
            In order to anticipate the phases in a solution pipeline and best
            handle the errasticism in a release, businesses must track the
            estimated hours that each person is committed to and ensure
            deliverables are being completed. Agile methodologies are crucial
            for organizations to adjust smoothly to rapidly-changing
            environments, especially those with business pressures that drive
            teams toward faster release cadences. The benefits of a team
            following a Scrum framework extend to customers, vendors,
            development teams, product managers, and executives. For those
            internal consumers, it offers high visibility into the state of a
            development project and the areas of focus needed. For customers,
            it provides a more qualitative solution leading to their overall
            satisfaction. The expectation is this: report against your progress
            daily, inform proper individuals of defects when they have been
            vetted and verified as an issue, close down defects, and
            participate in Agile meetings by proposing ideas and resolutions.
            Remember, Agile encourages rapid and flexible response to change.
            Embrace it.
          </p>
        </StandardContent>


        <StandardHeader
          reference={this.releasecadence}
          variant='h5'>
          Release Cadence
        </StandardHeader>
        <StandardContent>

        </StandardContent>


        <StandardHeader
          reference={this.campaignflow}
          variant='h5'>
          Campaign Flow
        </StandardHeader>
        <StandardContent>

        </StandardContent>

        <StandardHeader
          reference={this.paradigms}>
          Paradigms
        </StandardHeader>

        <StandardHeader
          reference={this.campaignflow}
          variant='h5'>
          Atomic Design
        </StandardHeader>
        <StandardContent>

        </StandardContent>

        <StandardHeader
          reference={this.campaignflow}
          variant='h5'>
          Autonomous
        </StandardHeader>
        <StandardContent>

        </StandardContent>

        <StandardHeader
          reference={this.campaignflow}
          variant='h5'>
          Isomorphism
        </StandardHeader>
        <StandardContent>

        </StandardContent>

        <StandardHeader
          reference={this.campaignflow}
          variant='h5'>
          Neural Networks
        </StandardHeader>
        <StandardContent>

        </StandardContent>

        <StandardHeader
          reference={this.campaignflow}
          variant='h5'>
          Organic
        </StandardHeader>
        <StandardContent>

        </StandardContent>

        <StandardHeader
          reference={this.campaignflow}
          variant='h5'>
          Ethos
        </StandardHeader>
        <StandardContent>

        </StandardContent>


        <StandardHeader
          reference={this.brand}>
          Brand
        </StandardHeader>

      </main>
      <Footer />
    </>;
  }
}

const select = state => ({});

export default connect(select)(Standard);