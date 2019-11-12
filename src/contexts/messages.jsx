import React, {useReducer} from 'react';

export const MessagesContext = React.createContext({
  messages: [],
  publish: () => {},
});

export const MessagesProvider = ({children}) => {
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

          console.debug('NEW STATE:', newState);
          return newState;
        default:
          return {...state};
      }
    },
    {
      messages: [
        {
          name: 'Skeeter',
          msg: 'Nisi occaecat voluptate excepteur culpa duis.',
          timestamp: new Date(),
          type: 'text',
        },
        {
          name: 'Skeeter',
          msg:
            'Culpa eiusmod sit minim aute cillum ex proident culpa eu aliquip anim duis.',
          timestamp: new Date(),
          type: 'text',
        },
        {
          name: 'Bubba',
          msg:
            'Culpa et dolor nisi mollit ea eiusmod minim culpa velit.\nAd enim voluptate est labore exercitation voluptate irure incididunt commodo veniam commodo magna.',
          timestamp: new Date(),
          type: 'text',
        },
      ],
      publish: (name, msg, type = 'text') => {
        dispatch({type: 'NEW_MESSAGE', payload: {name, msg, type}});
      },
    },
  );

  return (
    <MessagesContext.Provider value={value}>
      {children}
    </MessagesContext.Provider>
  );
};
