import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import four from '@/components/four'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'github',
      component: index,
      meta: {
        title: 'Linux Kernel CVE Tracker',
        metaTags: [
          {
            name: 'description',
            content: 'Security Tracker for the Linux Kernel. Provides details, fixed versions, and CVSS scores for CVEs affecting the Linux Kernel.'
          }
        ]
      }
    },
    {
      path: '/streams/:stream_id',
      name: 'stream',
      component: () => import('@/components/stream')
    },
    {
      path: '/cves',
      name: 'cves',
      component: () => import('@/components/cves')
    },
    {
      path: '/cves/:cve_id',
      name: 'cve',
      component: () => import('@/components/cve')
    },
    {
      path: '/404',
      name: 'four',
      component: four
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
