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
  level: 'Inicial' | 'Intermedio' | 'Maestro';
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
  {
    title: 'Segmentación bajo ataque', code: '07', level: 'Maestro', duration: '18 min', icon: '◇', xp: 780,
    description: 'Contén un ataque lateral mediante VLAN, ACL y una zona de servicios aislada.',
    briefing: 'Un equipo comprometido intenta alcanzar servidores internos. Segmenta la red y permite únicamente los flujos indispensables.',
    questions: [
      { prompt: 'Usuarios de la VLAN 20 solo deben consultar por HTTPS al servidor 10.10.50.10. ¿Qué regla es más precisa?', options: ['Permitir TCP desde VLAN 20 hacia 10.10.50.10 puerto 443 y denegar el resto', 'Permitir todo desde VLAN 20', 'Denegar únicamente ICMP', 'Permitir UDP hacia cualquier servidor'], answer: 0, hint: 'Aplica mínimo privilegio por origen, destino, protocolo y puerto.', explain: 'Una ACL específica para TCP/443 permite el servicio requerido y reduce el movimiento lateral.' },
      { prompt: '¿Dónde conviene ubicar un servidor web público para limitar su acceso a la red interna?', options: ['En la VLAN de administración', 'En una DMZ aislada', 'En la misma VLAN de usuarios', 'Directamente en el enlace troncal'], answer: 1, hint: 'Busca una zona intermedia con reglas propias.', explain: 'La DMZ separa los servicios expuestos de la red interna y permite controlar los flujos entre zonas.' },
      { prompt: 'Un puerto de usuario recibe tramas con etiquetas de múltiples VLAN. ¿Qué configuración debes revisar primero?', options: ['Que sea puerto access en la VLAN autorizada', 'Que tenga más velocidad', 'Que use DNS público', 'Que tenga PoE desactivado'], answer: 0, hint: 'Un equipo final normalmente pertenece a una sola VLAN.', explain: 'Configurar el puerto como access evita que un host inyecte tráfico etiquetado de otras VLAN.' },
    ],
  },
  {
    title: 'Sala de incidentes', code: '08', level: 'Maestro', duration: '20 min', icon: '⌁', xp: 840,
    description: 'Prioriza evidencias, contiene el incidente y conserva información forense.',
    briefing: 'El monitoreo detecta conexiones anómalas desde un servidor crítico. Debes actuar sin destruir evidencia útil.',
    questions: [
      { prompt: 'Confirmas tráfico de comando y control desde un servidor. ¿Cuál es la primera acción operativa más segura?', options: ['Formatearlo inmediatamente', 'Aislarlo de la red preservando su estado', 'Publicar el incidente', 'Borrar todos los registros'], answer: 1, hint: 'Primero limita el daño sin destruir evidencia.', explain: 'El aislamiento contiene la comunicación maliciosa y mantiene el sistema disponible para adquisición forense.' },
      { prompt: '¿Qué fuentes permiten reconstruir quién se conectó, desde dónde y a qué hora?', options: ['Registros de autenticación y flujo de red', 'Nombre del fondo de pantalla', 'Inventario de mobiliario', 'Resolución del monitor'], answer: 0, hint: 'Correlaciona identidad, tiempo y comunicaciones.', explain: 'Los logs de autenticación y de flujo permiten correlacionar accesos con conexiones observadas.' },
      { prompt: 'Antes de analizar una imagen forense, ¿cómo compruebas que no fue alterada?', options: ['Comparando su hash criptográfico', 'Renombrando el archivo', 'Comprimiéndola dos veces', 'Abriéndola como administrador'], answer: 0, hint: 'Necesitas una huella reproducible.', explain: 'Un hash calculado al adquirir y al analizar la imagen permite verificar su integridad.' },
    ],
  },
  {
    title: 'Arquitectura resiliente', code: '09', level: 'Maestro', duration: '20 min', icon: '◎', xp: 900,
    description: 'Elimina puntos únicos de fallo y diseña una recuperación verificable.',
    briefing: 'La red debe seguir operando aunque falle un enlace o un gateway. Construye redundancia sin crear bucles.',
    questions: [
      { prompt: 'Dos switches tienen enlaces redundantes de capa 2. ¿Qué protocolo evita bucles de conmutación?', options: ['STP', 'DHCP', 'SNMP', 'NAT'], answer: 0, hint: 'Bloquea rutas redundantes y las activa si son necesarias.', explain: 'Spanning Tree Protocol mantiene una topología lógica sin bucles y conserva enlaces alternativos.' },
      { prompt: '¿Qué solución mantiene disponible el gateway si falla el router activo?', options: ['Un protocolo de redundancia de primer salto como VRRP', 'Un servidor FTP adicional', 'Cambiar la máscara a /8', 'Desactivar las rutas dinámicas'], answer: 0, hint: 'Varios routers comparten una dirección virtual.', explain: 'VRRP permite que otro router asuma la dirección virtual usada como gateway por los hosts.' },
      { prompt: '¿Qué evidencia demuestra mejor que el plan de recuperación funciona?', options: ['Una copia creada hace meses', 'Una restauración probada y documentada', 'Más espacio libre en disco', 'Una contraseña más larga'], answer: 1, hint: 'Una copia no sirve hasta comprobar que puede recuperarse.', explain: 'Las pruebas periódicas de restauración validan tiempos, integridad y pasos reales de recuperación.' },
    ],
  },
];

export const roadmap = [
  { level: 'Leyenda', icon: '✦', note: 'Escape room integral de infraestructura bajo presión', status: 'Próximamente', challenges: [
    { title:'El apagón global', type:'Decisiones contrarreloj', icon:'⚡' },
    { title:'Protocolo cero', type:'Misión adaptativa', icon:'⌘' },
    { title:'Núcleo de la red', type:'Desafío final multicapa', icon:'◈' },
  ] },
];
