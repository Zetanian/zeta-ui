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
      // {
      //   name: 'Blog',	
      //   hash: '#blog',
      // },
      {
        name: 'Contact Us',
        hash: '#contact_us',
      },
    ],
    aboutUs: [
      {
        img: new URL('@/assets/images/jumbotron_bg.jpeg', import.meta.url).href,
        description: `Unleash potential by organizing processes, optimizing results, and synergizing talent with technology. Zetanium is where ideas are nurtured, talent thrives, and the future is engineered with precision and passion. Together, let's organize for clarity, optimize for success, and synergize for a smarter, brighter future.`
      },
      {
        img: new URL('@/assets/images/jumbotron_bg.jpeg', import.meta.url).href,
        description: "We believe in transforming possibilities into realities. We unleash potential by organizing processes with precision, ensuring clarity and seamless efficiency. By optimizing results, we harness innovation and strategy to deliver impactful outcomes. Through synergizing talent with cutting-edge technology, we create a perfect blend of human ingenuity and digital brilliance."
      },
      {
        img: new URL('@/assets/images/jumbotron_bg.jpeg', import.meta.url).href,
        description: "Zetanium is where ideas are nurtured, talent thrives, and the future is engineered with passion and purpose. Together, let’s organize for clarity, optimize for success, and synergize for a smarter, brighter tomorrow."
      }
    ],
    services: [
      {
        name: 'Operational Excellence',
        icon: 'fa:cogs',
        color: 'text-blue-600',
        description: 'We leverage cutting-edge technologies, industry best practices, and process optimization to ensure seamless workflow automation, risk mitigation, and service excellence.'
      },
      {
        name: 'Team Collaberation',
        icon: 'fa6-solid:users',
        color: 'text-green-600',
        description: 'We foster synergy and cross-functional teamwork, enabling a culture of transparency, knowledge sharing, and innovation-driven solutions.'
      },
      {
        name: 'Sustained Relationship',
        icon: 'fa6-solid:handshake',
        color: 'text-yellow-600',
        description: 'Our approach emphasizes strategic partnerships, customer satisfaction, and value-driven solutions that create a foundation for continuous growth and digital excellence.'
      },
      {
        name: 'Productivity and Synergy',
        icon: 'fa6-solid:chart-line',
        color: 'text-lime-400',
        description: 'Maximizing efficiency through agile methodologies, automation, and performance-driven strategies to ensure scalability and business resilience.'
      },
      {
        name: 'Training and Empowerment',
        icon: 'fa6-solid:chalkboard-user',
        color: 'text-sky-600',
        description: 'Empowering our workforce and clients with upskilling programs, workshops, and leadership coaching to enhance problem-solving skills and digital capabilities.'
      },
      {
        name: 'Future-Proof Leadership and Culture',
        icon: 'fa6-solid:lightbulb',
        color: 'text-gray-600',
        description: 'We cultivate adaptive leadership, strategic foresight, and a culture of innovation to prepare businesses for emerging technologies and industry disruptions.'
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
