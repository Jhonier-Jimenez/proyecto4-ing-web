import { Resolver } from 'types';
import prisma from 'config/prisma';

const usuarioResolvers: Resolver = {
  Usuario: {
    proyectos: async (parent, args) => {
      return await prisma.proyecto.findMany({
        where: {
          usuarios: {
            some: {
              id: parent.id,
            },
          },
        },
      });
    },
  },
  Query: {
    obtenerUsuarios: async (parent, args) => {
      const usuario = await prisma.usuario.findMany();
      return usuario;
    },
  },
  Mutation: {
    setUsuario: async (parent, args) => {
      const usuario = await prisma.usuario.create({
        data: {
          identificacion: args.data.identificacion,
          nombre: args.data.nombre,
          email: args.data.email,
          role: 'Cliente',
        },
        obtenerUsuario: async (parent, args) => {
            return await prisma.usuario.findUnique({
                where: {
                    email: args.email
                }
            });
        }
    },
    updateUsuario: async (parent, args) => {
      const usuario = await prisma.usuario.update({
        where: {
          email: args.emailOriginal,
        },
        data: {
          ...args.data,
        },
      });
      return usuario;
    },
    deleteUsuario: async (parent, args) => {
      return await prisma.usuario.delete({
        where: {
          email: args.email,
        },
      });
    },
  },
};

export { usuarioResolvers };
