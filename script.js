const CONFIG = {
    github: "https://github.com/VictorTourino",
    linkedin: "https://www.linkedin.com/in/victor-tourino-fernandez",
    email: "touri.victor22@gmail.com",
    cv: "docs/CV_Victor_Tourino_Fernandez.pdf",
    defaultLang: "es",
    storageKey: "portfolio-lang"
};

const translations = {
    es: {
        navProjects: "Proyectos",
        navExperience: "Experiencia",
        navStack: "Stack",
        navEducation: "Formación",
        navContact: "Contacto",
        available: "Disponible para prácticas",
        role: "Desarrollador Java / Backend Junior",
        ctaContact: "Contactar",
        ctaCv: "Descargar CV",
        seekTitle: "Qué busco",
        seekRoleLabel: "Puesto",
        seekRole: "Prácticas o puesto junior de desarrollador de software, con foco en Java / backend. Me adapto a otros stacks y tecnologías.",
        seekModeLabel: "Modalidad",
        seekMode: "Remoto, híbrido o presencial en Castellón, Valencia y alrededores. Carné B y vehículo propio.",
        seekOfferLabel: "Qué aporto",
        seekOffer: "Base sólida de Java y POO, proyectos propios y de equipo, y experiencia en pruebas de sistemas IoT con Docker.",
        projectsTitle: "Proyectos",
        viewCode: "Ver código",
        repoSoon: "Repositorio próximamente",
        desktopStatus: "Aplicación de escritorio",
        p1Desc: "Simulador de trading educativo. API REST de operaciones de compra y venta con datos reales de mercado de una API externa. Proyecto personal en desarrollo.",
        p1Status: "En desarrollo",
        p2Title: "App de pádel para ayuntamientos (TuPadel)",
        p2Desc: "Gestión de reservas de pistas de pádel, desarrollada como Trabajo Fin de Grado en equipo de 4 personas. Me encargo del backend en Java con Spring Boot y de las migraciones de la base de datos con Flyway.",
        p2Status: "Trabajo en equipo · En curso",
        p3Desc: "Aplicación CRUD de escritorio para gestionar usuarios de una base de datos MySQL. Incluye contraseñas con jBCrypt y prevención de inyección SQL.",
        p4Desc: "Aplicación de escritorio para la gestión CRUD de transacciones financieras, con una clase wrapper para el manejo del conector de MySQL.",
        expTitle: "Experiencia",
        exp1Title: "Técnico de Sistemas IoT y QA (Prácticas FCT)",
        exp1Company: "Boreal Open Systems",
        exp1Date: "Ene 2026 - Feb 2026",
        exp1Dur: "2 meses",
        exp1Desc: "Prácticas FCT del Grado Superior (1º de DAM). Pruebas y monitorización de un sistema de actualizaciones remotas para dispositivos IoT.",
        exp1b1: "Monitorización del servidor de actualizaciones remotas (OTA) desplegado sobre Docker.",
        exp1b2: "Pruebas de estrés (QA) y validación de fallos en placas Raspberry Pi Zero con Linux.",
        exp1b3: "Trabajo bajo metodologías ágiles con Odoo ERP para la gestión de tareas y Slack para la comunicación.",
        exp2Title: "Técnico Informático Freelance",
        exp2Company: "Autónomo",
        exp2Date: "Jun 2026 - Nov 2026",
        exp2Dur: "6 meses",
        exp2Desc: "Soporte técnico a clientes particulares.",
        exp2b1: "Soporte técnico, diagnóstico y reparación de hardware y software en PC y móviles.",
        exp2b2: "Atención al cliente y gestión del tiempo.",
        exp3Title: "Camarero",
        exp3Company: "Ágora",
        exp3Date: "Ago 2025 - Nov 2025",
        exp3Dur: "4 meses",
        exp3Desc: "Atención al cliente y trabajo en equipo en hostelería, con alta presión en horas punta.",
        exp4Title: "Técnico Informático (Prácticas FCT)",
        exp4Company: "Centro Educativo Blasco Ibáñez",
        exp4Date: "Mar 2025 - Jun 2025",
        exp4Dur: "4 meses",
        exp4Desc: "Prácticas FCT del Grado Medio (SMR).",
        exp4b1: "Gestión y actualización de la base de datos de la biblioteca mediante software interno.",
        stackTitle: "Stack",
        stackLang: "Lenguajes",
        stackBasic: "Nociones básicas",
        stackFw: "Frameworks",
        stackDb: "Bases de datos",
        stackTools: "Herramientas",
        stackLibs: "Librerías",
        educationTitle: "Formación",
        edu1Title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        edu1Meta: "DAVANTE MEDAC Castellón · 2025 - 2027 (en curso)",
        edu2Title: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
        edu2Meta: "IES El Caminás · 2023 - 2025",
        edu3Title: "Estudios profesionales de música",
        edu3Meta: "Conservatorio de Música de Castellón · 2015 - 2022",
        langTitle: "Idiomas y otros",
        langNative: "Español/Valenciano: nativo",
        cert1: "Inglés: nivel B2 (Cambridge)",
        cert2: "Carné de conducir (B) y vehículo propio",
        contactTitle: "Contacto",
        footer: "Web desarrollada por Víctor Touriño Fernández, utilizando HTML, CSS y JavaScript."
    },
    en: {
        navProjects: "Projects",
        navExperience: "Experience",
        navStack: "Stack",
        navEducation: "Education",
        navContact: "Contact",
        available: "Available for internships",
        role: "Junior Java / Backend Developer",
        ctaContact: "Get in touch",
        ctaCv: "Download CV",
        seekTitle: "What I'm looking for",
        seekRoleLabel: "Role",
        seekRole: "Internship or junior software developer position, focused on Java / backend. I adapt to other stacks and technologies.",
        seekModeLabel: "Work mode",
        seekMode: "Remote, hybrid or on-site in Castellón, Valencia and surroundings. Driving licence (B) and my own car.",
        seekOfferLabel: "What I bring",
        seekOffer: "Solid Java and OOP foundations, personal and team projects, and experience testing IoT systems with Docker.",
        projectsTitle: "Projects",
        viewCode: "View code",
        repoSoon: "Repository coming soon",
        desktopStatus: "Desktop application",
        p1Desc: "Educational trading simulator. Java REST API for buy and sell operations using real market data from an external API. Personal project in development.",
        p1Status: "In development",
        p2Title: "Padel court app for town councils (TuPadel)",
        p2Desc: "Court booking management, built as a Final Degree Project by a team of 4. I'm in charge of the Java backend with Spring Boot and of the database migrations with Flyway.",
        p2Status: "Team project · In progress",
        p3Desc: "Desktop CRUD application to manage users in a MySQL database. Includes password hashing with jBCrypt and SQL injection prevention.",
        p4Desc: "Desktop application for CRUD management of financial transactions, with a wrapper class to handle the MySQL connector.",
        expTitle: "Experience",
        exp1Title: "IoT Systems and QA Technician (Internship)",
        exp1Company: "Boreal Open Systems",
        exp1Date: "Jan 2026 - Feb 2026",
        exp1Dur: "2 months",
        exp1Desc: "Vocational training internship (1st year of DAM). Testing and monitoring of a remote update system for IoT devices.",
        exp1b1: "Monitoring of the remote update (OTA) server deployed on Docker.",
        exp1b2: "Stress testing (QA) and failure validation on Raspberry Pi Zero boards running Linux.",
        exp1b3: "Agile work with Odoo ERP for task management and Slack for communication.",
        exp2Title: "Freelance IT Technician",
        exp2Company: "Self-employed",
        exp2Date: "Jun 2026 - Nov 2026",
        exp2Dur: "6 months",
        exp2Desc: "IT support for private clients.",
        exp2b1: "Hardware and software support, diagnosis and repair on PCs and smartphones.",
        exp2b2: "Customer service and time management.",
        exp3Title: "Waiter",
        exp3Company: "Ágora",
        exp3Date: "Aug 2025 - Nov 2025",
        exp3Dur: "4 months",
        exp3Desc: "Customer service and teamwork in hospitality, under pressure during peak hours.",
        exp4Title: "IT Technician (Vocational Training Internship)",
        exp4Company: "Centro Educativo Blasco Ibáñez",
        exp4Date: "Mar 2025 - Jun 2025",
        exp4Dur: "4 months",
        exp4Desc: "Vocational training internship from the Intermediate Vocational Degree (SMR).",
        exp4b1: "Managed and updated the library database with an internal software tool.",
        stackTitle: "Stack",
        stackLang: "Languages",
        stackBasic: "Basic knowledge",
        stackFw: "Frameworks",
        stackDb: "Databases",
        stackTools: "Tools",
        stackLibs: "Libraries",
        educationTitle: "Education",
        edu1Title: "Higher Vocational Degree in Multiplatform Application Development (DAM)",
        edu1Meta: "DAVANTE MEDAC Castellón · 2025 - 2027 (in progress)",
        edu2Title: "Intermediate Vocational Degree in Microcomputer Systems and Networks (SMR)",
        edu2Meta: "IES El Caminás · 2023 - 2025",
        edu3Title: "Professional music studies",
        edu3Meta: "Music Conservatory of Castellón · 2015 - 2022",
        langTitle: "Languages and other",
        langNative: "Spanish/Valencian: native",
        cert1: "English: B2 level (Cambridge)",
        cert2: "Driving licence (B) and own car",
        contactTitle: "Contact",
        footer: "Website developed by Víctor Touriño Fernández, using HTML, CSS and JavaScript."
    }
};

const toggleBtn = document.getElementById("lang-toggle");
const langLabels = document.querySelectorAll("[data-lang-label]");

function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // Interruptor activado = inglés (palanca a la derecha, junto a "EN").
    toggleBtn.setAttribute("aria-checked", String(lang === "en"));
    toggleBtn.setAttribute(
        "aria-label",
        lang === "en" ? "Language: English. Switch to Spanish" : "Idioma: español. Cambiar a inglés"
    );

    langLabels.forEach((label) => {
        label.classList.toggle("is-active", label.dataset.langLabel === lang);
    });

    try {
        localStorage.setItem(CONFIG.storageKey, lang);
    } catch (err) {
        // Almacenamiento no disponible (modo privado, etc.): la preferencia no se guarda.
    }
}

function getSavedLanguage() {
    try {
        const saved = localStorage.getItem(CONFIG.storageKey);
        return translations[saved] ? saved : null;
    } catch (err) {
        return null;
    }
}

function applyLinks() {
    document.querySelectorAll("#github-link, #github-link-2").forEach((a) => {
        a.href = CONFIG.github;
    });
    document.querySelectorAll("#linkedin-link, #linkedin-link-2").forEach((a) => {
        a.href = CONFIG.linkedin;
    });
    document.querySelectorAll("#email-link, #contact-link, #contact-link-2").forEach((a) => {
        a.href = `mailto:${CONFIG.email}`;
    });
    document.getElementById("cv-link").href = CONFIG.cv;
}

toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "es";
    setLanguage(current === "es" ? "en" : "es");
});

// Pulsar directamente sobre "ES" o "EN" también cambia el idioma.
langLabels.forEach((label) => {
    label.addEventListener("click", () => {
        setLanguage(label.dataset.langLabel);
    });
});

applyLinks();
setLanguage(getSavedLanguage() || CONFIG.defaultLang);