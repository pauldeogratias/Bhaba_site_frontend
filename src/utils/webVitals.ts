// 6. Web Vitals Monitoring
// src/utils/webVitals.ts
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

export const reportWebVitals = () => {
  getCLS(({ name, value }) => {
    console.log(`${name}: ${value}`)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'web_vitals',
        value: Math.round(value * 1000),
        non_interaction: true
      })
    }
  })

  getFID(({ name, value }) => {
    console.log(`${name}: ${value}`)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'web_vitals',
        value: Math.round(value),
        non_interaction: true
      })
    }
  })

  getFCP(({ name, value }) => {
    console.log(`${name}: ${value}`)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'web_vitals',
        value: Math.round(value),
        non_interaction: true
      })
    }
  })

  getLCP(({ name, value }) => {
    console.log(`${name}: ${value}`)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'web_vitals',
        value: Math.round(value),
        non_interaction: true
      })
    }
  })

  getTTFB(({ name, value }) => {
    console.log(`${name}: ${value}`)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'web_vitals',
        value: Math.round(value),
        non_interaction: true
      })
    }
  })
}

// Usage in _app.tsx:
// import { reportWebVitals } from '../utils/webVitals'
// 
// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     reportWebVitals()
//   }
// }, [])
