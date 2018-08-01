import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Hero from './Hero';
import EventInfo from './EventInfo';
import MyTypography from './MyTypography';
import compose from 'recompose/compose';

const styles = {
  container: {
    marginTop: -30,
    // width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const HeroCustom = ({ classes }) => (
  <Hero>
    <div className={classes.container}>
      <EventInfo
        items={[
          {
            icon: 'location',
            label: 'event.location',
            text: 'EXPO XXI, Prądzyńskiego 12/14'
          },

          {
            icon: 'date',
            label: 'event.date',
            text: '7 listopada 2018'
          },

          {
            icon: 'alarm',
            label: 'event.hours',
            text: '10:00-17:00'
          }
        ]}
        orientation="h"
        size="big"
        invert={true}
      />

      <MyTypography template="hero">
        Cały eHandel w jednym miejscu!
      </MyTypography>
    </div>
  </Hero>
);

export default withStyles(styles)(HeroCustom);
