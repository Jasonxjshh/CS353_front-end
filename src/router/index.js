import Vue from 'vue'
import Router from 'vue-router'
import BeginningPage from '@/components/BeginningPage'

Vue.use(Router)
const Start = r => require.ensure([], () => r(require('@/components/Start.vue')), 'Start')
const Thedetails = r => require.ensure([], () => r(require('@/components/details.vue')), 'details')
const co2Component = r => require.ensure([], () => r(require('@/components/co2Component.vue')), 'co2Component')
const temperatureComponent = r => require.ensure([], () => r(require('@/components/temperatureComponent.vue')), 'temperatureComponent')
const humidityComponent = r => require.ensure([], () => r(require('@/components/humidityComponent.vue')), 'humidityComponent')
const analysize = r => require.ensure([], () => r(require('@/components/analysize.vue')), 'analysize')
const detailRightComponent = r => require.ensure([], () => r(require('@/components/detailRightComponent.vue')), 'detailRightComponent')
const axiosTest = r => require.ensure([], () => r(require('@/components/axiosTest.vue')), 'axiosTest')
    // temperatureComponent
export default new Router({
    mode: `history`,
    routes: [{
            path: '/',
            name: 'BeginningPage',
            component: BeginningPage,
            // redirect: '/Start'
        },
        {
            path: '/Start',
            component: Start,
            children: [{
                path: 'axiosTest',
                name: 'axiosTest',
                component: axiosTest
            }],
        },
        // {
        //     // path: '/details/:id',
        //     path: '/Start/details/:sensorId',
        //     name: 'Thedetails',
        //     component: Thedetails,
        //     children: [{ path: 'co2Component', name: 'co2Component', component: co2Component },
        //         { path: 'temperatureComponent', name: 'temperatureComponent', component: temperatureComponent },
        //         { path: 'humidityComponent', name: 'humidityComponent', component: humidityComponent }
        //     ],
        //     redirect: '/Start/details/:sensorId/temperatureComponent/',

        // },
        {
            // path: '/details/:id',
            path: '/Start/details/:sensorId',
            name: 'Thedetails',
            component: Thedetails,
            children: [{
                    path: 'gauge',
                    name: 'gauge',
                    component: detailRightComponent,
                    children: [
                        { path: 'co2Component', name: 'co2Component', component: co2Component },
                        { path: 'temperatureComponent', name: 'temperatureComponent', component: temperatureComponent },
                        { path: 'humidityComponent', name: 'humidityComponent', component: humidityComponent }
                    ],
                    redirect: '/Start/details/:sensorId/gauge/temperatureComponent/'
                },
                { path: 'analysize', name: 'analysize', component: analysize }
            ],
            redirect: '/Start/details/:sensorId/gauge',

        }
    ]
})