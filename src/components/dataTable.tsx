import { DataGrid, GridColDef} from '@mui/x-data-grid';
import {useState} from "react";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID'},
    { field: 'brand', headerName: 'Brands'},
];

const rows = [
    { id: 1, brand: 'Nike'},
    { id: 2, brand: 'Lacoste'},
    { id: 3, brand: 'Koton'},
    { id: 4, brand: 'Gucci'},
    { id: 5, brand: 'Adidas'},
    { id: 6, brand: 'LC Waikiki'},
    { id: 7, brand: 'H&M'},
    { id: 8, brand: 'Zara'},
    { id: 9, brand: 'Mavi'},
    { id: 10, brand: 'Puma'},
];

export default function DataTable() {
    const [selectedRowIds, setSelectedRowIds] = useState<number[]>([]);

    const handleSelectionModelChange = (selectionModel: any) => {
        setSelectedRowIds(selectionModel);
    };

    return (
        <div>
            Selected Row IDs: {selectedRowIds.join(', ')}
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                onRowSelectionModelChange={handleSelectionModelChange}
            />
        </div>
    );
}