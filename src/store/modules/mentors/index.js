import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      mentors: [
        {
          id: '1',
          firstName: 'Sinem',
          lastName: 'Sungur',
          areas: ['frontend', 'career', 'marketing'],
          description: "I'm Sinem and I've worked as a freelance",
          rate: 30
        },
        {
          id: '2',
          firstName: 'Ahmet',
          lastName: 'Sungur',
          areas: ['medicine', 'career'],
          description: "I'm Ahmet and I am a doctor",
          rate: 35
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
