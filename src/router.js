import { createRouter, createWebHistory } from 'vue-router'

import MentorsDetail from './pages/mentors/MentorsDetail.vue'
import MentorsList from './pages/mentors/MentorsList.vue'
import MentorsRegister from './pages/mentors/MentorsRegister.vue'
import ContactMentors from './pages/requests/ContactMentors.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'


const routes = [
  { path: '/', redirect: '/mentors' },
  { path: '/mentors', component: MentorsList },
  {
    path: '/mentors/:id',
    component: MentorsDetail,
    props: true,
    children: [{ path: 'contact', component: ContactMentors }]
  },
  { path: '/register', component: MentorsRegister },
  { path: '/requests', component: RequestsReceived },
  { path: '/:notFound(.*)', component: NotFound }
]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;
