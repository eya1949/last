//  // dark mood 

//  // icons
//  const sunIcon =document.querySelector(".sun");
//  const moonIcon =document.querySelector(".moon"); 
 
//  //theme vars 
//  const userTheme =localStorage.getItem("theme");
//  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

//  //Icon toggling
//  const iconToggle = () => {
//      moonIcon.classList.toggle("display-none");
//      sunIcon.classList.toggle("display-none");
//  };

//  //initial Theme Check
//  const themCheck = () => {
//      if(userTheme === "dark" || (!userTheme && systemTheme)){
//          document.documentElement.classList.add("dark");
//          moonIcon.classList.add("display-none");
//          return;
//      }
//      sunIcon.classList.add("display-none");
//  };

//  // Manual Thema switch
//  const themeSwitch = () => {
//      if(document.documentElement.classList.contains("dark")){
//          document.documentElement.classList.remove("dark");
//          localStorage.setItem("theme", "light");
//          iconToggle();
//          return;
//      }
//      document.documentElement.classList.add("dark");
//      localStorage.setItem("theme","dark");
//      iconToggle();

//  }

//  //call theme switch on clicking button

//  sunIcon.addEventListener("click", () => {
//      themeSwitch();
//  });

//  moonIcon.addEventListener("click", () => {
//      themeSwitch();
//  });

//  //invoke theme check on initial load
//  themCheck();


// Icon elements
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Function to toggle icons
const toggleIcons = () => {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
};

// Function to check and set initial theme
const checkTheme = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        sunIcon.classList.add("hidden");
    } else {
        document.documentElement.classList.remove("dark");
        moonIcon.classList.add("hidden");
    }
};

// Function to switch theme manually
const switchTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    toggleIcons();
};

// Event listeners for icon clicks
sunIcon.addEventListener("click", switchTheme);
moonIcon.addEventListener("click", switchTheme);

// Invoke theme check on initial load
checkTheme();

