import React, { useReducer } from 'react';

export const MessagesContext = React.createContext({
  messages: [],
  publish: () => {},
});

export const MessagesProvider = ({ children }) => {
  // https://reactjs.org/docs/context.html#caveats
  const [value, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'NEW_MESSAGE':
          const newState = {
            ...state,
            messages: state.messages
              .concat([
                {
                  ...action.payload,
                  timestamp: new Date(),
                },
              ])
              .sort((a, b) => a.timestamp - b.timestamp),
          };

          return newState;
        default:
          return { ...state };
      }
    },
    {
      messages: [
        {
          name: 'Skeeter',
          msg: 'Nisi occaecat voluptate excepteur culpa duis.',
          timestamp: new Date(),
        },
        {
          name: 'Skeeter',
          msg:
            'Culpa eiusmod sit minim aute cillum ex proident culpa eu aliquip anim duis.',
          timestamp: new Date(),
        },
        {
          name: 'Bubba',
          msg:
            'Culpa et dolor nisi mollit ea eiusmod minim culpa velit.\nAd enim voluptate est labore exercitation voluptate irure incididunt commodo veniam commodo magna.',
          timestamp: new Date(),
        },
      ],
      publish: (name, msg) => {
        dispatch({ type: 'NEW_MESSAGE', payload: { name, msg } });
      },
    }
  );

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};
