import { Subpage } from '@/Navigation-Structure/NavigationTypes';

const RateLimitingNavigation: Subpage = {
  name: 'Rate Limiting',
  subpages: [
    {
      name: 'Why Rate Limiting Matters',
      path: '/apis/advanced/ratelimiting/importance',
    },
    {
      name: 'Rate Limiting Techniques',
      path: '/apis/advanced/ratelimiting/strategies',
    }, // Merged two topics
    {
      name: 'Handling Rate Limits as a Consumer',
      path: '/apis/advanced/ratelimiting/consumer-handling',
    },
  ],
};

export default RateLimitingNavigation;
