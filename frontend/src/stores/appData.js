import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {  
  state: () => ({
    appName: 'zetatium',
    pages: ['Course','About', 'Contact', 'Login'],
    services: [
      {
        name: 'Career Catalyst',
        description: 'Elevate your professional journey with our comprehensive suite of resources, thoughtfully designed to transform ambition into achievement. Uncover unparalleled opportunities and redefine your career path with unparalleled sophistication.'
      }, 
      {
        name: 'Prestige Pathways',
        description: 'Experience the pinnacle of professional prestige as you elegantly secure your next career move. Our bespoke service ensures each offer is presented with the utmost respect and excellence, reflecting the quality of your career journey.'
      }, 
      {
        name: 'Elite Offer Seal',
        description: 'Embark on a journey to success with guided expertise and recognition. Prestige Pathways empowers you to transform aspirations into achievements, crafting a distinguished professional narrative.'
      }
    ],
    appointments: [
      {
        name: 'Free Consultation',
        description: '30 minutes',
      },
      {
        name: 'Basic Service',
        description: '1 hour @ $99.00',
      },
      {
        name: 'Advanced Service',
        description: '1 hour @ $199.00',
      }
    ],
    principles: [
      {
        name: 'Orgaize Smarter',
        icon: 'twemoji:brain',
        description: 'Streamline your workflow with intuitive tools that keep you ahead of the game'
      },
      {
        name: 'Optmize Faster',
        icon: "unjs:h3",
        description: 'Speed up your processes with cutting-edge automation and AI-driven solutions'
      }, 
      {
        name: 'Synergize Better',
        icon: "twemoji:handshake",
        description: 'Collabrate in real time with tools designed to connect and empower teams'
      }
    ]
  }),
  getters: {},
  actions: {},
});
