import propValidation from '../images/blogs/react-insight.jpg';
import propDrilling from '../images/blogs/prop-drilling.jpg';
import gitWrongFile from '../images/blogs/git-wrong-file.jgp.jpg';
import varAndLet from '../images/blogs/var-and-let.png';

export const BLOGPOSTS = [
  {
    title: "React Insight: Let's Talk About Prop Drilling",
    category: "React.js",
    date: "2024-08-12",
    imgSrc: propDrilling,
    altText: "React Insight: Let's Talk About Prop Drilling",
    url: "https://www.linkedin.com/posts/abhijeet-bhaskar_reactjs-webdevelopment-frontend-activity-7228407338334896128-SIgH",
    excerpt:
      "React gives us alternatives like Context API and state management libraries (Redux, Zustand, etc.) to avoid prop drilling.",
  },
  {
    title: "Git Insight: Commited The Wrong File? No Problem!",
    category: "Git and Version Control",
    date: "2024-08-14",
    imgSrc: gitWrongFile,
    altText: "Git Insight: Commited The Wrong File? No Problem!",
    url: "https://www.linkedin.com/posts/abhijeet-bhaskar_git-versioncontrol-webdevelopment-activity-7229071735831064576-9lQ4",
    excerpt:
      "Ever had that moment where you commit a bunch of changes, only to realize you mistakenly included something like package-lock.json? 😅",
  },
  {
    title: "JavaScript Insight: Why I No Longer Use var",
    category: "JavaScript",
    date: "2024-08-10",
    imgSrc: varAndLet,
    altText: "JavaScript Insight: Why I No Longer Use var",
    url: "https://www.linkedin.com/posts/abhijeet-bhaskar_javascript-typescript-reactjs-activity-7227897895021109248-K61m?trk=public_profile",
    excerpt:
      "Imagine you're at a party, and you’ve invited two guests: var and let. 🎉",
  },
  {
    title: "React Insight: The Dreaded 'Missing In Props Validation' Warning",
    category: "React.js",
    date: "2024-08-13",
    imgSrc: propValidation,
    altText: "React Insight: The Dreaded 'Missing In Props Validation' Warning",
    url: "https://www.linkedin.com/posts/abhijeet-bhaskar_reactjs-webdevelopment-proptypes-activity-7228694292611919873-KB6H",
    excerpt:
      "Ever been in the middle of coding when React throws a warning like: 'styles.cssClassName is missing in props validation'? 😅",
  }
];
