import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  logo: {
    width: 44,
    height: 44,
    boxShadow: theme.shadows[4]
  },
  title: {
    marginLeft: theme.spacing.unit * 2,
    color: '#f5f5f5',
    fontWeight: 500
  }
});

const Logo = ({ classes }) => (
  <div className="row start-xs middle-xs col-xs-6">
    <Avatar src='/static/img/thedevs.png' alt="the devs logo" className={classes.logo} />
    <Typography type="headline" className={classes.title}>
      The Devs
    </Typography>
  </div>
);

Logo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Logo);