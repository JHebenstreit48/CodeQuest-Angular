import { Subpage } from '@/Navigation-Structure/NavigationTypes';

const APIFundamentalsNavigation: Subpage = {
  name: 'API Fundamentals',
  subpages: [
    { name: 'Core API Concepts', path: '/apis/intro/fundamentals/overview' },
    {
      name: 'Common API Use Cases',
      path: '/apis/intro/fundamentals/use-cases',
    },
    {
      name: 'APIs in Web Development',
      path: '/apis/intro/fundamentals/web-development',
    },
    {
      name: 'Common API Misconceptions',
      path: '/apis/intro/fundamentals/misconceptions',
    },
  ],
};

export default APIFundamentalsNavigation;
