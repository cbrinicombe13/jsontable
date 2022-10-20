export interface ColumnDef {
    // Unique identifier for column
    key: string;
    // Header label for column
    label: string;
    // Custom formatter for cell values
    formatter?: (val: any, row: any) => any;
};
