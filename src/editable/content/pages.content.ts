import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Social bookmarking resources and curated links',
      description: 'Discover useful social bookmarking resources, saved links, collections, references, and submission-ready pages.',
      openGraphTitle: 'Social bookmarking resources and curated links',
      openGraphDescription: 'Browse curated SBM links, collections, references, and useful resources in a clean discovery layout.',
      keywords: ['social bookmarking', 'SBM', 'bookmarking sites', 'curated links', 'resource discovery'],
    },
    hero: {
      badge: 'Curated SBM discovery',
      title: ['Save smarter links.', 'Find better bookmarking opportunities.'],
      description: 'Explore social bookmarking pages, curated resources, niche references, and submission-friendly links in a clean board built for quick decisions.',
      primaryCta: { label: 'Browse SBM resources', href: '/sbm' },
      secondaryCta: { label: 'Create bookmark', href: '/create' },
      searchPlaceholder: 'Search SBM links, categories, resources, and titles',
      focusLabel: 'Resource lanes',
      featureCardBadge: 'curated bookmark board',
      featureCardTitle: 'Fresh SBM resources stay visible, scannable, and easy to open.',
      featureCardDescription: 'Recent bookmarks, useful descriptions, and category cues help visitors move from discovery to action quickly.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for social bookmarking discovery, review, and submission planning.',
      paragraphs: [
        'This site brings together curated SBM resources, reference pages, and bookmark details so visitors can evaluate useful links without bouncing between messy lists.',
        'Every page is designed to make link quality, topic relevance, and next actions easier to understand at a glance.',
        'Whether someone starts from the homepage, search, a category, or a saved-resource detail page, the experience keeps the SBM workflow connected.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'SBM-first homepage with useful resource cards and fast scanning.',
        'Connected archive, search, create, and detail pages for bookmarking workflows.',
        'Cleaner browsing rhythm designed for comparison and quick action.',
        'Lightweight UI that keeps links, titles, and descriptions readable.',
      ],
      primaryLink: { label: 'Browse SBM', href: '/sbm' },
      secondaryLink: { label: 'Create bookmark', href: '/create' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore SBM resources through one focused bookmarking experience.',
      description: 'Move between saved links, categories, search results, and bookmark details through one clearer visual system.',
      primaryCta: { label: 'Browse SBM', href: '/sbm' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A cleaner way to discover social bookmarking resources.',
    description: `${slot4BrandConfig.siteName} is built to make SBM research, saved-resource browsing, and submission planning feel organized instead of scattered.`,
    paragraphs: [
      'Instead of sending visitors through flat link lists, the platform gives each social bookmark enough structure to explain why it matters.',
      'Visitors can browse categories, search by intent, open resource details, and create new bookmark submissions while staying in one consistent interface.',
      'The result is a focused SBM experience for discovery, comparison, and link curation.',
    ],
    values: [
      {
        title: 'SBM-first structure',
        description: 'Every surface prioritizes saved links, source context, categories, and useful descriptions.',
      },
      {
        title: 'Fast resource scanning',
        description: 'Cards and detail pages are built so visitors can compare bookmarking opportunities quickly.',
      },
      {
        title: 'Clean submission flow',
        description: 'Create, contact, login, and signup pages support a practical workflow for adding useful SBM resources.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send SBM resources, partnership notes, or curation requests.',
    description: 'Share a bookmarking site, resource list, correction, or collaboration request. We will route it to the right curation lane and keep the details clear.',
    formTitle: 'Send your SBM request',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find SBM links, topics, and saved resources faster.',
      description: 'Use keywords, categories, and content types to discover bookmark resources across the site.',
      placeholder: 'Search by SBM keyword, category, source, or title',
    },
    resultsTitle: 'Latest searchable SBM resources',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a new social bookmarking resource.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create SBM resources.',
      description: 'Use your account to open the publishing workspace and submit new social bookmarking resources.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a useful social bookmark.',
      description: 'Add the source URL, category, summary, and curation notes so visitors understand the value of the saved resource.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your SBM workspace.',
      description: 'Login to create bookmarks, manage saved-resource drafts, and keep your curation flow moving.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start bookmarking.',
      description: 'Create an account to submit SBM resources, save source details, and build cleaner bookmark collections.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
