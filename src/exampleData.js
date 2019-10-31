export const exampleRecipe = {
  id: 1,
  name: 'Basic Recipe',
  username: 'Amy Hayashida',
  description: 'This is my oldest recipe, I made it 10 minutes ago',
  yield_min: '4',
  yield_max: '6',
  active_time: '30 minutes',
  cooking_time: '45 minutes',
  ingredients: [
    {
      id: 1,
      amount: '1/2',
      unit: 'tsp',
      item: 'baking soda',
    },
    {
      id: 2,
      amount: '4',
      unit: 'lbs',
      item: 'potatoes',
    },
    {
      id: 3,
      amount: '5',
      unit: 'tbls',
      item: 'Olive oil',
    },
    {
      id: 4,
      amount: '3',
      unit: 'clove',
      item: 'garlic',
    },
  ],
  directions: [
    {
      id: 1,
      order: '1',
      step: 'adjust oven rack to center position',
    },
    {
      id: 2,
      order: '2',
      step: 'combine oil, pepper, cook',
    },
    {
      id: 3,
      order: '3',
      step: 'place in oven',
    },
  ],
  equipment: 'baking sheet, fine-mesh strainer',
  notes: 'be sure to chop the potatoes finely',
};

export const userRecipeArray = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    name: 'bulgogi pho',
    description: 'This is an evil fusion that should never exist',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    name: 'spam musubi',
    description: 'only one of the greatest dishes known to mankind',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    name: 'macaroni bechamel',
    description: 'My nemesis, someday I will perfect you, but today is not that day',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    name: 'street tacos',
    description: 'One of the 7 wonders of the culinary world, so perfect, so small',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
    name: 'tobacco',
    description: 'this is not a food, why would you eat it?',
  },
];
