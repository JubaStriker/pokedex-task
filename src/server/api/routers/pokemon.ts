/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

type TPokemon = {
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
    create: publicProcedure
        .input(z.object({ name: z.string().min(1) }))
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.post.create({
                data: {
                    name: input.name,
                },
            });
        }),
});