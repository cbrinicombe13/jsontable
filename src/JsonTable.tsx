import { ColumnDef } from "./interfaces";

interface Props {
    columns: ColumnDef[];
    data: any[];
}

function App({ columns, data }: Props) {
    const renderValue = (
        // Current column key
        key: string,
        // Current cell value
        value: any,
        // Full column record
        column: ColumnDef,
        // Full row record
        row: any
    ): any => {
        if (value === undefined || value === null) {
            // No value? Skip.
            return null;
        } else if (column?.formatter) {
            // Custom formatter? Run it.
            return column.formatter(value, row);
        } else if (typeof value === 'string' || typeof value === 'number') {
            // Raw value? Show it.
            return value;
        } else if (Array.isArray(value)) {
            // Array? Format each member.
            return value.map(v => renderValue(key, v, column, row));
        } else {
            // Anything else? Give up.
            return JSON.stringify(value);
        }
    }

    return (
        <table>
            <thead>
                <tr>
                    {
                        columns.map(h => (
                            <th key={`header__${h.key}`}>{h.label}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row, ind) =>
                        <tr key={`row__${ind}`}>
                            {
                                columns.map(column =>
                                (
                                    <td key={`cell_${ind}_${column.key}`}>
                                        {
                                            renderValue(
                                                column.key,
                                                row[column.key],
                                                column,
                                                row
                                            )
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default App;
