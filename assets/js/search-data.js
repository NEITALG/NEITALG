// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/NEITALG/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Research themes and work packages of the NEITALG project.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/NEITALG/research/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "Open-source software developed as part of the NEITALG project.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/NEITALG/software/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications of the NEITALG project, sorted by year.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/NEITALG/publications/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Members of the NEITALG research team.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/NEITALG/people/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Latest news and announcements from the NEITALG project.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/NEITALG/news/";
          },
        },{id: "news-on-monday-11-05-2026-prof-massimo-fornasier-will-give-a-faumod-lecture-organized-by-the-research-center-for-mathematics-of-data-at-friedrich-alexander-universität-erlangen-nürnberg-the-lecture-is-titled-breaking-nonconvexity-consensus-based-optimization-and-more-details-can-be-found-here",
          title: 'On Monday 11.05.2026 Prof. Massimo Fornasier will give a FAUMod lecture organized by...',
          description: "",
          section: "News",},{id: "projects-consensus-based-optimization",
          title: 'Consensus-Based optimization',
          description: "Breaking Nonconvexity",
          section: "Projects",handler: () => {
              window.location.href = "/NEITALG/projects/1_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/NEITALG/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/NEITALG/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%69%6D.%72%6F%69%74%68@%74%75%6D.%64%65", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
