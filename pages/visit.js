import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetIconGrid,
  // WidgetPresenters,
  // WidgetSchedule,
  // WidgetAllExhibitorsAvatarlist,
  DatasourcePhotos as Photos,
 
  WidgetVips,
  reduxWrapper,
  configure,
  //WidgetFeaturedPresenters
} from 'eventjuicer-site-components';

 
const settings = require('../settings').default;

const PageVisit = () => (

        <div>
      

        <WidgetVisitor setting="visitor.register" first />

        {/* <WidgetSchedule /> */}

        {/* <WidgetFeaturedPresenters bio={false} /> */}

        <WidgetVips limit={12} mobile={4} />

        <WidgetVideoWithEventInfo />

        {/* <WidgetPresenters /> */}

        <WidgetIconGrid setting="visitor.benefits" />

      <WidgetVisitor setting="visitor.register" />

        {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}


        </div>

)


export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings : settings,
    preload : ["exhibitors", 'presenters']
  })

  return {props: {}, revalidate: 10}

  
})

 
export default connect()(PageVisit);
