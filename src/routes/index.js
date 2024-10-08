/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import SignIn from '../views/SignIn.vue'; 
import GestionCommune from '../views/GestionCommune.vue';
import EditCommune from '../views/commune/EditCommune.vue';
import CreateCommune from '../views/commune/CreateCommune.vue';
import DeleteCommune from '../views/commune/DeleteCommune.vue'
import CreateParcoursInCommune from '../views/parcours/CreateParcoursInCommune.vue'
import EditParcours from '../views/parcours/EditParcours.vue'
import EditEtapes from '../views/parcours/EditEtapes.vue'
import CreateEtapeInParcours from '../views/parcours/CreateEtapeInParcours.vue'

import blague from '../views/etapes/blague.vue'
import codecesar from '../views/etapes/codecesar.vue'
import informations from '../views/etapes/informations.vue'
import intru from '../views/etapes/intru.vue'
import lesaviezvous from '../views/etapes/lesaviezvous.vue'
import paysage from '../views/etapes/paysage.vue'
import pointgps from '../views/etapes/pointgps.vue'
import pyramide from '../views/etapes/pyramide.vue'
import qcm from '../views/etapes/qcm.vue'
import charade from '../views/etapes/charade.vue'
import compterimage from '../views/etapes/compterimage.vue'
import rebus from '../views/etapes/rebus.vue'
import ecogeste from '../views/etapes/ecogeste.vue'
import CommuneData from '../views/data_commune/CommuneData.vue'
import transistate from '../views/transistate.vue'

import ViewBlague from '../views/viewetapes/viewblague.vue'
import ViewInfo from '../views/viewetapes/viewinfo.vue'
import ViewCharade from '../views/viewetapes/viewcharade.vue'
import viewCodeCesar from '../views/viewetapes/viewcodecesar.vue'
import viewcompterimage from '../views/viewetapes/viewcompterimage.vue'
import viewIntru from '../views/viewetapes/viewintru.vue'
import viewlesaviezvous from '../views/viewetapes/viewlesaviezvous'
import viewpaysage from '../views/viewetapes/viewpaysage.vue'
import viewpointgps from '../views/viewetapes/viewpointgps.vue'
import viewpyramide from '../views/viewetapes/viewpyramide.vue'
import viewqcm from '../views/viewetapes/viewqcm.vue'
import viewrebus from '../views/viewetapes/viewrebus.vue'
import viewecogeste from '../views/viewetapes/viewecogeste.vue'

import editBlague from '../views/editetapes/editBlague.vue'
import editCodeCesar from '../views/editetapes/editCodeCesar.vue'
import editInformations from '../views/editetapes/editInformations.vue'
import editIntru from '../views/editetapes/editIntru.vue'
import editLesaviezvous from '../views/editetapes/editLeSaviezVous.vue'
import editPaysage from '../views/editetapes/editPaysage.vue'
import editPointgps from '../views/editetapes/editPointgps.vue'
import editPyramide from '../views/editetapes/editPyramide.vue'
import editQcm from '../views/editetapes/editQcm.vue'
import editCharade from '../views/editetapes/editCharade.vue'
import editCompterimage from '../views/editetapes/editCompterImage.vue'
import editRebus from '../views/editetapes/editRebus.vue'
import editEcogeste from '../views/editetapes/editEcogeste.vue'
import demande from '@/views/demande.vue';


const routes = [
  {
    path: '/gestioncommune',
    name: 'gestioncommune',
    component: GestionCommune
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn 
  },
  {
    path: '/editcommune/:commune',
    name: 'editcommune',
    component: EditCommune,
  },
  {
    path: '/editetapes/:parcour',
    name: 'editetapes',
    component: EditEtapes,
  },
  {
    path: '/deletecommune/:commune',
    name: 'deletecommune',
    component: DeleteCommune,
  },
  {
    path: '/createparcoursincommune/:commune',
    name: 'createparcoursincommune',
    component: CreateParcoursInCommune,
  },
  {
    path: '/editparcours/:parcours',
    name: 'editparcours',
    component: EditParcours,
  },
  {
    path: '/createcommune',
    name: 'createcommune',
    component: CreateCommune,
  },
  {
    path: '/createetapeinparcours/:parcour',
    name: 'createetapeinparcours',
    component: CreateEtapeInParcours,
  },
  {
    path: '/blague/:parcours',
    name: 'blague',
    component: blague
  },
  {
    path: '/codecesar/:parcours',
    name: 'codecesar',
    component: codecesar
  },
  {
    path: '/informations/:parcours',
    name: 'informations',
    component: informations
  },
  {
    path: '/intru/:parcours',
    name: 'intru',
    component: intru
  },
  {
    path: '/lesaviezvous/:parcours',
    name: 'lesaviezvous',
    component: lesaviezvous
  }, {
    path: '/paysage/:parcours',
    name: 'paysage',
    component: paysage
  },
  {
    path: '/pointgps/:parcours',
    name: 'pointgps',
    component: pointgps
  },
  {
    path: '/pyramide/:parcours',
    name: 'pyramide',
    component: pyramide
  },
  {
    path: '/qcm/:parcours',
    name: 'qcm',
    component: qcm
  },
  {
    path: '/charade/:parcours',
    name: 'charade',
    component: charade
  },
  {
    path: '/compterimage/:parcours',
    name: 'compterimage',
    component: compterimage
  },
  {
    path: '/rebus/:parcours',
    name: 'rebus',
    component: rebus
  },
  {
    path: '/ecogeste/:parcours',
    name: 'ecogeste',
    component: ecogeste
  },
  {
    path: '/informationcommune/:commune',
    name: 'informationcommune',
    component: CommuneData,
  },
  {
    path: '/viewetape/jeu_blague/:etape',
    name: 'viewblague',
    component: ViewBlague
  },
  {
    path: '/viewetape/transi_info/:etape',
    name: 'viewinfo',
    component: ViewInfo
  },
  {
    path: '/viewetape/jeu_charade/:etape',
    name: 'viewcharade',
    component: ViewCharade
  },
  {
    path: '/viewetape/jeu_cesar/:etape',
    name: 'viewcesar',
    component: viewCodeCesar
  },
  {
    path: '/viewetape/jeu_compterimage/:etape',
    name: 'viewcompterimage',
    component: viewcompterimage
  },
  {
    path: '/viewetape/jeu_intrus/:etape',
    name: 'viewintru',
    component: viewIntru
  },
  {
    path: '/viewetape/jeu_info/:etape',
    name: 'viewlesaviezvous',
    component: viewlesaviezvous
  },
  {
    path: '/viewetape/jeu_code/:etape',
    name: 'viewpaysage',
    component: viewpaysage
  },
  {
    path: '/viewetape/transi_gps/:etape',
    name: 'viewgps',
    component: viewpointgps
  },
  {
    path: '/viewetape/jeu_pyramide/:etape',
    name: 'viewpyramide',
    component: viewpyramide
  },
  {
    path: '/viewetape/jeu_qcm/:etape',
    name: 'viewqcm',
    component: viewqcm
  },
  {
    path: '/viewetape/jeu_rebus/:etape',
    name: 'viewrebus',
    component: viewrebus
  },
  {
    path: '/viewetape/jeu_ecogeste/:etape',
    name: 'viewecogeste',
    component: viewecogeste
  },
  {
    path: '/editetape/jeu_blague/:etape',
    name: 'editBlague',
    component: editBlague
  },
  {
    path: '/editetape/transi_info/:etape',
    name: 'editinfo',
    component: editInformations
  },
  {
    path: '/editetape/jeu_charade/:etape',
    name: 'editcharade',
    component: editCharade
  },
  {
    path: '/editetape/jeu_cesar/:etape',
    name: 'editcesar',
    component: editCodeCesar
  },
  {
    path: '/editetape/jeu_compterimage/:etape',
    name: 'editcompterimage',
    component: editCompterimage
  },
  {
    path: '/editetape/jeu_intrus/:etape',
    name: 'editintru',
    component: editIntru
  },
  {
    path: '/editetape/jeu_info/:etape',
    name: 'editlesaviezvous',
    component: editLesaviezvous
  },
  {
    path: '/editetape/jeu_code/:etape',
    name: 'editpaysage',
    component: editPaysage
  },
  {
    path: '/editetape/transi_gps/:etape',
    name: 'editgps',
    component: editPointgps
  },
  {
    path: '/editetape/jeu_pyramide/:etape',
    name: 'editpyramide',
    component: editPyramide
  },
  {
    path: '/editetape/jeu_qcm/:etape',
    name: 'editqcm',
    component: editQcm
  },
  {
    path: '/editetape/jeu_rebus/:etape',
    name: 'editrebus',
    component: editRebus
  },
  {
    path: '/editetape/jeu_ecogeste/:etape',
    name: 'editecogeste',
    component: editEcogeste
  },
  {
    path: '/transistate',
    name: 'transistate',
    component: transistate
  },
  {
    path: '/demande',
    name: 'demande',
    component: demande
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})

import store from '@/store';

router.beforeEach((to, from, next) => {
  // Vérifiez si la route nécessite une authentification / s'il ne s'agit pas d'admin
  const requiresAuth = to.name != "login" && to.name != "signIn"
  // Si la route nécessite une authentification et l'utilisateur n'est pas connecté
  if (requiresAuth && !store.getters.user.loggedIn) {
    next('/'); // Redirigez l'utilisateur vers la page de connexion
  } else {
    if(to.name == "demande" && store.getters.user.role != "admin"){
      next("/gestioncommune")
    }else{
      next(); // Permettez l'accès à la route
    }
  }
});
export default router