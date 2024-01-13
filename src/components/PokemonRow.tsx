/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from "~/utils/api";
import styles from "../pages/index.module.css";
import { type TPokemon } from "~/server/api/routers/pokemon";

const PokemonRow = (props: { name: string }) => {
    const { name } = props;
    const { data, isLoading } = api.pokemon.getPokemon.useQuery({
        name: name
    })

    console.log(data, isLoading)

    return (
        <div>
            {data?.length === 0 ? <h1 className={styles.title}>NOT FOUND</h1> : ''}
            {data?.map(e => <h1
                key={e.id}
                className={styles.title}>
                {e.name ? e.name : "NOT FOUND"}</h1>)}
        </div>
    );
};

export default PokemonRow;