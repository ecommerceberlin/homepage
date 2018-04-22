import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import {translate} from '../i18n'
import compose from 'recompose/compose'


const styles = theme => ({

  root : {
    display: 'flex',
    alignItems : 'center',
    justifyContent : 'center',
  },

  button : {
    fontSize: theme.typography.pxToRem(25),
    // fontWeight: theme.typography.fontWeightRegular,
    // fontFamily : theme.typography.fontFamily,
    // lineHeight : theme.typography.pxToRem(23),
    padding: '12px 34px',
  }

})


const TicketDownload = ({code, classes, translate, label}) => {

  return (

    <div className={classes.root}>

      <Button
        href={`https://api.eventjuicer.com/v1/services/tickets/${code}`}
        download
        target="_blank"
        variant="raised"
        size="large"
        color="primary"
        className={classes.button}
      >
        {translate(label)}

     </Button>

    </div>

  )

}

TicketDownload.defaultProps = {
  label : "visitors.tickets.download"
}

const enhance = compose(
  withStyles(styles),
  translate
)

export default enhance(TicketDownload)