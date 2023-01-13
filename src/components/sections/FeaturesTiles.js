import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import FeaturesSplit from './FeaturesSplit';
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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />

          <div className="center-content">
            <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400"> 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
            </p>
          </div>

          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/gear.png')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
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
                    <Image
                      src={require('./../../assets/images/pencil.png')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
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
                    <Image
                      src={require('./../../assets/images/terminal.png')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
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
                    <Image
                      src={require('./../../assets/images/briefcase.png')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
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

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                    <Image
                      src={require('./../../assets/images/hardhat.png')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
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

          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800" style={{textAlign: "center"}}>
            <iframe style={{margin:"auto"}} width="100%" height="500" src="https://www.youtube.com/embed/DasJsXyBh6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;