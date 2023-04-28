interface Item {
  title: string;
  hasChildren: boolean;
  children: Item[];
}

type NavbarItems = Item[];

export const navbarItems: NavbarItems = [
  {
    title: 'Beauty Services',
    hasChildren: true,
    children: [
      {
        title: 'Skin Precision Analyzer',
        hasChildren: false,
        children: []
      },
      {
        title: 'Foundation Finder',
        hasChildren: false,
        children: []
      },
      {
        title: 'Virtual Try-On',
        hasChildren: false,
        children: []
      },
      {
        title: 'Fragrance Finder',
        hasChildren: false,
        children: []
      },
      {
        title: 'Olfactive Signature',
        hasChildren: false,
        children: []
      }
    ]
  },
  {
    title: 'Gifts',
    hasChildren: false,
    children: []
  },
  {
    title: 'Makeup',
    hasChildren: false,
    children: []
  },
  {
    title: 'Skincare',
    hasChildren: false,
    children: []
  },
  {
    title: 'Fragrances',
    hasChildren: false,
    children: []
  },
  {
    title: 'Contact Us',
    hasChildren: false,
    children: []
  }
];
