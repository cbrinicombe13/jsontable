import JsonTable from './JsonTable';
import data from "./data.json";
import { ColumnDef } from './interfaces';

export interface TestData {
    id: number,
    num: string,
    name: string,
    img: string,
    type: string[],
    height: string,
    weight: string,
    candy: string,
    candy_count: number,
    egg: string,
    spawn_chance: number,
    avg_spawns: number,
    spawn_time: string,
    multipliers: number[],
    weaknesses: string[],
    next_evolution: {
        num: string,
        name: string
    }[]
};

const columns: ColumnDef[] = [
    {
        key: "id",
        label: "ID"
    },
    {
        key: "num",
        label: "Pokedex No."
    },
    {
        key: "name",
        label: "Name"
    },
    {
        key: "img",
        label: "Image URL",
        formatter(val: TestData["img"], row: TestData) {
            return (
                <img
                    src={val}
                    alt={row.name}
                    width={100}
                    height={100}
                />
            )
        },
    },
    {
        key: "type",
        label: "Type",
    },
    {
        key: "height",
        label: "Height"
    },
    {
        key: "weight",
        label: "Weight"
    },
    {
        key: "candy",
        label: "Candy"
    },
    {
        key: "candy_count",
        label: "Candy Count"
    },
    {
        key: "egg",
        label: "Egg"
    },
    {
        key: "spawn_chance",
        label: "Spawn Chance"
    },
    {
        key: "avg_spawns",
        label: "Average Spawns"
    },
    {
        key: "spawn_time",
        label: "Spawn Time"
    },
    {
        key: "multipliers",
        label: "Multipliers"
    },
    {
        key: "weaknesses",
        label: "Weaknesses"
    },
    {
        key: "prev_evolution",
        label: "Previous Evolutions"
    },
    {
        key: "next_evolution",
        label: "Next Evolutions"
    }
];

const App = () => {
    return (
        <JsonTable
            columns={columns}
            data={data.pokemon}
        />
    )
}

export default App
