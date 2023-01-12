import React from 'react';
// import {useState} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
// import Modal from '../elements/Modal';

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
  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }  

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
    title: 'Robotics',
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
                  Fostering technical and vocational skills amongst students
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
                    Programming
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
                      src={require('./../../assets/images/beaker.png')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  {/* </div> */}
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Marketing
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
                      src={require('./../../assets/images/beaker.png')}
                      alt="Features tile icon 05"
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

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  {/* <div className="features-tiles-item-image mb-16"> */}
                    <Image
                      src={require('./../../assets/images/beaker.png')}
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
        </div>
      </div>
      {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://www.youtube.com/watch?v=DasJsXyBh6A&t=63s&ab_channel=ThePioneers"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/robot.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/watch?v=DasJsXyBh6A&t=63s&ab_channel=ThePioneers"
            videoTag="iframe" /> */}
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;