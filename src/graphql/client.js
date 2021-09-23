import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
    uri: 'https://toodoo-list.herokuapp.com/v1/graphql'
})

export default client;
