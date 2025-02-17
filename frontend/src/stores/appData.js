import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    appName: 'zetanium',
    pages: [
      {
        name: 'About us',	
        hash: '#about_us',
      },
      {
        name: 'What we are',	
        hash: '#what_we_are',
      },
      {
        name: 'What we do',	
        hash: '#what_we_do',
      },
      {
        name: 'Blog',	
        hash: 'blog',
      },
      {
        name: 'Contact Us',
        hash: '#contact_us',
      },
    ],
    aboutUs: [
      {
        img: new URL('@/assets/images/imgg-od3-_05zdz1u.png', import.meta.url).href,
        description: `Unleash potential by organizing processes, optimizing results, and synergizing talent with technology. Zetanium is where ideas are nurtured, talent thrives, and the future is engineered with precision and passion. Together, let's organize for clarity, optimize for success, and synergize for a smarter, brighter future`
      },
      {
        img: new URL('@/assets/images/imgg-od3-_05zdz1u.png', import.meta.url).href,
        description: "At Zetanium, we believe in transforming possibilities into realities. We unleash potential by organizing processes with precision, ensuring clarity and seamless efficiency. By optimizing results, we harness innovation and strategy to deliver impactful outcomes. Through synergizing talent with cutting-edge technology, we create a perfect blend of human ingenuity and digital brilliance."
      },
      {
        img: new URL('@/assets/images/imgg-od3-_05zdz1u.png', import.meta.url).href,
        description: "Zetanium is where ideas are nurtured, talent thrives, and the future is engineered with passion and purpose. Together, let’s organize for clarity, optimize for success, and synergize for a smarter, brighter tomorrow."
      }
    ],
    services: [
      {
        name: 'Operational Excellence',
      },
      {
        name: 'Team Collaberation',
      },
      {
        name: 'Sustained Relationship',
      },
      {
        name: 'Productivity and Synergy',
      },
      {
        name: 'Training and Empowerment',
      },
      {
        name: 'Future-Proof Leadership and Culture',
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
