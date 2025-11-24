// Content data for French and English
const content = {
  fr: {
    downloadBtn: "Télécharger / Imprimer",
    langBtn: "English",
    title: "Full-stack Developer",
    skills: "COMPÉTENCES",
    languages: "LANGUES",
    education: "FORMATION",
    experience: "EXPÉRIENCE PROFESSIONNELLE",
    languagesList: ["Anglais", "Français", "Espagnol"],
    experiences: [
      {
        title: "Full-stack Developer",
        company: "ComeUp",
        period: "Janvier 2022 - Aujourd'hui",
        location: "Remote",
        tasks: [
          "Plus de 70 projets complétés avec un taux de satisfaction client de 100%",
          "Développement de sites web personnalisés utilisant Laravel, Vue.js et Flask",
          "Création d'extensions et thèmes WordPress personnalisés",
          "Transformation de maquettes Figma et Photoshop en sites web responsifs et fonctionnels",
          "Création d'APIs personnalisées sécurisées et performantes",
          "Débogage de code PHP et JavaScript",
        ],
      },
      {
        title: "Junior Web Developer",
        company: "Oba Code",
        period: "Octobre 2019 - Septembre 2021",
        location: "Cotonou, Bénin",
        tasks: [
          "Utilisation de Git pour le contrôle de version afin de réduire les conflits de code",
          "Personnalisation de contenu avec WordPress, améliorant l'efficacité de la gestion de contenu",
          "Collaboration avec les designers et l'équipe de performance pour améliorer l'expérience utilisateur",
          "Briefing de l'équipe de développement sur les recherches et suggestions pour les sites web",
          "Participation aux stand-ups bi-mensuels avec revue et coaching de l'équipe",
        ],
      },
      {
        title: "Comptable",
        company: "AHVIC",
        period: "Décembre 2014 - Juin 2018",
        location: "Cotonou, Bénin",
        tasks: [
          "Préparation des registres financiers et états financiers",
          "Analyse budgétaire et mesures de contrôle des coûts",
          "Collaboration avec les auditeurs lors des audits financiers",
          "Fourniture de recommandations et d'analyses financières à la direction",
        ],
      },
    ],
  },
  en: {
    downloadBtn: "Download / Print",
    langBtn: "Français",
    title: "Full-stack Developer",
    skills: "SKILLS",
    languages: "LANGUAGES",
    education: "EDUCATION",
    experience: "WORK EXPERIENCE",
    languagesList: ["English", "French", "Spanish"],
    experiences: [
      {
        title: "Full-stack Developer",
        company: "ComeUp",
        period: "January 2022 - Present",
        location: "Remote",
        tasks: [
          "Completed over 70 gigs with a 100% customer satisfaction rate",
          "Developed customized website designs using frameworks such as Laravel, Vue.js, and Flask",
          "Developed custom WordPress extensions and themes",
          "Transformed Figma and Photoshop mockups into responsive and functional websites",
          "Created custom APIs to deliver secure and fast data",
          "Debugged PHP and JavaScript code",
        ],
      },
      {
        title: "Junior Web Developer",
        company: "Oba Code",
        period: "October 2019 - September 2021",
        location: "Cotonou, Benin",
        tasks: [
          "Used Git for version control to decrease code conflicts",
          "Customized website content with WordPress, improving content management efficiency",
          "Collaborated with designers and performance team on designing updates to sites and blogs, improving user experience",
          "Briefed development team on website research, and made suggestions for website builds/products",
          "Participated in stand-ups 2 times a month, where team leaders would review, assign, and coach team members",
        ],
      },
      {
        title: "Accountant",
        company: "AHVIC",
        period: "December 2014 - June 2018",
        location: "Cotonou, Benin",
        tasks: [
          "Prepared financial records and financial statements",
          "Performed budget analysis and cost control measures",
          "Collaborated with auditors during financial audits",
          "Provided financial insights and recommendations to management",
        ],
      },
    ],
  },
}

// Current language state
let currentLanguage = "fr"

// Function to update content based on language
function updateContent() {
  const t = content[currentLanguage]

  // Update button text
  document.getElementById("printBtnText").textContent = t.downloadBtn
  document.getElementById("langBtnText").textContent = t.langBtn

  // Update titles
  document.getElementById("jobTitle").textContent = t.title
  document.getElementById("skillsTitle").textContent = t.skills
  document.getElementById("languagesTitle").textContent = t.languages
  document.getElementById("educationTitle").textContent = t.education
  document.getElementById("experienceTitle").textContent = t.experience

  // Update languages list
  const languageList = document.getElementById("languageList")
  languageList.innerHTML = ""
  t.languagesList.forEach((lang) => {
    const li = document.createElement("li")
    li.className = "language-item"
    li.innerHTML = `
            <div class="bullet"></div>
            <span>${lang}</span>
        `
    languageList.appendChild(li)
  })

  // Update experiences
  const experienceList = document.getElementById("experienceList")
  experienceList.innerHTML = ""
  t.experiences.forEach((exp) => {
    const div = document.createElement("div")
    div.className = "experience-item"

    const tasksHTML = exp.tasks
      .map(
        (task) => `
            <li class="experience-task">
                <span class="task-bullet">•</span>
                <span>${task}</span>
            </li>
        `,
      )
      .join("")

    div.innerHTML = `
            <div class="experience-header">
                <div>
                    <h3 class="experience-job-title">${exp.title}</h3>
                    <p class="experience-company">${exp.company}</p>
                </div>
                <div class="experience-meta">
                    <p>${exp.period}</p>
                    <p>${exp.location}</p>
                </div>
            </div>
            <ul class="experience-tasks">
                ${tasksHTML}
            </ul>
        `
    experienceList.appendChild(div)
  })

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage
}

// Language toggle handler
document.getElementById("langToggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "fr" ? "en" : "fr"
  updateContent()
})

// Print handler
document.getElementById("printBtn").addEventListener("click", () => {
  window.print()
})

// Initialize content on page load
document.addEventListener("DOMContentLoaded", () => {
  updateContent()
})
