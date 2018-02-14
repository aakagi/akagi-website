import NextHead from 'next/head'
import Router from 'next/router'

const GoogleAnalyticsTag = ({ gaTrackingId }) => {
  // Tracks the page location etc for GA on route change
  window.gaTrackingId = '${gaTrackingId}'
  Router.onRouteChangeComplete = () => {
    if (window.gtag) {
      window.gtag('config', window.gaTrackingId, {
        page_location: window.location.href,
        page_path: window.location.pathname,
        page_title: window.document.title,
      })
    }
  }

  return (
    <NextHead>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
      
      {/*
        This ensures that the first page view gets sent to GA. All subsequent
        page views will be handled by the `Router.onRouteChangeComplete`
        method we set up above.
      */}

      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || []
        function gtag(){
          dataLayer.push(arguments)
        }
        gtag('js', new Date())
        gtag('config', '${gaTrackingId}')
      `}} />
    </NextHead>
  )
}

export default GoogleAnalyticsTag
