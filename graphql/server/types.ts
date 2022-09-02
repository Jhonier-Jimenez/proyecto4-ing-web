import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server-micro';
import { model1Types } from '@graphql/server/model1/types';
import { usuarioTypes } from '@graphql/server/usuario/types';
import { proyectoTypes } from '@graphql/server/proyecto/types';

const CommonTypes = gql`
  scalar Date
`;

const globalTypes: DocumentNode[] = [
  CommonTypes,
  model1Types,
  usuarioTypes,
  proyectoTypes,
];

export { globalTypes };
