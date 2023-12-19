import { NavigationItemModel } from "../models/navigation.model";

export const navigationData: NavigationItemModel[] = [
    { label: 'Home', link: '/', icon: 'home' },
    { label: 'Usuários', link: '/usuarios', icon: 'person'},
    { label: 'Tenancies', link: '/tenancies/pulsus', icon: 'domain' },
    { label: 'Planos de Saúde', link: '/planos',icon: 'emergency'  },
    {
        label: 'CADASTROS',
        children: [
            { label: 'Comorbidades', link: '/comobirdades', icon: 'sick'  },
            { label: 'Condições do Paciente', link: '/condicao' , icon: 'personal_injury'},
            { label: 'Elegibilidade', link: '/elegibilidade', icon: "list" },
            { label: 'Especialidades', link: '/especialidades', icon: "medical_information"},
            { label: 'Patologias', link: '/patologias', icon: "healing" },
            { label: 'Medicamentos', link: '/medicamentos', icon: 'medication'},
        ]
    },
    { label: '', link: '',icon: ''  },
    { label: 'Sair', link: '', icon: 'logout'  },

];