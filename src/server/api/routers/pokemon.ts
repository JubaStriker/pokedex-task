/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export type TPokemon = {
    name: string;
    types: string[];
    sprite: string;
}

export const pokemonRouter = createTRPCRouter({
    createPokemon: publicProcedure
        .input(z.object({
            name: z.string(),
            types: z.array(z.string()),
            sprite: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {
            const pokemon: TPokemon = await ctx.prisma.pokemon.create({
                data: {
                    name: input.name,
                    types: input.types,
                    sprite: input.sprite
                },
            });
            return pokemon;
        }),
    getPokemon: publicProcedure.input(z.object({
        name: z.string(),
    })).query(async ({ ctx, input }) => {
        const pokemon = await ctx.prisma.pokemon.findMany({
            where: {
                name: input.name,
            },
        });
        return pokemon;
    })
});