export interface Mission { title: string; code: string; description: string; level: string; duration: string; status: 'available' | 'demo' | 'locked'; icon: string; }
export const missions: Mission[] = [
  { title: 'Rescata la Red', code: '01', description: 'Diagnostica una red caída antes de que se agote el tiempo.', level: 'Inicial', duration: '15 min', status: 'demo', icon: '⚡' },
  { title: 'Detective IP', code: '02', description: 'Sigue las pistas, interpreta direcciones IP y encuentra al dispositivo intruso.', level: 'Inicial', duration: '12 min', status: 'available', icon: '⌖' },
  { title: 'El Hacker Misterioso', code: '03', description: 'Analiza registros y fortalece los puntos débiles de la red.', level: 'Intermedio', duration: '20 min', status: 'demo', icon: '◉' },
  { title: 'Conecta la Empresa', code: '04', description: 'Diseña una topología eficiente para una empresa en crecimiento.', level: 'Intermedio', duration: '25 min', status: 'demo', icon: '⌘' },
  { title: 'Cable Maestro', code: '05', description: 'Elige cableado, estándares y conectores para cada escenario.', level: 'Intermedio', duration: '18 min', status: 'demo', icon: '⌁' },
  { title: 'Hospital sin Red', code: '06', description: 'Restablece servicios críticos aplicando redundancia y prioridades.', level: 'Avanzado', duration: '30 min', status: 'demo', icon: '✚' },
  { title: 'Escape Room Final', code: '07', description: 'Combina todo lo aprendido en una misión de infraestructura completa.', level: 'Experto', duration: '45 min', status: 'locked', icon: '◆' },
];

export const questions = [
  { prompt: 'Una estación tiene la IP 192.168.10.24 con máscara 255.255.255.0. ¿Cuál es su dirección de red?', options: ['192.168.10.0', '192.168.0.0', '192.168.10.24', '192.168.10.255'], answer: 0, hint: 'Con una máscara /24, los tres primeros octetos identifican la red.', explain: 'En una red /24, el último octeto corresponde a hosts; la dirección de red termina en .0.' },
  { prompt: '¿Qué dispositivo permite comunicar dos redes IP diferentes?', options: ['Switch', 'Router', 'Punto de acceso', 'Repetidor'], answer: 1, hint: 'Busca el equipo que toma decisiones usando una tabla de rutas.', explain: 'El router reenvía paquetes entre redes distintas usando direcciones IP.' },
  { prompt: 'El equipo 10.0.5.18/24 no alcanza su gateway 10.0.6.1. ¿Cuál es el problema más probable?', options: ['DNS incorrecto', 'Están en subredes distintas', 'Cable cruzado', 'IP pública bloqueada'], answer: 1, hint: 'Compara el tercer octeto cuando la máscara es /24.', explain: 'Con /24, 10.0.5.0 y 10.0.6.0 son redes diferentes; el gateway debe ser alcanzable en la red local.' },
  { prompt: '¿Qué comando muestra la configuración IP en un equipo Windows?', options: ['ping', 'tracert', 'ipconfig', 'netstat -r'], answer: 2, hint: 'Su nombre combina “IP” y “configuración”.', explain: 'ipconfig muestra dirección, máscara y gateway de las interfaces de red.' },
  { prompt: 'En la red 172.16.8.0/24, ¿cuál dirección NO se puede asignar a un host?', options: ['172.16.8.10', '172.16.8.100', '172.16.8.254', '172.16.8.255'], answer: 3, hint: 'La última dirección de una subred se reserva para enviar a todos los hosts.', explain: '172.16.8.255 es la dirección de broadcast de esa red /24.' },
] as const;
