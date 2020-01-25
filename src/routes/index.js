const routes = [
    {
        path: '/',
        redirect: {
            name: 'index'
        }
    },
    {
        path: '/ddc',
        redirect: {
            name: 'index'
        }
    },
    {
        path: '/ddc',
        name: '/ddc',
        component: () =>
            import('@/views/Home.vue'),
        children: [{
            path: 'index',
            name: 'index',
            meta: {
                auth: true
              },
            component: () =>
                import('@/views/index/index.vue')
        }]
    },
    {
        path: '/ddc/login',
        name: 'login',
        component: () =>
            import('@/views/login.vue')
    },
]
export default routes