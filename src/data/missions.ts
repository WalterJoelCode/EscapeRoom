export interface Question {
  prompt: string;
  options: string[];
  answer: number;
  hint: string;
  explain: string;
}

export interface Mission {
  title: string;
  code: string;
  description: string;
  level: 'Inicial' | 'Intermedio';
  duration: string;
  icon: string;
  xp: number;
  briefing: string;
  questions: Question[];
}

export const missions: Mission[] = [
  {
    title: 'Rescata la Red', code: '01', level: 'Inicial', duration: '8 min', icon: '⚡', xp: 300,
    description: 'Diagnostica una red caída antes de que se agote el tiempo.',
    briefing: 'El aula perdió conectividad. Encuentra el fallo siguiendo la ruta desde el equipo hasta Internet.',
    questions: [
      { prompt: '¿Qué comando comprueba rápidamente si otro equipo responde?', options: ['ping', 'mkdir', 'format', 'copy'], answer: 0, hint: 'Envía pequeños paquetes ICMP.', explain: 'ping mide si un destino responde y muestra el tiempo de ida y vuelta.' },
      { prompt: 'El icono de red indica “cable desconectado”. ¿Qué revisas primero?', options: ['El DNS', 'El cable y los LEDs del puerto', 'La contraseña Wi‑Fi', 'El navegador'], answer: 1, hint: 'Empieza por la capa física.', explain: 'Un cable suelto o un puerto sin enlace impide cualquier comunicación.' },
      { prompt: 'Puedes abrir 192.168.1.1 pero no example.com. ¿Qué servicio puede fallar?', options: ['DHCP', 'DNS', 'Bluetooth', 'NTP'], answer: 1, hint: 'Traduce nombres a direcciones IP.', explain: 'DNS resuelve nombres de dominio; la conectividad IP local ya funciona.' },
    ],
  },
  {
    title: 'Detective IP', code: '02', level: 'Inicial', duration: '10 min', icon: '⌖', xp: 360,
    description: 'Interpreta direcciones IP y encuentra al dispositivo intruso.',
    briefing: 'Un dispositivo desconocido apareció en el laboratorio. Analiza su direccionamiento y aísla al intruso.',
    questions: [
      { prompt: 'Una estación usa 192.168.10.24/24. ¿Cuál es su dirección de red?', options: ['192.168.10.0', '192.168.0.0', '192.168.10.24', '192.168.10.255'], answer: 0, hint: 'En /24, los tres primeros octetos identifican la red.', explain: 'El último octeto identifica hosts; la dirección de red termina en .0.' },
      { prompt: '¿Qué dirección pertenece a la misma red /24 que 10.0.5.18?', options: ['10.0.6.18', '10.0.5.200', '10.1.5.18', '11.0.5.18'], answer: 1, hint: 'Compara los tres primeros octetos.', explain: 'Con /24, 10.0.5.0 es la red y 10.0.5.200 pertenece a ella.' },
      { prompt: 'En 172.16.8.0/24, ¿qué dirección no se asigna a un host?', options: ['172.16.8.10', '172.16.8.100', '172.16.8.254', '172.16.8.255'], answer: 3, hint: 'La última dirección envía a todos los hosts.', explain: '172.16.8.255 es la dirección de broadcast.' },
    ],
  },
  {
    title: 'Ruta de Escape', code: '03', level: 'Inicial', duration: '10 min', icon: '↗', xp: 420,
    description: 'Sigue paquetes, gateways y saltos hasta encontrar la salida.',
    briefing: 'Los paquetes están atrapados en la red local. Reconstruye la ruta correcta hacia el exterior.',
    questions: [
      { prompt: '¿Qué equipo comunica redes IP diferentes?', options: ['Switch', 'Router', 'Repetidor', 'Patch panel'], answer: 1, hint: 'Consulta una tabla de rutas.', explain: 'El router reenvía paquetes entre redes distintas.' },
      { prompt: '¿Para qué sirve el gateway predeterminado?', options: ['Guardar archivos', 'Salir hacia otras redes', 'Asignar nombres', 'Cifrar discos'], answer: 1, hint: 'Es la puerta de salida de la subred.', explain: 'Los destinos externos se envían al gateway predeterminado.' },
      { prompt: '¿Qué comando muestra los saltos hasta un destino en Windows?', options: ['tracert', 'hostname', 'arp -d', 'cls'], answer: 0, hint: 'Su nombre sugiere “trazar ruta”.', explain: 'tracert enumera los routers atravesados hasta el destino.' },
    ],
  },
  {
    title: 'El Hacker Misterioso', code: '04', level: 'Intermedio', duration: '14 min', icon: '◉', xp: 540,
    description: 'Analiza registros y fortalece los puntos débiles de la red.',
    briefing: 'El sistema detectó actividad anómala. Distingue señales reales de ataque y cierra el acceso.',
    questions: [
      { prompt: 'Cientos de intentos de acceso desde una IP sugieren…', options: ['Fuerza bruta', 'Copia de seguridad', 'Balanceo', 'Compresión'], answer: 0, hint: 'Prueba muchas credenciales rápidamente.', explain: 'Una ráfaga de intentos fallidos es un indicador típico de fuerza bruta.' },
      { prompt: '¿Qué medida reduce el impacto de una contraseña robada?', options: ['MFA', 'Más ancho de banda', 'NAT', 'Cambiar el SSID'], answer: 0, hint: 'Exige una segunda prueba de identidad.', explain: 'La autenticación multifactor añade una barrera independiente.' },
      { prompt: '¿Qué principio concede solo los permisos imprescindibles?', options: ['Alta disponibilidad', 'Mínimo privilegio', 'Difusión', 'Tolerancia cero'], answer: 1, hint: 'Menos permisos, menos superficie de daño.', explain: 'El mínimo privilegio limita el acceso a lo estrictamente necesario.' },
    ],
  },
  {
    title: 'Conecta la Empresa', code: '05', level: 'Intermedio', duration: '16 min', icon: '⌘', xp: 600,
    description: 'Diseña una topología eficiente para una empresa en crecimiento.',
    briefing: 'La empresa abre dos departamentos. Segmenta el tráfico sin perder comunicación controlada.',
    questions: [
      { prompt: '¿Qué tecnología separa redes lógicas en un mismo switch?', options: ['VLAN', 'FTP', 'PoE', 'ARP'], answer: 0, hint: 'Crea dominios de broadcast separados.', explain: 'Las VLAN segmentan lógicamente una infraestructura conmutada.' },
      { prompt: '¿Qué topología conecta cada equipo a un punto central?', options: ['Anillo', 'Bus', 'Estrella', 'Malla completa'], answer: 2, hint: 'Los enlaces parecen rayos alrededor de un centro.', explain: 'En estrella, cada nodo enlaza con un switch o equipo central.' },
      { prompt: '¿Qué enlace transporta varias VLAN entre switches?', options: ['Access', 'Trunk', 'Loopback', 'Console'], answer: 1, hint: 'Etiqueta tráfico de múltiples VLAN.', explain: 'Un enlace trunk transporta varias VLAN mediante etiquetado.' },
    ],
  },
  {
    title: 'Cable Maestro', code: '06', level: 'Intermedio', duration: '14 min', icon: '⌁', xp: 660,
    description: 'Elige cableado, estándares y conectores para cada escenario.',
    briefing: 'Debes cablear el nuevo laboratorio. Cada elección afecta distancia, velocidad y fiabilidad.',
    questions: [
      { prompt: '¿Cómo se conoce comúnmente al conector modular 8P8C usado en Ethernet sobre cobre?', options: ['RJ45', 'HDMI', 'USB‑C', 'BNC de vídeo'], answer: 0, hint: 'Tiene ocho posiciones y ocho contactos.', explain: 'El conector 8P8C usado en Ethernet se conoce habitualmente como RJ45, aunque 8P8C es el término técnico preciso.' },
      { prompt: '¿Qué medio conviene para larga distancia y alta inmunidad eléctrica?', options: ['Coaxial', 'Fibra óptica', 'UTP Cat 3', 'Cable plano'], answer: 1, hint: 'Transporta pulsos de luz.', explain: 'La fibra ofrece gran alcance y no sufre interferencia electromagnética.' },
      { prompt: '¿Cuál es la longitud máxima típica de un canal Ethernet de cobre?', options: ['10 m', '50 m', '100 m', '500 m'], answer: 2, hint: 'Incluye enlace permanente y latiguillos.', explain: 'El límite típico del canal de cobre Ethernet es 100 metros.' },
    ],
  },
];

export const roadmap = [
  { level: 'Maestro', icon: '◆', note: 'Simulaciones avanzadas de operación y respuesta', status: 'Próximamente', challenges: [
    { title:'Segmentación bajo ataque', type:'Arrastrar ACL y VLAN', icon:'▦' },
    { title:'Sala de incidentes', type:'Consola y análisis forense', icon:'⌁' },
    { title:'Arquitectura resiliente', type:'Construcción de topología', icon:'◎' },
  ] },
  { level: 'Leyenda', icon: '✦', note: 'Escape room integral de infraestructura bajo presión', status: 'Próximamente', challenges: [
    { title:'El apagón global', type:'Decisiones contrarreloj', icon:'⚡' },
    { title:'Protocolo cero', type:'Misión adaptativa', icon:'⌘' },
    { title:'Núcleo de la red', type:'Desafío final multicapa', icon:'◈' },
  ] },
];
