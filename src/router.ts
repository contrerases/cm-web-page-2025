import { createRouter, createWebHistory } from 'vue-router';
import InicioView from '@/views/InicioView.vue'
import HistoriaView from '@/views/nosostros/HistoriaView.vue'
import EquipoDirectivoView from '@/views/nosostros/EquipoDirectivoView.vue'
import EquipoDocenteView from '@/views/nosostros/EquipoDocenteView.vue'
import MisionVisionView from '@/views/nosostros/MisionVisionView.vue';
import PeiView from '@/views/nosostros/PeiView.vue';
import NoticiasView from '@/views/noticias/NoticiasView.vue';
import RICEView from '@/views/reglamento/RICEView.vue';
import EvaluacionView from '@/views/reglamento/EvaluacionView.vue';
import ProtocolosView from '@/views/reglamento/ProtocolosView.vue';
import ConsejoEscolarView from '@/views/ConsejoEscolarView.vue';
import NoticiasDetail from '@/views/noticias/NoticiasDetail.vue';
import CentroDePadresView from './views/CentroPadresView.vue';
import ContactanosView from './views/ContactanosView.vue';


const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: InicioView
  },

  {
    path: '/nosotros',
    name: 'Nosotros',

    children: [
      {
        path: '/historia',
        name: 'Historia',
        component: HistoriaView
      },

      {
        path: '/equipo-directivo',
        name: 'EquipoDirectivo',
        component: EquipoDirectivoView
      },

      {
        path: '/equipo-docente',
        name: 'EquipoDocente',
        component: EquipoDocenteView
      },

      {
        path: '/mision-vision',
        name: 'MisionVision',
        component: MisionVisionView
      },

      {
        path: '/proyecto-educativo-institucional',
        name: 'PEI',
        component: PeiView
      },
      
    ],
  },

  {
    path: '/reglamentos',
    name: 'Reglamentos',
    
    children: [

        {
          path: '/reglamento-interno',
          name: 'ReglamentoInterno',
          component: RICEView
        },
        
        {
          path: '/evaluacion',
          name: 'Evaluacion',
          component: EvaluacionView
        },
        {
          path: '/protocolos',
          name: 'Protocolos',
          component: ProtocolosView
        }
      
    ],
    
  },

  {
    path: '/noticias',
    name: 'Noticias',
    component: NoticiasView
  },
  
  {
    path: '/noticias/:slug',
    name: 'NoticiasDetail',
    component: NoticiasDetail,
    props: true, 
  },


  {
    path: '/consejo-escolar',
    name: 'ConsejoEscolar',
    component: ConsejoEscolarView
  },

  {
    path: '/centro-de-padres',
    name: 'CentroDePadres',
    component: CentroDePadresView

  }, 


  
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: ContactanosView
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }; 
  },
});

export default router;