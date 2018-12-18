// import {
//   GraphQLObjectType,
//   GraphQLNonNull,
//   GraphQLSchema,
//   GraphQLString,
//   GraphQLList,
//   GraphQLInt,
//   GraphQLBoolean
// } from 'graphql/type';
//
// import TodoMongo from '../../mongoose/Todo';
//
// /**
//  * generate projection object for mongoose
//  * @param  {Object} fieldASTs
//  * @return {Project}
//  */
// export const getProjection = fieldASTs => {
//   return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
//     projections[selection.name.value] = true;
//     return projections;
//   }, {});
// };
//
// const todoType = new GraphQLObjectType({
//   name: 'todo',
//   description: 'todo item',
//   fields: () => ({
//     itemId: {
//       type: (GraphQLInt),
//       description: 'The id of the todo.',
//     },
//     item: {
//       type: GraphQLString,
//       description: 'The name of the todo.',
//     },
//     completed: {
//       type: GraphQLBoolean,
//       description: 'Completed todo? '
//     }
//   })
// });
//
// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       todo: {
//         type: new GraphQLList(todoType),
//         args: {
//           itemId: {
//             name: 'itemId',
//             type: new GraphQLNonNull(GraphQLInt)
//           }
//         },
//         resolve: async (root, { itemId }, source, fieldASTs) => {
//           try {
//             const projections = getProjection(fieldASTs);
//             return await TodoMongo.find({itemId}, projections);
//           } catch (err) {
//             console.log(err);
//             return err;
//           }
//         }
//       }
//     }
//   })
// });
//
// export default schema;