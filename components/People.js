
import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import Grid from 'material-ui/Grid';
import withWidth from 'material-ui/utils/withWidth';

import _get from 'lodash/get'
import Person from './Person'

import {
  processArrayData,
  changeLimitForScreen
} from '../helpers'

import {
  // dialogShow as dialogShowAction,
  resourceFetchRequest as resourceFetchRequestAction
} from './redux/actions'


const FullJobInfo = ({company, job}) => (
    <span>{job} @ <strong>{company}</strong></span>
)

class People extends React.PureComponent {

  componentDidMount()
  {
    this.props.resourceFetchRequest("presenters", false)
  }

  isMobile(w){
    return w === "xs" || w === "sm"
  }

  render()
  {

    const { classes, presenters, filter, limit, random, width } = this.props;
    const data = processArrayData(presenters, {
        filter,
        limit : changeLimitForScreen(limit, width),
        random
    })

    const gridData = {xs : 6, sm : 6, md : 4, lg : 3, xl : 3}

    return (

        <Grid container spacing={24}>
            {data.map((item, i) =>
                <Grid key={i} item {...gridData}>
                  <Person
                    avatar={_get(item, "avatar")}
                    title={`${_get(item, "fname")} ${_get(item, "lname")}`}
                    subtitle={<FullJobInfo company={_get(item, "cname2")} job={_get(item, "position")}  />}
                    text={_get(item, "bio")}
                    minimal={ this.isMobile(width) }
                  />
                </Grid>
              )}
          </Grid>

    );


  }


}

People.defaultProps = {
  presenters : [],
  filter : null,
  limit : false,
  random : false,
  width : "sm"
}


People.propTypes = {

};

const enhance = compose(
  withWidth(),
  connect(state => ({
    presenters : state.resources.presenters,
  }), {
  //  dialogShow : dialogShowAction ,
    resourceFetchRequest : resourceFetchRequestAction
  })
)


export default enhance(People);