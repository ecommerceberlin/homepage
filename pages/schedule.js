import { 
  connect, 
  reduxWrapper,
  configure,
  DynamicPage 
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

const PageSchedule = () => (

<DynamicPage name="schedule" />

)

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings : settings,
    preload : ["presenters"]
  })

})

export default connect()(PageSchedule);
