import {
  connect,
  MyHead as Head,
  get as _get,
  getInviteOgImage,
  WidgetVisitor,
  WidgetFeaturedExhibitors,
  WidgetSchedule,
  WidgetEventInfo,
  Typography,
  Wrapper,
  // Gallery,
  // EventInfo,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';


const settings = require('../../settings').default;

const PageInvite = (props) => {

  const { url, person, exhibitors, asPath } =  props;
  const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;
    const cname = `${_get(person, 'cname2', '')}`;

  return (
    <div>
    <Head
      url={asPath}
      image={getInviteOgImage(
        `See You! ${_get(person, 'fname', '')} from ${_get(
          person,
          'cname2',
        )}`,
      )}
      titleLabel={[
        'visitors.opengraph.title',
        {
          name: name,
          cname: cname,
          location: 'Berlin STATION',
          date: '18th February 2021',
        },
      ]}
    />

    <Wrapper
      first
      label={['visitors.invite.title', { name, cname }]}
      secondaryTitle="visitors.invite.description"
    >
      <Typography
        template="visitor_invite_join"
        label={['visitors.invite.will_you_join', { name, cname }]}
      />

      <WidgetEventInfo orientation="h" style={{ marginTop: 50 }} />
    </Wrapper>

    <WidgetVisitor label="visitors.register" />

    {/* <WidgetSchedule /> */}

    <WidgetFeaturedExhibitors
      label="exhibitors.list_featured"
      secondaryTitle=""
    />
 </div>

  )
}
 
export const getStaticProps = reduxWrapper.getStaticProps(async ({ store, params }) => {

  const {code} = params

  const resource = `code/${code}`;

  await configure(store, {
    settings : settings,
    preload : [resource, "exhibitors"]
  })

})


export default connect(
  (state, props) => ({
    person:
      'resource' in props && props.resource in state.resources
        ? state.resources[props.resource]
        : {},
  }),
  null,
)(PageInvite);
