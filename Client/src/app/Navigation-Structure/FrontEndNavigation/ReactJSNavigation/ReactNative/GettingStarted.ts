import { Subpage } from '@/Navigation-Structure/NavigationTypes';

const RNGettingStartedNavigation: Subpage = {
  name: 'Getting Started',
  subpages: [
    {
      name: 'Introduction & Setup',
      path: '/react/native/gettingstarted/intro',
    }, // What is React Native? Use cases & benefits
    {
      name: 'Folder Structure & Best Practices',
      path: '/react/native/gettingstarted/project-structure',
    }, // Organizing files & folders in React Native projects
  ],
};

export default RNGettingStartedNavigation;
