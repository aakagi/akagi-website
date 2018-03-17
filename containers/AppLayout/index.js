import './GlobalStyles'
import { Provider as MobxProvider } from 'mobx-react'
import { ThemeProvider } from 'styled-components'
import AppStore from 'store'
import theme from 'utils/theme'
import GoogleAnalyticsTag from 'components/GoogleAnalyticsTag'
// import GunLoader from 'components/GunLoader'

const GA_TRACKING_ID = 'UA-76371065-1'

export default class AppLayout extends React.Component {
  constructor(props) {
    super(props)
    this.store = new AppStore()
  }

  render() {
    return (
      <MobxProvider store={this.store}>
        <ThemeProvider theme={theme}>
          <div>
            {/*<GunLoader />*/}
            <GoogleAnalyticsTag gaTrackingId={GA_TRACKING_ID} />
            {this.props.children}
          </div>
        </ThemeProvider>
      </MobxProvider>
    )
  }
}
