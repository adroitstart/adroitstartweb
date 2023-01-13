import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'FIRST Robotics',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="center-content">
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400"> 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
            </p>
          </div>

          {/* What is FIRST? */}
          <div className="WhatIsFirst">
            {/* Text, left-aligned */}
            <div className="splitDivChild" style={{ width:"48%", float:"left", height: "400px" }}>
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style={{textAslign:"center"}}>
                What is FIRST?
              </h1>
              <div className="desc">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{textAslign:"left", textIndent: "50px"}} > 
                FIRST® was founded in 1989 by Dean Kamen to inspire young people to pursue education and career opportunities in STEM. Each year, FIRST® Robotics teams, along with the guidance of adult mentors, have six weeks from the first Saturday in January to design, build, and program a robot that is capable of playing a sports-based game. Additionally, aside from its STEM components, students are expected to develop service projects, locate community stakeholders, create a well-defined business plan, market the team, and develop a sustainable program.
                </p>
              </div>
            </div>

            <div className="splitDivChild" style={{ width:"2%", float:"left", height: "450px" }}>

            </div>

            {/* Video, right-aligned */}
            <div className="splitDivChild" style={{ width:"48%", float:"right", height: "450px"}}>
              <div style={{height:"75px"}}></div>
              {/* Video div */}
              <iframe width="550" height="315" src="https://www.youtube.com/embed/i1QyM9WTF18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>

          <div className="center-content">
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400"> 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
            </p>
          </div>

          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/gear.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8" id="robotics">
                    Mechanical
                    </h4>
                  <p className="m-0 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/pencil.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Design
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/terminal.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Coding
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/briefcase.png')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Business
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

            {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                   { <div className="features-tiles-item-image mb-16"> }
                    <Image
                      src={require('./../../assets/images/beaker.png')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Business
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div> */
            }

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/hardhat.png')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Safety
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>

          </div>
          <div style={{height:"25px"}}></div>
          <div className="center-content">
            <iframe width="760" height="415" src="https://www.youtube.com/embed/DasJsXyBh6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;