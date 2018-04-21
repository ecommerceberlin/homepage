import React from 'react'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import compose from 'recompose/compose'

import Presentation from './Presentation'
import Presenter from './Presenter'
import PresentationLabel from './PresentationLabel'

import { dialogShow } from './redux/actions'
import { getParticipantCdn } from '../helpers'

import ScheduleItemPresenter from './ScheduleItemPresenter'

const styles = theme => ({

  item : {
    cursor : 'pointer'
  }

})


const getFullName = (data) => `${data.fname} ${data.lname}`
const getFullJobInfo = (data) => `${data.position} @ ${data.cname2}`



const ScheduleItem = ({data, selected, classes, dialogShow}) => {

  return (

    <div className={classes.item} onClick={() => dialogShow({
      title: <PresentationLabel time={data.presentation_time} venue={data.presentation_venue} />,
      content : <div>
                  <Presentation  title={data.presentation_title} description={data.presentation_description} />
                  <Presenter data={data} />
                </div>,
      buttons : []
    }) }>

      <PresentationLabel time={data.presentation_time} venue={data.presentation_venue} />
      <Presentation  title={data.presentation_title} description={data.presentation_description} compact={true} />
      <ScheduleItemPresenter
          title={ getFullName(data) }
          text={ getFullJobInfo(data) }
          imageSrc={ getParticipantCdn(data.id) }
        />

    </div>
  )

}

ScheduleItem.defaultProps = {
  selected : false
}

const enhance = compose(
  withStyles(styles),
  connect(null, {dialogShow})
)

export default enhance(ScheduleItem)
