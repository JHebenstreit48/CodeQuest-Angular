import { Subpage } from '@/Navigation-Structure/NavigationTypes';

const APIVersioningNavigation: Subpage = {
  name: 'API Versioning',
  subpages: [
    {
      name: 'API Versioning Strategies',
      path: '/apis/advanced/versioning/strategies',
    }, // Merged when to version & approaches
    {
      name: 'Versioning in REST vs GraphQL',
      path: '/apis/advanced/versioning/rest-vs-graphql',
    },
    {
      name: 'Deprecating Old API Versions',
      path: '/apis/advanced/versioning/deprecating',
    },
  ],
};

export default APIVersioningNavigation;
