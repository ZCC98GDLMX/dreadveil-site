"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const content = {
  es: {
    nav: {
      about: "Sobre el juego",
      features: "Características",
      gameplay: "Gameplay",
      systems: "Systems",
      knight: "Knight",
      roadmap: "Roadmap",
      community: "Comunidad",
      gallery: "Galería",
      wishlist: "Wishlist",
      menu: "Menú",
    },
    hero: {
      tag: "Turn-Based Strategy RPG",
      description:
        "Un RPG táctico por turnos de fantasía oscura. Forma tu escuadrón, domina cada batalla y sobrevive a los horrores que emergen desde el velo.",
      primary: "Ver características",
      secondary: "Conocer más",
    },
    about: {
      tag: "Sobre el juego",
      title: "Estrategia, oscuridad y decisiones que pesan",
      text: "Dreadveil es un RPG de estrategia por turnos ambientado en un mundo decadente consumido por la niebla. Cada batalla exige lectura del terreno, control del grupo y decisiones difíciles dentro y fuera del combate.",
      boxTitle: "Experiencia principal",
      points: [
        "Combate táctico por turnos",
        "Gestión de escuadrón y progresión",
        "Ambientación dark fantasy",
        "Enemigos corruptos y reliquias antiguas",
      ],
    },
    features: {
      tag: "Características",
      title: "Diseñado para amantes del RPG táctico",
      cards: [
        {
          title: "Combate táctico",
          description:
            "Peleas por turnos donde el posicionamiento, las habilidades y el orden de acción definen cada encuentro.",
        },
        {
          title: "Mundo oscuro",
          description:
            "Explora ruinas, bosques malditos y fortalezas caídas envueltas en niebla, corrupción y secretos antiguos.",
        },
        {
          title: "Escuadrón personalizable",
          description:
            "Recluta guerreros, mejora habilidades, combina roles y adapta tu estrategia para cada misión.",
        },
      ],
    },
    gameplay: {
      tag: "Gameplay",
      title: "Estrategia en cada decisión",
      combatTitle: "Combate táctico por turnos",
      combatText:
        "Forma tu grupo y decide cada acción con precisión. El orden de ataque, las habilidades y la supervivencia del escuadrón definen el resultado de cada batalla.",
      combatPoints: [
        "Batallas por turnos con enfoque estratégico",
        "Gestión de HP, AP y daño enemigo",
        "Composición táctica del equipo",
      ],
      explorationTitle: "Exploración de zonas oscuras",
      explorationText:
        "Recorre regiones hostiles, portales, ciudades y áreas infestadas por criaturas corruptas. Cada mapa introduce nuevos enemigos, rutas y peligros.",
      explorationPoints: [
        "Mundos conectados por portales",
        "Biomas y escenarios distintos",
        "Jefes, élites y progresión por zonas",
      ],
      inventoryTitle: "Inventario, equipo y builds",
      inventoryText:
        "Equipa a tu personaje, administra objetos y optimiza tu build para cada combate. La preparación fuera de batalla es clave para sobrevivir.",
      inventoryPoints: [
        "Sistema de equipamiento por slots",
        "Gestión visual de inventario",
        "Preparación táctica antes de cada misión",
      ],
      townTitle: "Ciudad, NPCs y preparación",
      townText:
        "Visita la ciudad principal para entrenar, comerciar, interactuar con NPCs y prepararte para los próximos desafíos del reino.",
      townPoints: [
        "Hub central con personajes clave",
        "Tiendas, entrenamiento y progreso",
        "Preparación antes del siguiente portal",
      ],
    },
    systems: {
      tag: "Systems",
      title: "Habilidades, disciplinas y secuencias",
      skillsTitle: "Disciplinas y habilidades",
      skillsText:
        "Knight ya dispone de un sistema de disciplinas con habilidades ofensivas y defensivas. Cada técnica cambia la forma en la que el personaje responde al combate.",
      skillsPoints: [
        "Habilidades activas por disciplina",
        "Técnicas ofensivas, defensivas y de control",
        "Builds distintas según el estilo de juego",
      ],
      sequenceTitle: "Sistema de secuencia de ataque",
      sequenceText:
        "Configura el orden de tus acciones y define cómo se ejecuta el turno. Este sistema añade una capa táctica real, permitiendo preparar cadenas de ataque y prioridades antes del combate.",
      sequencePoints: [
        "Secuencia de acciones configurable",
        "Priorización de objetivos",
        "Más control estratégico por turno",
      ],
    },
    knight: {
      tag: "Clase jugable",
      title: "Knight",
      intro:
        "Knight es la primera clase jugable de Dreadveil. Está diseñado para resistir el frente, castigar objetivos clave y evolucionar visual y mecánicamente a medida que avanza la progresión del juego.",
      sideTitle: "El frente de batalla",
      sideText:
        "Knight combina resistencia, presión ofensiva y control del combate. Es la base del escuadrón actual y la clase que define el ritmo de los enfrentamientos en la build jugable.",
      points: [
        "Especialista en combate cuerpo a cuerpo",
        "Alta supervivencia y presencia en primera línea",
        "Habilidades ofensivas, defensivas y de control",
        "Progresión visual por fases y variantes",
      ],
      progressionTitle: "Progresión del Knight",
      stages: {
        origin: {
          title: "Origen",
          text: "La forma inicial, frágil y marcada por la supervivencia.",
        },
        ironbound: {
          title: "Ironbound",
          text: "La armadura toma forma y el Knight se consolida como defensor.",
        },
        guardian: {
          title: "Guardian",
          text: "Equilibrio entre defensa, autoridad y presencia táctica.",
        },
        ascended: {
          title: "Ascended",
          text: "Una evolución superior marcada por poder y pureza arcana.",
        },
        abyssal: {
          title: "Abyssal",
          text: "La forma corrompida de alto nivel, dominada por el fuego del velo.",
        },
      },
    },
    roadmap: {
      tag: "Roadmap",
      title: "Estado actual del desarrollo",
      nowTitle: "Disponible ahora",
      nowText:
        "Knight es la primera clase jugable. El núcleo de combate, inventario, secuencia de ataque, ciudad y múltiples mapas ya forman parte del desarrollo actual.",
      nextTitle: "Próximamente",
      nextText:
        "Más mapas, nuevas zonas, más contenido jugable, mejoras de progresión, y la llegada futura de Archer y Mage.",
      laterTitle: "Más adelante",
      laterText:
        "Steam page, comunidad, nuevas clases, expansión del mundo y más sistemas avanzados para el endgame.",
    },
    community: {
      tag: "Comunidad",
      title: "Sigue el desarrollo de Dreadveil",
      text: "Todavía puedes reemplazar estos enlaces más adelante. Por ahora sirven como placeholders para tu comunidad y canales oficiales.",
      discord: "Discord",
      youtube: "YouTube",
      steam: "Steam",
      contact: "Contacto",
    },
    gallery: {
      tag: "Galería de marca",
      title: "Identidad visual de Dreadveil",
      full: "Logo principal",
      simple: "Logo simplificado",
      icon: "Ícono oficial",
    },
    wishlist: {
      tag: "Únete al viaje",
      title: "Añade Dreadveil a tu lista",
      text: "Sigue el desarrollo, mira novedades del proyecto y prepárate para entrar al velo.",
      primary: "Próximamente en Steam",
      secondary: "Ver identidad visual",
    },
    footer: "© 2026 Dreadveil. Todos los derechos reservados.",
  },

  en: {
    nav: {
      about: "About",
      features: "Features",
      gameplay: "Gameplay",
      systems: "Systems",
      knight: "Knight",
      roadmap: "Roadmap",
      community: "Community",
      gallery: "Gallery",
      wishlist: "Wishlist",
      menu: "Menu",
    },
    hero: {
      tag: "Turn-Based Strategy RPG",
      description:
        "A dark fantasy turn-based tactical RPG. Build your squad, master every battle, and survive the horrors emerging from beyond the veil.",
      primary: "View features",
      secondary: "Learn more",
    },
    about: {
      tag: "About the game",
      title: "Strategy, darkness, and meaningful decisions",
      text: "Dreadveil is a turn-based strategy RPG set in a decaying world consumed by mist. Every battle demands terrain awareness, squad control, and difficult choices both in and out of combat.",
      boxTitle: "Core experience",
      points: [
        "Turn-based tactical combat",
        "Squad management and progression",
        "Dark fantasy atmosphere",
        "Corrupted enemies and ancient relics",
      ],
    },
    features: {
      tag: "Features",
      title: "Designed for tactical RPG fans",
      cards: [
        {
          title: "Tactical combat",
          description:
            "Turn-based encounters where positioning, abilities, and action order define every fight.",
        },
        {
          title: "Dark world",
          description:
            "Explore ruins, cursed forests, and fallen strongholds wrapped in mist, corruption, and ancient secrets.",
        },
        {
          title: "Customizable squad",
          description:
            "Recruit warriors, improve abilities, combine roles, and adapt your strategy for every mission.",
        },
      ],
    },
    gameplay: {
      tag: "Gameplay",
      title: "Strategy in every decision",
      combatTitle: "Turn-based tactical combat",
      combatText:
        "Build your party and decide every action with precision. Attack order, abilities, and squad survival define the outcome of every battle.",
      combatPoints: [
        "Turn-based battles with strategic depth",
        "HP, AP, and enemy damage management",
        "Tactical team composition",
      ],
      explorationTitle: "Exploration through dark zones",
      explorationText:
        "Travel through hostile regions, portals, cities, and corrupted areas. Each map introduces new enemies, routes, and dangers.",
      explorationPoints: [
        "Worlds connected by portals",
        "Distinct biomes and scenarios",
        "Bosses, elites, and zone progression",
      ],
      inventoryTitle: "Inventory, gear, and builds",
      inventoryText:
        "Equip your character, manage items, and optimize your build for each encounter. Preparation outside battle is key to survival.",
      inventoryPoints: [
        "Slot-based equipment system",
        "Visual inventory management",
        "Tactical preparation before each mission",
      ],
      townTitle: "Town, NPCs, and preparation",
      townText:
        "Visit the main town to train, trade, interact with NPCs, and prepare for the kingdom’s next challenges.",
      townPoints: [
        "Central hub with key characters",
        "Shops, training, and progression",
        "Preparation before the next portal",
      ],
    },
    systems: {
      tag: "Systems",
      title: "Skills, disciplines, and sequences",
      skillsTitle: "Disciplines and skills",
      skillsText:
        "Knight already features a discipline system with offensive and defensive abilities. Each technique changes how the character responds in battle.",
      skillsPoints: [
        "Class-based active abilities",
        "Offensive, defensive, and control techniques",
        "Different builds depending on playstyle",
      ],
      sequenceTitle: "Attack sequence system",
      sequenceText:
        "Configure the order of your actions and define how your turn unfolds. This system adds real tactical depth by allowing pre-built attack chains and priorities.",
      sequencePoints: [
        "Configurable action sequence",
        "Target prioritization",
        "More strategic control each turn",
      ],
    },
    knight: {
      tag: "Playable class",
      title: "Knight",
      intro:
        "Knight is the first playable class in Dreadveil. It is built to hold the front line, punish key targets, and evolve both visually and mechanically throughout the game.",
      sideTitle: "The front line",
      sideText:
        "Knight combines durability, offensive pressure, and combat control. It is the foundation of the current squad and defines the rhythm of the playable build.",
      points: [
        "Melee combat specialist",
        "High survivability and front-line presence",
        "Offensive, defensive, and control abilities",
        "Visual progression through multiple phases",
      ],
      progressionTitle: "Knight progression",
      stages: {
        origin: {
          title: "Origin",
          text: "The initial form, fragile and defined by survival.",
        },
        ironbound: {
          title: "Ironbound",
          text: "Armor takes shape and the Knight becomes a true defender.",
        },
        guardian: {
          title: "Guardian",
          text: "A balance of defense, authority, and tactical presence.",
        },
        ascended: {
          title: "Ascended",
          text: "A higher evolution marked by power and arcane purity.",
        },
        abyssal: {
          title: "Abyssal",
          text: "A high-level corrupted form ruled by the fire beyond the veil.",
        },
      },
    },
    roadmap: {
      tag: "Roadmap",
      title: "Current development state",
      nowTitle: "Available now",
      nowText:
        "Knight is the first playable class. Core combat, inventory, attack sequencing, town hub, and multiple maps are already part of the current development.",
      nextTitle: "Coming next",
      nextText:
        "More maps, new zones, more playable content, progression improvements, and the future arrival of Archer and Mage.",
      laterTitle: "Later on",
      laterText:
        "Steam page, community expansion, new classes, world expansion, and more advanced endgame systems.",
    },
    community: {
      tag: "Community",
      title: "Follow Dreadveil development",
      text: "You can replace these links later. For now, they work as placeholders for your community and official channels.",
      discord: "Discord",
      youtube: "YouTube",
      steam: "Steam",
      contact: "Contact",
    },
    gallery: {
      tag: "Brand gallery",
      title: "Dreadveil visual identity",
      full: "Main logo",
      simple: "Simplified logo",
      icon: "Official icon",
    },
    wishlist: {
      tag: "Join the journey",
      title: "Add Dreadveil to your list",
      text: "Follow development, discover updates, and prepare to enter the veil.",
      primary: "Coming to Steam",
      secondary: "View visual identity",
    },
    footer: "© 2026 Dreadveil. All rights reserved.",
  },
};

export default function HomePage() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = content[language];
  const features = t.features.cards;

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-simple.png"
              alt="Dreadveil"
              width={140}
              height={40}
              className="h-auto w-[120px] md:w-[140px]"
              priority
            />
          </Link>

          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              {t.nav.about}
            </a>
            <a href="#features" className="transition hover:text-white">
              {t.nav.features}
            </a>
            <a href="#gameplay" className="transition hover:text-white">
              {t.nav.gameplay}
            </a>
            <a href="#systems" className="transition hover:text-white">
              {t.nav.systems}
            </a>
            <a href="#classes" className="transition hover:text-white">
              {t.nav.knight}
            </a>
            <a href="#roadmap" className="transition hover:text-white">
              {t.nav.roadmap}
            </a>
            <a href="#community" className="transition hover:text-white">
              {t.nav.community}
            </a>
            <a href="#gallery" className="transition hover:text-white">
              {t.nav.gallery}
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex overflow-hidden rounded-lg border border-white/10">
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-2 text-xs font-semibold transition ${
                  language === "es"
                    ? "bg-red-600 text-white"
                    : "bg-black text-zinc-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-2 text-xs font-semibold transition ${
                  language === "en"
                    ? "bg-red-600 text-white"
                    : "bg-black text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="#wishlist"
              className="rounded-lg border border-red-600 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-600 hover:text-white"
            >
              {t.nav.wishlist}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="flex overflow-hidden rounded-lg border border-white/10">
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-2 text-[10px] font-semibold transition ${
                  language === "es"
                    ? "bg-red-600 text-white"
                    : "bg-black text-zinc-400 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-2 text-[10px] font-semibold transition ${
                  language === "en"
                    ? "bg-red-600 text-white"
                    : "bg-black text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:text-white"
            >
              {t.nav.menu}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-zinc-300">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.about}
              </a>
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.features}
              </a>
              <a href="#gameplay" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.gameplay}
              </a>
              <a href="#systems" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.systems}
              </a>
              <a href="#classes" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.knight}
              </a>
              <a href="#roadmap" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.roadmap}
              </a>
              <a href="#community" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.community}
              </a>
              <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.gallery}
              </a>
              <a href="#wishlist" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.wishlist}
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(160,0,0,0.38),transparent_30%),linear-gradient(to_bottom,#050505,#000000)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.82))]" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-12 text-center md:py-16">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-500">
            {t.hero.tag}
          </p>

          <div className="mb-8">
            <Image
              src="/images/logo-full.png"
              alt="Dreadveil logo"
              width={1100}
              height={619}
              className="h-auto w-full max-w-5xl drop-shadow-[0_0_30px_rgba(180,0,0,0.35)]"
              priority
            />
          </div>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
            {t.hero.description}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#features"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-500"
            >
              {t.hero.primary}
            </a>

            <a
              href="#about"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section-glow relative mx-auto max-w-6xl px-6 py-20">
        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
              {t.about.tag}
            </p>
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              {t.about.title}
            </h2>
            <p className="text-lg leading-8 text-zinc-400">{t.about.text}</p>
          </div>

          <div className="card-hover rounded-3xl border border-white/10 bg-zinc-950 p-8 shadow-2xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
              {t.about.boxTitle}
            </p>
            <ul className="space-y-4 text-zinc-300">
              {t.about.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          {t.features.tag}
        </p>
        <h2 className="mb-10 text-3xl font-bold md:text-5xl">
          {t.features.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="leading-7 text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gameplay" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          {t.gameplay.tag}
        </p>

        <h2 className="mb-16 text-3xl font-bold md:text-5xl">
          {t.gameplay.title}
        </h2>

        <div className="space-y-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
              <Image
                src="/images/gameplay/partycombat.png"
                alt="Dreadveil party combat"
                width={1200}
                height={700}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">
                {t.gameplay.combatTitle}
              </h3>
              <p className="mb-4 leading-8 text-zinc-400">
                {t.gameplay.combatText}
              </p>
              <ul className="space-y-2 text-zinc-300">
                {t.gameplay.combatPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black md:order-2">
              <Image
                src="/images/gameplay/map3.png"
                alt="Dreadveil world exploration"
                width={1200}
                height={700}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="md:order-1">
              <h3 className="mb-4 text-2xl font-bold">
                {t.gameplay.explorationTitle}
              </h3>
              <p className="mb-4 leading-8 text-zinc-400">
                {t.gameplay.explorationText}
              </p>
              <ul className="space-y-2 text-zinc-300">
                {t.gameplay.explorationPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
              <Image
                src="/images/gameplay/inventory.png"
                alt="Dreadveil inventory system"
                width={1200}
                height={700}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">
                {t.gameplay.inventoryTitle}
              </h3>
              <p className="mb-4 leading-8 text-zinc-400">
                {t.gameplay.inventoryText}
              </p>
              <ul className="space-y-2 text-zinc-300">
                {t.gameplay.inventoryPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black md:order-2">
              <Image
                src="/images/gameplay/town.png"
                alt="Dreadveil town hub"
                width={1200}
                height={700}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="md:order-1">
              <h3 className="mb-4 text-2xl font-bold">
                {t.gameplay.townTitle}
              </h3>
              <p className="mb-4 leading-8 text-zinc-400">
                {t.gameplay.townText}
              </p>
              <ul className="space-y-2 text-zinc-300">
                {t.gameplay.townPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          {t.knight.tag}
        </p>

        <h2 className="mb-6 text-3xl font-bold md:text-5xl">
          {t.knight.title}
        </h2>

        <p className="mb-14 max-w-3xl text-lg leading-8 text-zinc-400">
          {t.knight.intro}
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="card-hover overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8">
            <Image
              src="/images/knight/guardian.png"
              alt="Knight class"
              width={900}
              height={1400}
              className="mx-auto h-auto max-h-[700px] w-auto"
            />
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold">{t.knight.sideTitle}</h3>

            <p className="mb-4 leading-8 text-zinc-400">{t.knight.sideText}</p>

            <ul className="space-y-3 text-zinc-300">
              {t.knight.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-2xl font-bold">
            {t.knight.progressionTitle}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            <div className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-4 text-center">
              <Image
                src="/images/knight/origin.png"
                alt="Knight origin form"
                width={500}
                height={900}
                className="mx-auto h-64 w-auto object-contain"
              />
              <h4 className="mt-4 text-lg font-semibold">
                {t.knight.stages.origin.title}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {t.knight.stages.origin.text}
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-4 text-center">
              <Image
                src="/images/knight/ironbound.png"
                alt="Knight ironbound form"
                width={500}
                height={900}
                className="mx-auto h-64 w-auto object-contain"
              />
              <h4 className="mt-4 text-lg font-semibold">
                {t.knight.stages.ironbound.title}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {t.knight.stages.ironbound.text}
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-4 text-center">
              <Image
                src="/images/knight/guardian.png"
                alt="Knight guardian form"
                width={500}
                height={900}
                className="mx-auto h-64 w-auto object-contain"
              />
              <h4 className="mt-4 text-lg font-semibold">
                {t.knight.stages.guardian.title}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {t.knight.stages.guardian.text}
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-4 text-center">
              <Image
                src="/images/knight/ascended.png"
                alt="Knight ascended form"
                width={500}
                height={900}
                className="mx-auto h-64 w-auto object-contain"
              />
              <h4 className="mt-4 text-lg font-semibold">
                {t.knight.stages.ascended.title}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {t.knight.stages.ascended.text}
              </p>
            </div>

            <div className="card-hover rounded-2xl border border-red-900/40 bg-zinc-950 p-4 text-center">
              <Image
                src="/images/knight/abyssal.png"
                alt="Knight abyssal form"
                width={500}
                height={900}
                className="mx-auto h-64 w-auto object-contain"
              />
              <h4 className="mt-4 text-lg font-semibold text-red-400">
                {t.knight.stages.abyssal.title}
              </h4>
              <p className="mt-2 text-sm text-zinc-400">
                {t.knight.stages.abyssal.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          {t.systems.tag}
        </p>

        <h2 className="mb-16 text-3xl font-bold md:text-5xl">
          {t.systems.title}
        </h2>

        <div className="space-y-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
              <Image
                src="/images/gameplay/skills.png"
                alt="Knight disciplines and skills"
                width={1200}
                height={700}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">
                {t.systems.skillsTitle}
              </h3>
              <p className="mb-4 leading-8 text-zinc-400">
                {t.systems.skillsText}
              </p>
              <ul className="space-y-2 text-zinc-300">
                {t.systems.skillsPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black md:order-2">
              <Image
                src="/images/gameplay/sequence.png"
                alt="Attack sequence system"
                width={1200}
                height={700}
                className="w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="md:order-1">
              <h3 className="mb-4 text-2xl font-bold">
                {t.systems.sequenceTitle}
              </h3>
              <p className="mb-4 leading-8 text-zinc-400">
                {t.systems.sequenceText}
              </p>
              <ul className="space-y-2 text-zinc-300">
                {t.systems.sequencePoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section-glow relative mx-auto max-w-6xl px-6 py-24">
        <div className="relative z-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
            {t.roadmap.tag}
          </p>

          <h2 className="mb-10 text-3xl font-bold md:text-5xl">
            {t.roadmap.title}
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="card-hover rounded-2xl border border-green-900/30 bg-zinc-950 p-6">
              <h3 className="mb-3 text-xl font-semibold">{t.roadmap.nowTitle}</h3>
              <p className="leading-7 text-zinc-400">{t.roadmap.nowText}</p>
            </div>

            <div className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-6">
              <h3 className="mb-3 text-xl font-semibold">{t.roadmap.nextTitle}</h3>
              <p className="leading-7 text-zinc-400">{t.roadmap.nextText}</p>
            </div>

            <div className="card-hover rounded-2xl border border-red-900/30 bg-zinc-950 p-6">
              <h3 className="mb-3 text-xl font-semibold">{t.roadmap.laterTitle}</h3>
              <p className="leading-7 text-zinc-400">{t.roadmap.laterText}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          {t.community.tag}
        </p>

        <h2 className="mb-6 text-3xl font-bold md:text-5xl">
          {t.community.title}
        </h2>

        <p className="mb-10 max-w-3xl leading-8 text-zinc-400">
          {t.community.text}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="#"
            className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center"
          >
            <h3 className="text-xl font-semibold">{t.community.discord}</h3>
            <p className="mt-2 text-sm text-zinc-400">discord.gg/eW8W5TzKza</p>
          </a>

          <a
            href="#"
            className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center"
          >
            <h3 className="text-xl font-semibold">{t.community.youtube}</h3>
            <p className="mt-2 text-sm text-zinc-400">youtube.com/@dreadveil</p>
          </a>

          <a
            href="#"
            className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center"
          >
            <h3 className="text-xl font-semibold">{t.community.steam}</h3>
            <p className="mt-2 text-sm text-zinc-400">steam coming soon</p>
          </a>

          <a
            href="mailto:your@email.com"
            className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center"
          >
            <h3 className="text-xl font-semibold">{t.community.contact}</h3>
            <p className="mt-2 text-sm text-zinc-400">dev.dreadveil@gmail.com</p>
          </a>
        </div>
      </section>

      <section id="gallery" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
          {t.gallery.tag}
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-5xl">
          {t.gallery.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-4">
            <Image
              src="/images/logo-full.png"
              alt="Dreadveil full logo"
              width={700}
              height={500}
              className="h-auto w-full rounded-xl"
            />
            <p className="mt-4 text-sm text-zinc-400">{t.gallery.full}</p>
          </div>

          <div className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-4">
            <Image
              src="/images/logo-simple.png"
              alt="Dreadveil simplified logo"
              width={700}
              height={500}
              className="h-auto w-full rounded-xl"
            />
            <p className="mt-4 text-sm text-zinc-400">{t.gallery.simple}</p>
          </div>

          <div className="card-hover rounded-2xl border border-white/10 bg-zinc-950 p-4">
            <Image
              src="/images/logo-icon.png"
              alt="Dreadveil icon"
              width={700}
              height={700}
              className="h-auto w-full rounded-xl"
            />
            <p className="mt-4 text-sm text-zinc-400">{t.gallery.icon}</p>
          </div>
        </div>
      </section>

      <section id="wishlist" className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="card-hover rounded-3xl border border-red-900/40 bg-zinc-950 p-10">
          <div className="mx-auto mb-6 flex justify-center">
            <Image
              src="/images/logo-simple.png"
              alt="Dreadveil"
              width={220}
              height={70}
              className="h-auto w-[180px] md:w-[220px]"
            />
          </div>

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-red-500">
            {t.wishlist.tag}
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            {t.wishlist.title}
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-zinc-400">
            {t.wishlist.text}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-500"
            >
              {t.wishlist.primary}
            </a>

            <a
              href="#gallery"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-semibold transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              {t.wishlist.secondary}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-zinc-500 md:flex-row md:text-left">
          <p>{t.footer}</p>

          <div className="flex gap-4 text-sm">
            <a href="#" className="transition hover:text-white">
              Steam
            </a>
            <a href="#" className="transition hover:text-white">
              Discord
            </a>
            <a href="#" className="transition hover:text-white">
              YouTube
            </a>
            <a href="mailto:your@email.com" className="transition hover:text-white">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}