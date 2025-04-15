import { Subpage } from '@/Navigation-Structure/NavigationTypes';

const ReactBasicsNavigation: Subpage = {
  name: 'Advanced Topics',
  subpages: [
    {
      name: 'React Router',
      path: '/react/basics/advanced/react-router',
    }, // Client-side navigation
    {
      name: 'Performance Optimization',
      path: '/react/basics/advanced/performance',
    }, // Memoization, lazy loading
    {
      name: 'Error Handling',
      path: '/react/basics/advanced/error-handling',
    }, // Error boundaries & fallback UI
  ],
};

export default ReactBasicsNavigation;
