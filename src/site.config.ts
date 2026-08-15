export const site = {
  name: 'Misión Conectar',
  title: 'Misión Conectar: Escape Room Tecnológico',
  titleTemplate: '%s | Misión Conectar',
  description: 'Escape room educativo para investigar un ciberataque y aprender infraestructura de redes mediante misiones, comandos y evidencia progresiva.',
  url: 'https://walterjoelcode.github.io/EscapeRoom',
  locale: 'es_NI',
  author: 'Walter Joel',
  defaultOgImage: undefined as string | undefined,
  social: {
    twitter: '',
    github: 'https://github.com/WalterJoelCode/EscapeRoom',
  },
} as const;

export type SiteConfig = typeof site;
